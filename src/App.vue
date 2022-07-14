<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import UserProfile from "./components/UserProfile.vue";
import Datepicker from "./components/Datepicker.vue";
import Chart from "./components/Chart.vue";
</script>

<template>
  <main class="container-fluid">
    <section class="row">
      <div class="col-md-12 col-lg-3">
        <UserProfile />
      </div>
      <div class="col-md-12 col-lg-9">
        <Datepicker v-on:changeDate="updateDate($event)"/>
        <Chart :btcPrices="btcPrices" :btcDates="btcDates"/>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: 'App',
  data(){
    return{
      date: null,
      btcPrices: [],
      btcDates: []
    }
  },
  methods: {
    updateDate: function (updatedDate){
      this.date = updatedDate;

      let startDate = this.date[0];
      let endDate = this.date[1];

      startDate = moment(startDate).format("YYYY-MM-DD");
      endDate = moment(endDate).format("YYYY-MM-DD");

      startDate = startDate + 'T' + moment(startDate).format('HH:MM');
      endDate = endDate + 'T' + moment(endDate).format('HH:MM');

      const api = 'https://www.coindesk.com/pf/api/v3/content/fetch/chart-api?query={"end_date": "' +endDate+ '", "iso": "BTC", "ohlc": false, "start_date": "'+startDate+'"}&id=144';
      axios.get(api).catch(function (error) {
        if (error.response) {
          alert('The request was made and the server responded with a status code that falls out of the range of 2xx... \n' +
              'Please refresh to try again!');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          alert('The request was made but no response was received... \n' +
              'Please refresh to try again!');
          console.log(error.request);
        } else {
          alert('Something happened in setting up the request that triggered an Error... \n' +
              'Please refresh to try again!');
          console.log('Error', error.message);
        }
        alert('Something went wrong... \n' +
            'Please refresh to try again!');
        console.log(error.config);
      }).then((response) => {
        response.data.entries.map((item, index)=>{
          this.btcDates[index] = item[0];
          this.btcPrices[index] = [item[0], item[1].toFixed(2)];
        });
      });
    }
  }
}
</script>
