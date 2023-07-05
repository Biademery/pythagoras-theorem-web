const button = document.querySelector('button');
// const loader = document.querySelector('.loader');

// const displayLoading = () => {
//   loader.classList.add('display');
// };

// const hideLoading = () => {
//   loader.classList.remove('display');
// };

button.addEventListener('click', event => {
  event.preventDefault();
  // displayLoading();

  const fields = {
    hypotenuse: document.getElementById('hypotenuse'),
    opposite: document.getElementById('opposite'),
    adjacent: document.getElementById('adjacent'),
  };

  const data = {
    hypotenuse: parseFloat(fields.hypotenuse.value) || 0,
    opposite: parseFloat(fields.opposite.value) || 0,
    adjacent: parseFloat(fields.adjacent.value) || 0,
  };

  let result = '';

  if (!data.hypotenuse && data.opposite && data.adjacent) {
    result = Math.sqrt((data.opposite ** 2) + (data.adjacent ** 2)).toFixed(2);
  } else if (!data.opposite && data.hypotenuse && data.adjacent) {
    result = Math.sqrt((data.hypotenuse ** 2) - (data.adjacent ** 2)).toFixed(2);
  } else if (!data.adjacent && data.hypotenuse && data.opposite) {
    result = Math.sqrt((data.hypotenuse ** 2) - (data.opposite ** 2)).toFixed(2);
  } else {
    alert('Invalid values!');
    hideLoading();
    return;
  }

  // hideLoading();

  if (!data.hypotenuse) fields.hypotenuse.value = result;
  if (!data.opposite) fields.opposite.value = result;
  if (!data.adjacent) fields.adjacent.value = result;
});