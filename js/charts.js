document.addEventListener('DOMContentLoaded', () => {
  if (!window.Chart) return;

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = '#78849a';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;

  const palette = {
    orange: '#F2A15B',
    orangeLight: '#F8C18B',
    navy: '#14213D',
    teal: '#087C91',
    green: '#269B69',
    red: '#D84B54',
    muted: '#9AA6B8'
  };

  const readinessLabels = [
    'Booking & Service', 'Authentication', 'Payment & Escrow',
    'Partner Integration', 'Communication', 'SCM KPI & Analytics'
  ];
  const readinessValues = [2, 1, 1, 1, 2, 1];

  const readinessCanvas = document.getElementById('overviewReadinessChart');
  if (readinessCanvas) {
    new Chart(readinessCanvas, {
      type: 'bar',
      data: {
        labels: readinessLabels,
        datasets: [{
          label: 'Skor kesiapan',
          data: readinessValues,
          backgroundColor: [palette.teal, palette.orange, palette.orange, palette.orange, palette.teal, palette.orange],
          borderRadius: 7,
          maxBarThickness: 28
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { min: 0, max: 5, ticks: { stepSize: 1 }, grid: { color: '#edf0f5' } },
          y: { grid: { display: false } }
        },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.raw}/5` } } }
      }
    });
  }

  const frameworkCanvas = document.getElementById('frameworkChart');
  if (frameworkCanvas) {
    new Chart(frameworkCanvas, {
      type: 'bar',
      data: {
        labels: ['SCOR Digital Standard', 'Agile / Responsive', 'GSCF', 'PDCA', 'Lean Service'],
        datasets: [{
          label: 'Skor analitis',
          data: [89, 82, 78, 72, 68],
          backgroundColor: [palette.navy, palette.teal, palette.orange, palette.orangeLight, palette.muted],
          borderRadius: 7,
          maxBarThickness: 30
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { min: 0, max: 100, grid: { color: '#edf0f5' } }, y: { grid: { display: false } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.raw}/100` } } }
      }
    });
  }

  const radarCanvas = document.getElementById('readinessRadarChart');
  if (radarCanvas) {
    new Chart(radarCanvas, {
      type: 'radar',
      data: {
        labels: readinessLabels,
        datasets: [{
          label: 'Readiness (1–5)',
          data: readinessValues,
          backgroundColor: 'rgba(8,124,145,.14)',
          borderColor: palette.teal,
          pointBackgroundColor: palette.orange,
          pointBorderColor: '#ffffff',
          pointRadius: 4,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { r: { min: 0, max: 5, ticks: { stepSize: 1, backdropColor: 'transparent' }, grid: { color: '#e8edf2' }, angleLines: { color: '#e8edf2' }, pointLabels: { font: { size: 10 } } } },
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }
});