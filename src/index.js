const ctx = document.getElementById('myChart');

const info = {
  labels,
  datasets: [{
    label: 'Пользователей',
    data,
    backgroundColor: [
      'rgba(255, 99, 132)',
      'rgba(255, 159, 64)',
      'rgba(255, 205, 86)',
      'rgba(75, 192, 192)',
      'rgba(54, 162, 235)',
      'rgba(153, 102, 255)',
      'rgba(201, 203, 207)'
    ],
    hoverOffset: 4
  }]
};

new Chart(ctx, {
  type: 'doughnut',
  data: info,
});

