
var variabilityChart = new Chart(document.getElementById('variability01'), {
type: 'pie',
data : {datasets: [{data: [40,60],backgroundColor: ["#FFFFFF","#0DB5FE"]}]}
//options: {scale: {angleLines: {display: false},ticks: {suggestedMin: 5,suggestedMax: 30}}},
});

var symmetryChart = new Chart(document.getElementById('symmetry01'), {
type: 'pie',
data : {datasets: [{data: [40,60],backgroundColor: ["#FFFFFF","#0DB5FE"]}]}
//options: {scale: {angleLines: {display: false},ticks: {suggestedMin: 5,suggestedMax: 30}}},
});

var balanceChart = new Chart(document.getElementById('balance01'), {
type: 'pie',
data : {datasets: [{data: [40,60],backgroundColor: ["#FFFFFF","#0DB5FE"]}]}
//options: {scale: {angleLines: {display: false},ticks: {suggestedMin: 5,suggestedMax: 30}}},
});

var barOptions_stacked1 = {
          tooltips: {enabled: false},animation: {duration: 0,
          onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#ffffff';
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x -150, bar._model.y +10);
                    });
                });
            }},
          scales: {xAxes: [{ticks: {display: false,},scaleLabel: {display: false},gridLines: {display: false},stacked: true}],
                         yAxes: [{    barPercentage: 0.3,  categoryPercentage: 1,gridLines: {display: false,},ticks: {fontSize: 20},stacked: true}]},
                         legend: {display: false}};

var temporal = new Chart(document.getElementById("temporal01"), {
        type: 'horizontalBar',
        data: {
            labels: ["Left", "Right"],
            datasets: [{
                    data: [60,50],
                    backgroundColor: "#0DB5FE",
                    hoverBackgroundColor: "#6F7172",
                }, {
                    data: [40,50],
                    backgroundColor: "#6F7172",
                    hoverBackgroundColor: "#0DB5FE",
                }]
        },
        options: barOptions_stacked1
    });

var barOptions_stacked2 = {tooltips: {enabled: false},plugins: {chartJsPluginErrorBars: {width: '60%',color: 'darkgray'}},
          animation: {duration: 1,
          onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#6F7172';
                this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x +70, bar._model.y +10);});});}},
          scales: {xAxes: [{ticks: {display: true,fontSize: 15},scaleLabel: {display: false},gridLines: {display: true},stacked: true}],
                         yAxes: [{    barPercentage: 0.3,  categoryPercentage: 1,gridLines: {display: false,},ticks: {fontSize: 16},stacked: true}]},
                         legend: {display: false}};

var spatial1 = new Chart(document.getElementById("spatial01"), {
        type: 'horizontalBar',
        data: {
            labels: ["Left", "Right"],
            datasets: [{
                    data: [1.21,1.11],
                    errorBars: {"Left": {plus: 0.1, minus: -0.1},"Right": {plus: 0.1, minus: -0.2}},
                    backgroundColor: "#0DB5FE",
                }]
        },
        options: barOptions_stacked2
    });

var spatial2 = new Chart(document.getElementById("spatial02"), {
        type: 'horizontalBar',
        data: {
            labels: ["Left", "Right"],
            datasets: [{
                    data: [1.21,1.11],
                    errorBars: {"Left": {plus: 0.1, minus: -0.1},"Right": {plus: 0.1, minus: -0.2}},
                    backgroundColor: "#0DB5FE",
                }]
        },
        options: barOptions_stacked2
    });

var spatial3 = new Chart(document.getElementById("spatial03"), {
        type: 'horizontalBar',
        data: {
            labels: ["Left", "Right"],
            datasets: [{
                    data: [1.21,1.11],
                    errorBars: {"Left": {plus: 0.1, minus: -0.1},"Right": {plus: 0.1, minus: -0.2}},
                    backgroundColor: "#0DB5FE",
                }]
        },
        options: barOptions_stacked2
    });

