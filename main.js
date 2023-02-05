const ctx = document.getElementById('canvas');

var data = {
    labels: ["Programacion", "Intelecto", "Fuerza", "Determinacion", "Fe",],
    datasets: [{
        label: 'Habilidades',
        data: [60, 75, 45, 80, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FFC902',
        pointBackgroundColor: '#FFC902',
        pointBorderColor: '#FFC902',
        pointHoverBackgroundColor: '#FFC902',
        pointHoverBorderColor: '#FFC902',
        fill: true,
    },
    ]
};

var options = {
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.01
            }
        }
};

var chart1 = new Chart(ctx, {
type: 'radar',
data: data,
options: options
});