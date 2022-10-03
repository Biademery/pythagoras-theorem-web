function clickEvent() {
  const fields = {
    hypotenuse: document.getElementById("hypotenuse"),
    opposite: document.getElementById("opposite"),
    adjacent: document.getElementById("adjacent"),
  };

  const data = {
    hypotenuse: fields.hypotenuse.value || 0,
    opposite: fields.opposite.value || 0,
    adjacent: fields.adjacent.value || 0,
  };

  fetch("http://127.0.0.1:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      if (!data.hypotenuse) fields.hypotenuse.value = responseData;
      if (!data.opposite) fields.opposite.value = responseData;
      if (!data.adjacent) fields.adjacent.value = responseData;
    })
    .catch(() => {
      alert("Invalid values!");
    });
}
