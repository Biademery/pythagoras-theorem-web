const button = document.querySelector('button');
const loader = document.querySelector('.loader');

const displaLoading = () => {
  loader.classList.add('display');
};

const hideLoading = () => {
  loader.classList.remove('display');
};

button.addEventListener('click', event => {
  event.preventDefault();
  displaLoading();

  const fields = {
    hypotenuse: document.getElementById('hypotenuse'),
    opposite: document.getElementById('opposite'),
    adjacent: document.getElementById('adjacent'),
  };

  const data = {
    hypotenuse: fields.hypotenuse.value || 0,
    opposite: fields.opposite.value || 0,
    adjacent: fields.adjacent.value || 0,
  };
  fetch('https://agile-eyrie-19813-815761f3b93b.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseData => {
      hideLoading();
      if (!data.hypotenuse) fields.hypotenuse.value = responseData;
      if (!data.opposite) fields.opposite.value = responseData;
      if (!data.adjacent) fields.adjacent.value = responseData;
    })
    .catch(() => {
      alert('Invalid values!');
    });
});
