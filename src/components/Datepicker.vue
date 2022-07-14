<template>
  <div class="row justify-content-start p-0 py-lg-5">
    <div class="col-sm-12 col-md-8 col-lg-6">
      <p>Select Dates for BTC Price:</p>
        <date-picker v-model="date" :disabledDates="disabledDates" range format="dd-MM-yyyy" @update:modelValue="this.$emit('changeDate', date);"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import axios from 'axios';
import moment from 'moment';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "Datepicker",
  components: { DatePicker },
  methods: {
    changeDate: (date) => {
      this.$emit('changeDate', date);
    },
    changeBTCData: (cryptoData) => {
      this.$emit('changeBTCData', cryptoData);
    },
    disabledDates: (date) => {
      return date > new Date();
    }
  },
  mounted() {
    this.$emit("changeDate", this.date);
    this.$emit("changeBTCData", this.cryptoData);
  },
  setup(){
    const date = ref();
    let cryptoData = null;

    onMounted(function(){
      let endDate = new Date();
      let startDate = new Date(new Date().setDate(endDate.getDate() - 1));

      startDate = moment(startDate).format("YYYY-MM-DD");
      endDate = moment(endDate).format("YYYY-MM-DD");

      startDate = startDate + 'T' + moment(startDate).format('HH:MM');
      endDate = endDate + 'T' + moment(endDate).format('HH:MM');

      date.value = [startDate, endDate];
    });

    return {
      date, cryptoData
    }
  }
}
</script>

<style scoped>

</style>