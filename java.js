// Form: show a thank-you message
const form = document.getElementById('orderForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('msg').innerHTML =
    '<div class="alert alert-success">Thanks!</div>';
  form.reset();
});

// Footer year updates automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Hide the spinner after 2 seconds
setTimeout(function () {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('loadmsg').textContent = 'Specials loaded!';
}, 2000);

// Pagination: highlight the clicked page
document.querySelectorAll('.pagination .page-item').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.pagination .page-item')
      .forEach(function (i) { i.classList.remove('active'); });
    item.classList.add('active');
  });
});