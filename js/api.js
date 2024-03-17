const BASE_URL = "https://www.favorit-glass-catalog.com/";

export function sendData(myFormData) {
  return fetch(BASE_URL + "/php/quiz.php", {
    method: "POST",
    body: myFormData,
  }).then((response) => response.text());
}
