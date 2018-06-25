function renderChart() {
    Highcharts.chart('chart', {
        animation: Highcharts.svg,
        chart: {
            type: 'line'
        },
        title: {
            text: "UP! UP! Bitcoin TAT"
        },
        xAxis: {
            type: 'datetime',
            categories: timeArray
        },
        yAxis: {
            title: {
                text: 'Price'
            },
        },
        series: [{
            name: 'BTC',
            data: btcArray
        }, {
            name: 'ETH',
            data: ethArray
        }, {
            name: 'DASH',
            data: dashArray
        }, ]
    });
} // renderChart end
