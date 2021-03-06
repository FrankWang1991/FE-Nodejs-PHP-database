$(function() {
  $.ajax({
    url: 'http://localhost:3000/showData',
    dataType: "json",
    success: function(point) {
      var jsondata = JSON.parse(point);
      // console.log(typeof Number(jsondata[0]["aincreasenum"]));
      var datalength = jsondata.length;
      var nowAll = Number(jsondata[datalength - 1]["dtotalnum"]);
      var nowIncrease = Number(jsondata[datalength - 1]["dincreasenum"]);
      var twoAll = Number(jsondata[datalength - 2]["dtotalnum"]);
      var twoIncrease = Number(jsondata[datalength - 2]["dincreasenum"]);
      var threeAll = Number(jsondata[datalength - 3]["dtotalnum"]);
      var threeIncrease = Number(jsondata[datalength - 3]["dincreasenum"]);
      var fourAll = Number(jsondata[datalength - 4]["dtotalnum"]);
      var fourIncrease = Number(jsondata[datalength - 4]["dincreasenum"]);
      var fiveAll = Number(jsondata[datalength - 5]["dtotalnum"]);
      var fiveIncrease = Number(jsondata[datalength - 5]["dincreasenum"]);
      var sixAll = Number(jsondata[datalength - 6]["dtotalnum"]);
      var sixIncrease = Number(jsondata[datalength - 6]["dincreasenum"]);
      var sevenAll = Number(jsondata[datalength - 7]["dtotalnum"]);
      var sevenIncrease = Number(jsondata[datalength - 7]["dincreasenum"]);
      $('#fourthclass').highcharts({
        chart: {
          type: 'line'
        },
        title: {
          text: '近七日学员变动'
        },
        subtitle: {
          text: '数据来源: ketang.com'
        },
        xAxis: {
          categories: ['前六天', '前五天', '前四天', '前三天', '前天', '昨天', '今天']
        },
        yAxis: {
          title: {
            text: '人数'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true // 开启数据标签
            },
            enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
        },
        series: [{
          name: '总人数',
          data: [sevenAll, sixAll, fiveAll, fourAll, threeAll, twoAll, nowAll]
        }, {
          name: '新增人数',
          data: [sevenIncrease, sixIncrease, fiveIncrease, fourIncrease, threeIncrease, twoIncrease, nowIncrease]
        }]
      });
    },
    cache: false
  });
})
