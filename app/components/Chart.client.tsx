import ReactEcharts from "echarts-for-react";

export const Chart = () => {
  const option = {
    title: {
      text: 'Gantt Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var start = new Date(params.value[0]);
        var end = new Date(params.value[1]);
        return params.seriesName + ' : ' + start.toLocaleDateString() + ' - ' + end.toLocaleDateString();
      }
    },
    legend: {
      data: ['person1', 'person2', 'person3']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        formatter: function (value) {
          return new Date(value).toLocaleDateString();
        }
      }
    },
    yAxis: {
      type: 'category',
      data: ['person1', 'person2', 'person3']
    },
    series: [
      {
        name: 'person1',
        type: 'custom',
        renderItem: function (params, api) {
          var coords = api.coord([
            api.value(0),
            api.value(1)
          ]);
          var width = api.size([api.value(0), api.value(1)])[0];
          return {
            type: 'rect',
            shape: {
              x: coords[0],
              y: coords[1] - 9,
              width: width,
              height: 18
            },
            style: {
              fill: params.color
            }
          };
        },
        data: [
          [new Date(2021, 0, 1).getTime(), new Date(2021, 0, 5).getTime()],
          [new Date(2021, 0, 10).getTime(), new Date(2021, 0, 15).getTime()],
          [new Date(2021, 0, 20).getTime(), new Date(2021, 0, 25).getTime()]
        ]
      },
      {
        name: 'person2',
        type: 'custom',
        renderItem: function (params, api) {
          var coords = api.coord([
            api.value(0),
            api.value(1)
          ]);
          var width = api.size([api.value(0), api.value(1)])[0];
          return {
            type: 'rect',
            shape: {
              x: coords[0],
              y: coords[1] - 9,
              width: width,
              height: 18
            },
            style: {
              fill: params.color
            }
          };
        },
        data: [
          [new Date(2021, 0, 3).getTime(), new Date(2021, 0, 7).getTime()],
          [new Date(2021, 0, 12).getTime(), new Date(2021, 0, 17).getTime()],
          [new Date(2021, 0, 22).getTime(), new Date(2021, 0, 27).getTime()]
        ]
      },
      {
        name: 'person3',
        type: 'custom',
        renderItem: function (params, api) {
          var coords = api.coord([
            api.value(0),
            api.value(1)
          ]);
          var width = api.size([api.value(0), api.value(1)])[0];
          return {
            type: 'rect',
            shape: {
              x: coords[0],
              y: coords[1] - 9,
              width: width,
              height: 18
            },
            style: {
              fill: params.color
            }
          };
        },
        data: [
          [new Date(2021, 0, 2).getTime(), new Date(2021, 0, 6).getTime()],
          [new Date(2021, 0, 11).getTime(), new Date(2021, 0, 16).getTime()],
          [new Date(2021, 0, 21).getTime(), new Date(2021, 0, 26).getTime()]
        ]
      }
    ]
  };

  return <ReactEcharts option={option} />;
};