var kinematicData1 = {labels: [0,0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        datasets: [{label: "Knee bend angle",borderColor: "#0DB5FE",backgroundColor:"transparent",pointRadius: 0,borderWidth:2,
                data: [180, 178, 170, 170, 171, 173, 177, 179, 180, 180,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",backgroundColor:"transparent",fill:false,pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 177, 168, 169, 169, 172, 175, 178, 178, 178,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",fill:'-1',pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 179, 172, 171, 172, 174, 178, 180, 180, 180,180]}]};

var kinematic1 = new Chart(document.getElementById("kinematic01"),{type: 'line',data : kinematicData1,options:{legend: {display: false},scales: {xAxes: [{scaleLabel: {display: true,labelString: 'Completion of gait cycle'}}]}}});

/*var kinematicData2 = {labels: [0,0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        datasets: [{label: "Knee bend angle",borderColor: "#0DB5FE",backgroundColor:"transparent",pointRadius: 0,borderWidth:2,
                data: [180, 178, 170, 170, 171, 173, 177, 179, 180, 180,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",backgroundColor:"transparent",fill:false,pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 177, 168, 169, 169, 172, 175, 178, 178, 178,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",fill:'-1',pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 179, 172, 171, 172, 174, 178, 180, 180, 180,180]}]};

var kinematic2 = new Chart(document.getElementById("kinematic02"),{type: 'line',data : kinematicData2,options:{legend: {display: false},scales: {xAxes: [{scaleLabel: {display: true,labelString: 'Completion of gait cycle'}}]}}});

var kinematicData3 = {labels: [0,0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        datasets: [{label: "Knee bend angle",borderColor: "#0DB5FE",backgroundColor:"transparent",pointRadius: 0,borderWidth:2,
                data: [180, 178, 170, 170, 171, 173, 177, 179, 180, 180,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",backgroundColor:"transparent",fill:false,pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 177, 168, 169, 169, 172, 175, 178, 178, 178,180]},
                {label: "Knee bend angle",borderColor: "#6F7172",fill:'-1',pointRadius: 0,borderWidth:1,borderDash: [10,10],
                        data: [180, 179, 172, 171, 172, 174, 178, 180, 180, 180,180]}]};

var kinematic3 = new Chart(document.getElementById("kinematic03"),{type: 'line',data : kinematicData3,options:{legend: {display: false},scales: {xAxes: [{scaleLabel: {display: true,labelString: 'Completion of gait cycle'}}]}}});
*/

var dtcData1 = {
    labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    datasets: [{
        label: "Speed",
        borderColor: "#0DB5FE",
        backgroundColor:"transparent",
        pointRadius: 0,
        borderWidth:2,
        data: [1.0, 1.2, 1.1, 1.3,1.2,0.9,0.8,0.7,0.7,0.7,0.8,0.8,0.9,1,1,1]
    }]
};

var dtc1 = new Chart(document.getElementById("dtc01"), {
    type: 'line',
    data : dtcData1,
    options: {
        legend: {
            display: false
        }, scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Gait cycle'
                }
            }]
        }
    }
});

var barOptions_stacked3 = {
        tooltips: {
            enabled: false
        },
        animation: {
            duration: 0,
            onComplete: function () {
                var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#ffffff';
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[bar];
                    });
                });
            }},
        scales: {xAxes: 
            [{
                ticks: {
                    display: true,
                    max: 15
                },
                scaleLabel: {
                    display: false
                },
                gridLines: {
                    display: false
                },
                stacked: true
            }],
            yAxes: [{    
                barPercentage: 0.5,  
                categoryPercentage: 1,
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 20
                },
                stacked: true
            }]
        },
        legend: {display: false}
    };

var dtcLabel1 = new Chart(document.getElementById("dtclabel01"), {
    type: 'horizontalBar',
    data: {
        labels: ["    ", "    ", "    "],
        datasets: [{
                data: [1,12,3],
                backgroundColor: "#0DB5FE",
                hoverBackgroundColor: "#6F7172",
            }, {
                data: [15,3,5],
                backgroundColor: "#ffffff",
                hoverBackgroundColor: "#0DB5FE",
            },{
                data: [0,0,3],
                backgroundColor: "#0DB5FE",
                hoverBackgroundColor: "#0DB5FE",
            },{
                data: [0,0,4],
                backgroundColor: "#ffffff",
                hoverBackgroundColor: "#0DB5FE",
            }]
    },
    options: barOptions_stacked3
});


