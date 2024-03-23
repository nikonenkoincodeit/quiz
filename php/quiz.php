<?php

function getCurrentDateTime() {
    // Массив с названиями месяцев на русском
    $months = array(
        1 => 'января',
        2 => 'февраля',
        3 => 'марта',
        4 => 'апреля',
        5 => 'мая',
        6 => 'июня',
        7 => 'июля',
        8 => 'августа',
        9 => 'сентября',
        10 => 'октября',
        11 => 'ноября',
        12 => 'декабря'
    );

    // Получаем текущую дату и время
    $currentTime = time();

    // Форматируем дату и время
    $formattedDateTime = date('j', $currentTime) . ' ' . $months[date('n', $currentTime)] . ' ' . date('Y', $currentTime) . ', ' . date('H:i:s', $currentTime);

    return $formattedDateTime;
}

// Разрешаем доступ к этому скрипту только через POST запросы
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Разрешаем доступ из всех источников
    header("Access-Control-Allow-Origin: *");
    // getCurrentDateTime()

    $phone = $_POST['phone'];
    $selectMessenger = $_POST['selectMessenger'];
    $nameQuiz = $_POST['nameQuiz'];

    $emailText = '<h1 class="my-title" style="margin: 20px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;">Новая заявка</h1>
  <div class="my-box" style="background: rgba(204, 204, 204, 0.4);
  padding: 20px;
  font-size: 16px;
  margin-bottom: 30px;">
    <p class="my-box-title" style=" font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
    color: rgb(47, 157, 0);
    font-weight: 600;">Quiz</p>
    <p class="my-box-time" style=" font-family: Arial, Helvetica, sans-serif;
    color: rgb(129, 129, 129);
    font-weight: 400;">'.getCurrentDateTime().'</p>
  </div>

  <div class="my-box-info" style="max-width: 1000px;
  width: 90%;
  margin: 30px auto;">
    <p class="my-box-info-text" style="font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
    color: rgb(129, 129, 129);
    line-height: 1.5;
    font-size: 16px;">
      Поступила новая заявка с квиза: '.$nameQuiz.'
    </p>
    <h2 class="my-subtitle" style="font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    color: rgb(32, 32, 32);
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 5px;">Контакты:</h2>
    <div class="my-box" style="background: rgba(204, 204, 204, 0.4);
    padding: 20px;
    font-size: 16px;
    margin-bottom: 30px;">
      <div style="margin-bottom: 10px">
        <span class="my-label" style="font-family: Arial, Helvetica, sans-serif;
        display: inline-block;
        margin-right: 10px;
        color: rgb(129, 129, 129);
        font-weight: 700;">Телефон:</span>
        <a href="tel:'.$phone.'">'.$phone.'</a>
      </div>
      <div>
        <span class="my-label" style="font-family: Arial, Helvetica, sans-serif;
        display: inline-block;
        margin-right: 10px;
        color: rgb(129, 129, 129);
        font-weight: 700;">Сообщить результат по:</span>
        <span>'.$selectMessenger.'</span>
      </div>
    </div>';

  if(isset($_POST['title']) && isset($_POST['text'])) {
      $title = $_POST['title'];
      $text = $_POST['text'];

      $emailText .= '<h2 class="my-subtitle" style="font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      color: rgb(32, 32, 32);
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 5px;">Ответы:</h2><div class="my-box" style="background: rgba(204, 204, 204, 0.4);
      padding: 20px;
      font-size: 16px;
      margin-bottom: 30px;">';
        foreach ($title as $index => $value) {
            $emailText .= '<h3 class="my-question" style="font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 5px;
            color: rgb(88, 88, 88);
            font-weight: 700;
            font-size: 16px;
            line-height: 1.5;">'.$value.'</h3>
            <p class="my-answer" style=" font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 16px;
            line-height: 1.5;">'.$text[$index].'</p>';
        }
        $emailText .= '</div>';
    }
    // Проверяем, существуют ли поля с файлами в запросе
    if (!empty($_FILES['files']['name'][0])) {
        $files = $_FILES['files'];
        $uploadDirectory = "../uploads/";

        // Массив для хранения ссылок на загруженные файлы
        $emailText .= '<h2 class="my-subtitle" style="font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        color: rgb(32, 32, 32);
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 5px;">Добавленные файлы:</h2>
        <div class="my-box" style="background: rgba(204, 204, 204, 0.4);
        padding: 20px;
        font-size: 16px;
        margin-bottom: 30px;">
          <ul class="list-items" style="list-style: none; margin: 0; padding: 0">';
        // Перебираем массив файлов
        foreach ($files['name'] as $key => $name) {
            // Проверяем, не было ли ошибок при загрузке файла
            if ($files['error'][$key] === UPLOAD_ERR_OK) {
                // Создаем уникальное имя для файла
                $fileName = uniqid() . "_" . basename($name);
                $filePath = $uploadDirectory . $fileName;

                // Перемещаем загруженный файл в указанную папку на сервере
                if (move_uploaded_file($files['tmp_name'][$key], $filePath)) {
                  // Добавляем ссылку на загруженный файл в массив
                  $emailText .= '<li><a href="https://www.favorit-glass-catalog.com/uploads/'. $fileName.'">'.basename($name).'</a></li>';
              } else {
                  echo "Произошла ошибка при сохранении файла $name.<br>";
              }
          } else {
              echo "Произошла ошибка при загрузке файла $name: " . $files['error'][$key] . "<br>";
          }
      }

      $emailText .= '</ul></div>';
      // Возвращаем массив ссылок в формате JSON
      // echo json_encode($fileLinks);
  } 

  $emailText .= ' <h2 class="my-subtitle" style="font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: rgb(32, 32, 32);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 5px;">Дополнительная информация:</h2>
  <div class="my-box" style="background: rgba(204, 204, 204, 0.4);
  padding: 20px;
  font-size: 16px;
  margin-bottom: 30px;">
    <div style="margin-bottom: 10px">
      <span class="my-label" style="
      display: inline-block;
      margin-right: 10px;
      color: rgb(129, 129, 129);
      font-weight: 700;
      margin-bottom: 10px;
    ">Источник</span>
      <a href="#">https://my-sity.com</a>
    </div>
    <div style="margin-bottom: 10px">
      <span
        class="my-label"
        style="
          display: inline-block;
          margin-right: 10px;
          color: rgb(129, 129, 129);
          font-weight: 700;
          margin-bottom: 10px;
        "
        >Метки URL:</span
      >
      <ul style="list-style: none; margin: 0 0 0 10px; padding: 0">
        <li>
          <p
            class="my-label"
            style="
              margin: 0 0 5px 0;
              color: rgb(129, 129, 129);
              font-weight: 700;
            "
          >
            name
          </p>
          <p style="margin: 0 0 5px 0">:poisk</p>
        </li>
      </ul>
      <div style="color: rgba(228, 57, 5); margin: 10px 0">Cookies</div>
      <div>
        <span
          class="my-label"
          style="
            display: inline-block;
            margin-right: 10px;
            color: rgb(129, 129, 129);
            font-weight: 700;
          "
          >_ga</span
        >
        <span>GA.1.2.52525.1.222</span>
      </div>
    </div>
  </div>';

  $emailText .= '</div></div>';

  // Отправка письма
  $to = "glassfavorit@gmail.com"; // Укажите адрес получателя
  $subject = "Новая заявка с квиза с квиза: ".$nameQuiz; // Тема письма

  // Заголовки
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "From: example@example.com" . "\r\n"; // Укажите ваш адрес электронной почты

  // Отправляем письмо
  if(mail($to, $subject, $emailText, $headers)) {
      echo "Письмо успешно отправлено!";
  } else {
      echo "Ошибка при отправке письма.";
  }
} else {
  // Если запрос не является POST, отправляем заголовок с кодом ответа 405 Method Not Allowed
  header("HTTP/1.1 405 Method Not Allowed");
  // Также отправляем заголовок Allow с перечислением разрешенных методов
  header("Allow: POST");
  echo "Данный скрипт принимает только POST запросы.";
}
?>

