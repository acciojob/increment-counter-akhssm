//your JS code here. If required.

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', function() {
  let currentValue = parseInt(counter.textContent);

  alert(currentValue);

  counter.textContent = currentValue + 1;
});
