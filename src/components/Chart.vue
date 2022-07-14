<template>
  <div class="pt-5">
    <apexchart type="area" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "Chart",
  el: '#appl',
  props: {
    btcPrices: {
      type: Array
    },
    btcDates: {
      type: Array
    }
  },
  data: function() {
    return {
      options: {
        chart: {
          id: 'area-datetime',
          type: 'area',
        },
        title: {
          text: 'Bitcoin Analysis',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'dd MMM yy'
          },
          categories: this.btcDates
        },
        tooltip: {
          x: {
            format: 'dd MMM yy hh:mm'
          }
        },
      },
      series: [{
        name: 'Price',
        data: this.btcPrices
      }]
    }
  }
}
</script>
