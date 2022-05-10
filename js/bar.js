document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('pricing-slider');
  const sliderBar = document.getElementById('slider-bar');
  const price = document.getElementById('price');
  const pageviews = document.getElementById('pageviews');

  // toggle
  const toggle = document.getElementById('toggle');
  const toggleContainer = document.getElementById('toggle-container');

  slider.addEventListener('input', (e) => {
    sliderBar.style.width = `${e.target.value}%`;

    if (e.target.value === '1') {
      pageviews.innerHTML = '10K PAGEVIEWS'
      price.innerHTML = '$8.00';
    } else if (e.target.value === '25') {
      pageviews.innerHTML = '50K PAGEVIEWS'
      price.innerHTML = '$12.00';
    } else if (e.target.value === '50') {
      pageviews.innerHTML = '100K PAGEVIEWS'
      price.innerHTML = '$16.00';
    } else if (e.target.value === '75') {
      pageviews.innerHTML = '500K PAGEVIEWS'
      price.innerHTML = '$24.00';
    } else if (e.target.value === '100') {
      pageviews.innerHTML = '1M PAGEVIEWS'
      price.innerHTML = '$36.00';
    }
    toggle.classList.remove('toggled');
    toggleContainer.classList.remove('selected');
  });

  toggleContainer.addEventListener('click', () => {
    if (toggle.classList.contains('toggled')) {
      toggleContainer.classList.remove('selected');
      toggle.classList.remove('toggled');
      const currentPrice = price.innerHTML;
      const currentPriceToNum = Number(currentPrice.substring(1, 3));
      const discount = currentPriceToNum * (1 / 3);
      price.innerHTML = `$${currentPriceToNum + discount}.00`;
    } else {
      toggleContainer.classList.add('selected');
      toggle.classList.add('toggled');
      const currentPrice = price.innerHTML;
      const currentPriceToNum = Number(currentPrice.substring(1, 3));
      const discount = currentPriceToNum * .25;
      price.innerHTML = `$${currentPriceToNum - discount}.00`;
    }
  });

  // need to toggle button to yearly, which then would take a discount of 
});