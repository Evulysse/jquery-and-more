const body = $("body");

const div = $(`<div id='hello-world'>
                    Hello There
                </div>`);


const chart = $(`<div>
                <canvas id="chart"></chart>
            </div>`);

            
const pie = $(`<div>
            <canvas id='pie'></pie>
        </div>`);

body.append(div);
body.append(chart);
body.append(pie);

div.click(function () {
	alert("Hello and goodbye");
});
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.querySelector("#chart"),
    config
  );
  const data2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets2: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config2 = {
    type: 'doughnut',
    data: data,
  };
  const myChart2 = new Chart(
    document.querySelector("#pie"),
    config2
  );

  


