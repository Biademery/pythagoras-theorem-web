function clickEvent() {
  const data = {
    hypotenuse: document.getElementById("hypotenuse").value || 0,
    opposite: document.getElementById("opposite").value || 0,
    adjacent: document.getElementById("adjacent").value || 0,
  };

  fetch("http://127.0.0.1:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const currentParagraph = document.getElementById("message");
      currentParagraph.textContent = data;
    })
    .catch((error) => {
      console.error(error);
    });
}
