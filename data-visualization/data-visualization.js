new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["BMW", "Subaru", "Porshe", "Honda", "Lexus"],
    datasets: [{
      label: "Reliability",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [88, 84, 84, 83, 78]
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Top 5 Reliable Cars (Overall Score) - From Islam Elsayed'
    }
  }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["BMW", "Subaru", "Porshe", "Honda", "Lexus"],
    datasets: [{
      label: "Reliability",
      backgroundColor: ["gray", "orange", "black", "blue", "pink"],
      data: [88, 84, 84, 83, 78]
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Top 5 Reliable Cars (Overall Score) - From Islam Elsayed'
    }
  }
});
