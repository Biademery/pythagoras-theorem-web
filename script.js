const button = document.querySelector('button');
const loader = document.querySelector('.load');

button.addEventListener('click', event => {
  event.preventDefault();

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

  fetch('https://aqueous-river-66079.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseData => {
      if (!data.hypotenuse) fields.hypotenuse.value = responseData;
      if (!data.opposite) fields.opposite.value = responseData;
      if (!data.adjacent) fields.adjacent.value = responseData;
    })
    .catch(() => {
      alert('Invalid values!');
    });

  setTimeout(() => {
    loader.style.display = 'flex';
  }, 0);

  setTimeout(() => {
    loader.style.display = 'none';
  }, 200);
});
