import ReactECharts from 'echarts-for-react';

export default function Footprints({ footprints }) {
  // Mapping ranges to numeric values
  const rangeMapping = {
    low: 400,
    medium: 600,
    high: 800,
  };
  const reverseMapping = {
    400: 'low',
    600: 'medium',
    800: 'high',
  };

  // Convert footprints to numeric values
  const valuesArray = Object.values(footprints).map(
    (value) => rangeMapping[value] || 0
  );

  // Labels for the chart
  const labels = ['Phone', 'Digital', 'Social'];

  // Original values for tooltips
  const originalValues = Object.values(footprints);

  const options = {
    series: [
      {
        type: 'pie',
        radius: ['40%', '62%'], // Donut chart style
        data: valuesArray.map((value, index) => ({
          value,
          name: labels[index],
          original: originalValues[index], // Custom property for tooltip
        })),
        itemStyle: {
          borderRadius: 6, // Optional: Rounded corners for chart segments
          borderWidth: 100,
        },
        label: {
          show: false,
          formatter: '{b}: {c}', // Show label name and value
          textStyle: {
            color: '#000', // Text color for labels
            fontFamily: 'Poppins, sans-serif', // Example font family
            fontSize: 14,
          },
        },
        labelLine: {
          show: false, // Remove thin lines extending outward
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        const actualValue = reverseMapping[params.value];
        return `${params.name}: ${actualValue}`;
      },
      backgroundColor: '#000000e9', // Tooltip background color
      borderColor: '#c7c7c7', // Tooltip border color
      borderWidth: 1, // Tooltip border width
      textStyle: {
        color: '#fff', // Tooltip text color
        fontSize: 12, // Tooltip font size
        fontFamily: 'Poppins, sans-serif', // Custom font
        fontWeight: 400, // Text weight
      },
      padding: [10, 18], // Padding inside the tooltip [top/bottom, left/right]
    },
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: 'Footprints',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Poppins',
        fill: '#ededed', // Text color
      },
    },
  };

  return <ReactECharts option={options} style={{ height: 350 }} />;
}
