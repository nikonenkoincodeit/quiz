export function sendData(myFormData) {
  return fetch("http://save/index.php", {
    method: "POST",
    body: myFormData,
  }).then((response) => response.text());
}
