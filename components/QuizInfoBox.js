export const QuizInfoBox = {
  template: `<div class="info-box">
    <h2 class="info-box-subtitle">НЕ ЗАБУДЬТЕ ПОПРОБОВАТЬ НАШУ ОНЛАЙН-ПРИМЕРКУ!</h2>
    <p class="info-box-text">В нашей онлайн-примерке можно загрузить фотографию своей кухни и подставлять картинку сразу на фото.
    Таким образом, можно максимально наглядно подобрать себе изображение. Это гораздо удобнее, чем подстановка картинки в компьютерную модель кухни, как у большинства компаний.</p>
    <ul class="info-box-list">
        <li v-for="item in list" :key="item.id" class="info-box-item">
            {{item.id}}. - {{item.text}}
        </li>
    </ul>
    <div class="info-box-img">
        <img src="../img/skin/umt36gy0ln9bux83t6c9.webp" width="226" alt="img" />
    </div>
  </div>`,
  data() {
    return {
      list: [
        { id: 1, text: "Открыть примерку" },
        { id: 2, text: "Загрузить фото своей кухни" },
        { id: 3, text: "Выделить точками область под скинали" },
        { id: 4, text: "Выбрать картинку из каталога" },
        {
          id: 5,
          text: "Посмотреть эскиз своей кухни с подставленной картинкой",
        },
      ],
    };
  },
};
