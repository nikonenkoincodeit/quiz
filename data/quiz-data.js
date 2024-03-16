export const quizKitchen = {
  name: "Квиз по столешницам из кварца",
  items: [
    {
      id: 1,
      title: "Какой формы будет Ваша кухня?",
      subtitle:
        "Узнайте, сколько примерно может стоить Ваша столешница из кварца!",
      type: "gallery",
      prev: null,
      next: 2,
      value: [],
      percent: null,
      questions: [
        {
          id: 1,
          text: "ПРЯМАЯ",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/kmnqiuujhhomd6wzjo1c.webp",
        },
        {
          id: 2,
          text: "Г- ОБРАЗНАЯ",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/xw1hn9gy6nv4xz5yqmmo.webp",
        },
        {
          id: 3,
          text: "П- ОБРАЗНАЯ",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/ipwxxikfa9n3ea1t98vg.webp",
        },
        {
          id: 4,
          text: "с ОСТРОВКОМ",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/dugq210mv0dmpqr8gxgb.webp",
        },
        {
          id: 5,
          text: "(необходимо будет загрузить эскиз)",
          tooltip:
            "Выберите этот пункт, если Ваша форма кухни отличается от представленных",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/m1vs95zmyzch3wc7ympq.webp",
        },
        {
          id: 6,
          text: "",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/dcmgd9niphqeibrf0enn.webp",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/q5bxeeetdupgmyvsmdww.webp",
        name: "Анна",
        specialty: "Специалист по кварцу",
        text: "Смотри подсказку→→→ Стоимость сильно варьируется от форм и размеров столешницы. В вариантах представлены стандартные формы столешниц на кухне. Если Ваша форма кухни отличается от стандартной, то выберите картинку с надписью 'Другой вариант'. Нужно будет загрузить эскиз.",
      },
    },
    {
      id: 2,
      title: "Какой у Вас этап ремонта?",
      subtitle:
        "Узнайте, сколько примерно может стоить Ваша столешница из кварца!",
      prev: 1,
      value: [],
      percent: null,
      type: "radio",
      questions: [
        {
          id: 1,
          text: "Только думаю над общим дизайном кухни",
          next: 3,
        },
        {
          id: 2,
          text: "Дизайн кухни есть, ремонт еще Не начат",
          next: 3,
        },
        {
          id: 3,
          text: "Ремонт на кухне уже начался",
          next: 3,
        },
        {
          id: 4,
          text: "На кухню уже заказана/установлена мебель",
          next: 3,
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/q5bxeeetdupgmyvsmdww.webp",
        name: "Анна",
        specialty: "Специалист по кварцу",
        text: "Смотри подсказку→→→ Обычно столешницу устанавливают, когда на кухне уже сделан ремонт и установлена мебель. На каком этапе сейчас Вы?",
      },
    },
    {
      id: 3,
      title:
        "Что из этого Вы хотели бы иметь в своей столешнице? (Можно несколько)",
      subtitle:
        "Узнайте, сколько примерно может стоить Ваша столешница из кварца!",
      prev: 2,
      next: 4,
      value: [],
      percent: null,
      type: "checkbox-gallery",
      questions: [
        {
          id: 1,
          text: "Фрезеровка 'мокрый стол'",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/if3rj2vmlpsotjwlmtd6.webp",
          tooltip:
            "Делается, чтобы вода стекала прямо в мойку при сушке посуды. Очень практично.",
        },
        {
          id: 2,
          text: "Декоративная кромка",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/ga2kyi51z90bxa1nc8is.webp",
          tooltip: "Облагораживает вид столешницы и придает ей помпезности.",
        },
        {
          id: 3,
          text: "Скгругленная сторона столешницы",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/x2tsemvvp2aijpkn4rlv.webp",
          tooltip: "Делает общий вид столешницы не таким строгим.",
        },
        {
          id: 4,
          text: "Вырез под встроенную технику",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/hv4sbucecxewqpfdptoc.webp",
          tooltip:
            "Например, под встроенную варочную плиту или посудомоечную машинку.",
        },
        {
          id: 5,
          text: "Пристенный плинтус",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/pjelnipeja2waseknwue.webp",
          tooltip: "Помогает еще больше подчеркнуть изящность столешницы.",
        },
        {
          id: 6,
          text: "Ничего из этого, только столешница",
          img: "https://nikonenkoincodeit.github.io/quiz/img/kitchen/empty.jpg",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/q5bxeeetdupgmyvsmdww.webp",
        name: "Анна",
        specialty: "Специалист по кварцу",
        text: "Смотри подсказку→→→ Доступны дополнительные опции для столешницы, чтобы подчеркнуть ее красоту и сделать еще практичнее и удобнее.",
      },
    },
    {
      id: 4,
      title: "У Вас есть эскизы или размеры Вашей столешницы?",
      subtitle:
        "Узнайте, сколько примерно может стоить Ваша столешница из кварца!",
      prev: 3,
      value: [],
      percent: null,
      type: "radio",
      questions: [
        {
          id: 1,
          text: "Да, есть экиз",
          next: 5.1,
        },
        {
          id: 2,
          text: "Нет эскиза, но я знаю размеры",
          next: 5.2,
        },
        {
          id: 3,
          text: "Нет ничего",
          tooltip:
            "В результатах теста будет несколько размеров указанной формы столешницы для примера",
          next: 7,
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/q5bxeeetdupgmyvsmdww.webp",
        name: "Анна",
        specialty: "Специалист по кварцу",
        text: "Смотри подсказку→→→ При нажатии 'Да', дальше нужно будет загрузить файл с эскизом. Если нажмете 'Нет', то в конце теста в результатах Вам покажут несколько размеров столешницы выбранной формы для примера. При нажатии 'Эскиза нет, но знаю размеры' дальше нужно будет ввести размеры.",
      },
    },
    {
      id: 5.1,
      title: "Загрузите свой эскиз с размерами (подсказка справа)",
      type: "my-load-file",
      next: 6.1,
      prev: 4,
      value: [],
      percent: null,
    },
    {
      id: 5.2,
      prev: 4,
      next: 6.2,
      value: [],
      percent: null,
      type: "my-textarea",
      title: "Впишите свои размеры (подсказка справа)",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/q5bxeeetdupgmyvsmdww.webp",
        name: "Анна",
        specialty: "Специалист по кварцу",
        text: "Смотри подсказку→→→ Впишите свои размеры в формате: Длина 0000мм х 0000мм, Ширина 0000м, толщина 00мм, плинтус 00мм.",
      },
    },
    {
      id: 6.1,
      title: "В какой Бюджет на столешницу нужно вписаться? (в $$)",
      type: "my-slider",
      next: 7.1,
      prev: 5.1,
      value: [],
      percent: null,
      buttonText: "Последний шаг",
    },
    {
      id: 6.2,
      title: "В какой Бюджет на столешницу нужно вписаться? (в $$)",
      type: "my-slider",
      next: 7.2,
      prev: 5.2,
      value: [],
      percent: null,
      buttonText: "Последний шаг",
    },
    {
      id: 7,
      title: "Без эскиза или размеров мы не сможем продолжить...=(",
      text: [
        `Для просчета стоимости, нам нужно от чего-то отталкиваться: 
      <span class="block">от размеров или эскиза.</span> Без них этого не сделать.`,
        `НО ВОТ ПРИМЕРЫ цен некоторых форм столешниц
      (При минимальном наборе опций и при использовании бренда камня с минимальной стоимостью)`,
        `Прямая: от 400$ с установкой
      <span class="block">П- образная: от 750$ с установкой</span>
      <span class="block">Г- образная: от 1100$ с установкой</span>
      <span class="block">С островком: от 1150$ с установкой</span>`,
        `РЕКОМЕНДУЕМ ДЕТАЛЬНЕЕ ПОСМОТРЕТЬ ИНФОРМАЦИЮ НА САЙТЕ, ЧТОБЫ ПОНЯТЬ, ПОЧЕМУ У КВАРЦА ТАКАЯ СТОИМОСТЬ И ФАКТОРЫ, КОТОРЫЕ НА НЕЕ СИЛЬНО ВЛИЯЮТ.`,
        `ЕСЛИ ВЫ ХОТИТЕ переговорить со специалистом, нажимайте на кнопку внизу и выберите, через какой метод с Вами связаться.`,
        `**ИЛИ если у Вас все-таки есть эскиз или размеры, нажмите "Пройти тест заново" и загрузите его.
      <span class="block">-----------------↓↓↓↓------</span>`,
      ],
      type: "my-info",
      btnText: "Узнать подробнее",
      next: 8,
      prev: 1,
      value: [],
      percent: null,
    },
    {
      id: 7.1,
      title:
        "Хорошо! Вы загрузили эскиз своей столешницы для примерного расчета.",
      text: [
        "Теперь жмите ниже на кнопку 'Далее' и Вас направит на страницу выбора метода обратной связи, чтобы сообщить Ваш результат просчета!",
      ],
      type: "my-info",
      next: 8,
      prev: 1,
      value: [],
      percent: null,
    },
    {
      id: 7.2,
      title:
        "Хорошо! Вы ввели размеры Вашей столешницы для примерного расчета.",
      text: [
        "Теперь жмите ниже на кнопку 'Далее' и Вас направит на страницу выбора метода обратной связи, чтобы сообщить Ваш результат просчета!",
      ],
      type: "my-info",
      next: 8,
      prev: 1,
      value: [],
      percent: null,
    },
    {
      id: 8,
      type: "choice-of-comm-met",
      colLeft: true,
      title: "Отлично, почти готово:",
      text: "Выберите метод для связи и введите номер",
      subtitle: "Viber-сообщение или тел. звонок?",
      description:
        "Специалист свяжется с Вами, чтобы ответить на вопросы или сообщить результаты просчета.",
    },
  ],
};

export const quizSkin = {
  name: "Квиз по Скинали",
  items: [
    {
      id: 1,
      title: "Для новой кухни или редизайна старой?",
      type: "radio",
      prev: 2,
      value: [],
      percent: 0,
      questions: [
        {
          id: 1,
          text: "Для новой кухни",
          next: 2,
        },
        {
          id: 2,
          text: "Для редизайна старой",
          next: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Знаете, какой вид стекла хотите?",
      type: "gallery",
      prev: 1,
      next: 3,
      value: [],
      percent: 13,
      questions: [
        {
          id: 1,
          text: "Ультрафиолетовая печать прямо на стекло (Рекомендуем)",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/u9kppta6wqb9hf7jci6f.webp",
          tooltip: "Стандарт отрасли. Более насыщенные цвета при печати.",
        },
        {
          id: 2,
          text: "Латексную на пленку позади стекла",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/ctxev1caoiil1n7wxd1f.webp",
          tooltip:
            "Вариант с меньшей стоимостью, но риском деформации пленки от жара у плиты.",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по Скинали",
        text: "Смотри подсказку→→→ Смотри подробнее про качества методов печати в разделе 'Наше качество' в пункте 'Печатаем прямо на стекло'. УФ- печать более надежная, более насыщенная, и чуть выше в ценовой категории. Латексная печать менее надежна и чуть менее насыщенная, но ниже в ценовой категории",
      },
    },
    {
      id: 3,
      title: "Из какого стекла?",
      type: "gallery",
      prev: 2,
      next: 4,
      value: [],
      percent: 25,
      questions: [
        {
          id: 1,
          text: "С повышенной ударостойкостью (осколки не опасны для человека",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/k6u1qjct4mvh0tqwm5vo.webp",
          tooltip:
            "Устойчиво и к ударам, и к жару. В случае треска, рассыпается а безопасные мелкие кусочки",
        },
        {
          id: 2,
          text: "Обычное (Опасные режущие осколки при разбитии)",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/yk849bmdnqpglvskukb8.webp",
          tooltip:
            "Риск треснуть от жара у плиты. При разбитии, разлетается на большие опасные куски",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по Скинали",
        text: "Смотри подсказку→→→ При установке на кухню рекомендуем все-таки выбирать Ударопрочное каленое стекло. Как с точки зрения безопасности, так и с точки зрения того, чтобы исключить вероятность, что фартук треснет от жара у плиты. А то придется заного заказывать......",
      },
    },
    {
      id: 4,
      title: "Что будет на фартуке?",
      type: "gallery-radio",
      prev: 3,
      next: 5,
      value: [],
      percent: 38,
      questions: [
        {
          id: 1,
          text: "Однотонный цвет",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/nmwx3f6ss8carwrlehfh.webp",
        },
        {
          id: 2,
          text: "Картинка из каталога",
          img: "https://nikonenkoincodeit.github.io/quiz/img/skin/m5npgz50ncya5owsqymh.webp",
        },
        {
          id: 3,
          text: "Своя картинка, созданная с дизайнером",
          img: "",
        },
        {
          id: 4,
          text: "Не знаю еще",
          img: "",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по Скинали",
        text: "Смотри подсказку→→→ Какие варианты будете рассматривать для своего фартука?",
      },
    },
    {
      id: 5,
      title: "Размер в м2 для планируемого фартука скинали?",
      type: "my-input",
      next: 6,
      prev: 4,
      value: [],
      percent: 50,
    },
    {
      id: 6,
      title: "Напишите тут еще комментарии или уточнения, если есть.",
      type: "my-input",
      next: 7,
      prev: 5,
      value: [],
      percent: 63,
    },
    {
      id: 7,
      title:
        "Выбирая, где заказывать Скинали, я обращаю больше всего внимание:",
      type: "my-checkbox",
      next: 8,
      prev: 6,
      value: [],
      percent: 75,
      questions: [
        {
          id: 1,
          text: "Чтобы быстро произвели ",
          type: "checkbox",
        },
        {
          id: 2,
          text: "Чтоб делали под ключ с установкой",
          type: "checkbox",
        },
        {
          id: 3,
          text: "Чтоб выбор хороших картинок в каталоге был",
          type: "checkbox",
        },

        {
          id: 4,
          text: "Чтоб онлайн-примерка наглядная была",
          type: "checkbox",
        },
        {
          id: 5,
          text: "На качество цвета и точность размеров",
          type: "checkbox",
        },
        {
          id: 6,
          text: "",
          type: "input",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по Скинали",
        text: "Смотри подсказку→→→ Выберите все подходящие варианты или напишите свой в поле.",
      },
    },
    {
      id: 8,
      title:
        "Знали, что в нашем каталоге Вы можете примерить картинку сразу на фото своей кухни?",
      type: "info-box",
      next: 9,
      prev: 7,
      value: [1],
      percent: 88,
      buttonText: "Последний шаг",
    },
    {
      id: 9,
      type: "choice-of-comm-met",
      colLeft: false,
      title: "Отлично!",
      text: "МЫ ПОЛУЧИЛИ ВАШИ ОТВЕТЫ",
      subtitle: "Сообщить результат по Телефону или в Viber?",
      description: "",
    },
  ],
};

export const quizShowerRoom = {
  name: "",
  items: [
    {
      id: 1,
      title: "Какой формы нужна душевая?",
      type: "gallery-radio",
      prev: null,
      next: 2,
      value: [],
      percent: 0,
      questions: [
        {
          id: 1,
          text: "Угловая",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/qkwl9bpqnjnlty0whylo.webp",
        },
        {
          id: 2,
          text: "Трапеция ( углы 135°)",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/higkvavzmvfhbgpmleyv.webp",
        },
        {
          id: 3,
          text: "П-образная",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/aofxe4fmjnag3vb5rfhu.webp",
        },
        {
          id: 4,
          text: "В нишу",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/af9k0ujrrhckrqhmhoxq.webp",
        },
        {
          id: 5,
          text: "Перегородка",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/xgda3c4vbyyeigniqvjl.webp",
        },
        {
          id: 6,
          text: "Шторка в ванную",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/bsu85kulh3vnibauhnzz.webp",
        },
      ],
    },
    {
      id: 2,
      title: "Знаете, какой вид стекла хотите?",
      type: "gallery",
      prev: 1,
      next: 3,
      value: [],
      percent: 20,
      questions: [
        {
          id: 1,
          text: "Обычное стекло (Зеленоватый оттенок)",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/c7dt5djs02tggknk4aya.webp",
        },
        {
          id: 2,
          text: "Осветленное Диамант ( слегка голубоватый оттенок)",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/pfq8ipvtpryv5chmjyrq.webp",
        },
        {
          id: 3,
          text: "Матовое",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/kzv86x4mni8ozqytd2n4.webp",
        },
        {
          id: 4,
          text: "С пескоструем",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/eqpqbtqlysnnzrbfkdri.webp",
        },
        {
          id: 5,
          text: "С цветным рисунком",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/z0bt2s3yv43ir6qtdwlu.webp",
        },
        {
          id: 6,
          text: "С тонированным стеклом",
          img: "https://nikonenkoincodeit.github.io/quiz/img/shower-room/l09noekfytcb9nu4ioxu.webp",
        },
        {
          id: 7,
          text: "Еще не знаю",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/grey.jpg",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по душевым",
        text: "Душевая может быть главным объектом внимания в ванной комнате, если стильно ее оформить.",
      },
    },
    {
      id: 3,
      title: "У вас есть параметры размеров своей душевой?",
      type: "radio",
      prev: 2,
      value: [],
      percent: 40,
      questions: [
        {
          id: 1,
          text: "Да",
          next: 4,
        },
        {
          id: 2,
          text: "Нет",
          next: 4.1,
        },
        {
          id: 3,
          text: "Нужна консультация- помощь",
          next: 4.2,
        },
      ],
    },
    {
      id: 4,
      prev: 3,
      next: 5,
      value: [],
      percent: 55,
      type: "my-textarea",
      title: "Впишите размеры Душевой ниже",
    },
    {
      id: 4.1,
      prev: 3,
      next: 6.1,
      value: [],
      percent: 60,
      type: "my-textarea",
      title:
        "Если есть, пишите тут комментарий или, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по душевым",
        text: "Например, особые пожелания или примечания. Можете также написать, что для Вас может быть важнее всего в процессе исполнения заказа.",
      },
    },
    {
      id: 4.2,
      prev: 3,
      next: 6.2,
      value: [],
      percent: 60,
      type: "my-textarea",
      title:
        "Если есть, пишите тут комментарий или, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по душевым",
        text: "Например, особые пожелания или примечания. Можете также написать, что для Вас может быть важнее всего в процессе исполнения заказа.",
      },
    },
    {
      id: 5,
      prev: 4,
      next: 6,
      value: [],
      percent: 70,
      type: "my-textarea",
      title:
        "Если есть, пишите тут комментарий или, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "Специалист по душевым",
        text: "Например, особые пожелания или примечания. Можете также написать, что для Вас может быть важнее всего в процессе исполнения заказа.",
      },
    },
    {
      id: 6,
      prev: 5,
      next: 7,
      percent: 85,
      type: "radio",
      value: [],
      buttonText: "Последний шаг",
      title: "Для себя или Для клиента?",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 6.1,
      prev: 4.1,
      next: 7,
      percent: 80,
      type: "radio",
      value: [],
      title: "Для себя или Для клиента?",
      buttonText: "Последний шаг",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 6.2,
      prev: 4.2,
      next: 7,
      percent: 80,
      type: "radio",
      value: [],
      title: "Для себя или Для клиента?",
      buttonText: "Последний шаг",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 7,
      type: "choice-of-comm-met",
      colLeft: false,
      title: "Отлично!",
      text: "МЫ ПОЛУЧИЛИ ВАШИ ОТВЕТЫ",
      subtitle: "Сообщить результат по Телефону или в Viber?",
      description: "",
    },
  ],
};

export const quizMirrors = {
  name: "Квиз по зеркалам",
  items: [
    {
      id: 1,
      title: "Выберите вариант зеркала, которое хотите обсудить",
      type: "gallery",
      prev: null,
      next: 2,
      value: [],
      percent: 0,
      questions: [
        {
          id: 1,
          text: "Просто зеркало- без подсветки и граней",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/synxpdsqel7l27vvx3hj.webp",
        },
        {
          id: 2,
          text: "Зеркальная плитка",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/iuta0ofcfga5wapjwgoz.webp",
        },
        {
          id: 3,
          text: "Зеркальное панно",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/p1pkloi0rpylwcyzhd9u.webp",
        },
        {
          id: 4,
          text: "С фацетом",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/ahuxlvu57kxlbxbcrno5.webp",
        },
        {
          id: 5,
          text: "С алмазной гравировкой",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/qmm6n9uzxrnx7dhtqcsq.webp",
        },
        {
          id: 6,
          text: "с витражем CRI",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/ki5gxrbjnompgm1kh2cu.webp",
        },
        {
          id: 7,
          text: "С пескоструем",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/bo0ff6ydxxn3bptcwlzf.webp",
        },
        {
          id: 8,
          text: "С подсветкой",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/gvim6u3ht9imxjncmnvh.webp",
        },
        {
          id: 9,
          text: "Зеркало для шкафа-купе",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/mxlrxr8ylshyb2cryjcc.webp",
        },
        {
          id: 10,
          text: "Не могу определиться",
          img: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/grey.jpg",
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "специалист по зеркалам",
        text: "Смотри подсказку→→→ Если не понимаете в чем разница, но просто выберите последний пункт 'Не могу определиться' и менеджер поможет Вам и разъяснит все, что нужно.",
      },
    },
    {
      id: 2,
      title: "У вас есть эскиз или чертежи вашего зеркала?",
      type: "radio",
      prev: 1,
      value: [],
      percent: 25,
      questions: [
        {
          id: 1,
          text: "Да, есть чертежи/эскиз или Фото с примером",
          next: 3.1,
        },
        {
          id: 2,
          text: "Нет чертежей, но могу дать ссылку на картинку",
          next: 3.2,
        },
        {
          id: 3,
          text: "Нет ни чертежей, ни ссылки на картинку",
          next: 4,
        },
      ],
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "специалист по зеркалам",
        text: "Смотри подсказку→→→ Если да, то предложим загрузить Ваш файл или фото в следующем шаге. Либо можете отправить нам фотографию чертежей в Viber.",
      },
    },
    {
      id: 3.1,
      title: "Загрузите Ваш эскиз/ чертеж зеркала или Фото с примером",
      type: "my-load-file",
      next: 4.1,
      prev: 2,
      value: [],
      percent: 44,
    },
    {
      id: 3.2,
      title: "Вставьте ссылку на картинку с видом зеркала",
      type: "my-input",
      next: 4.2,
      prev: 2,
      value: [],
      percent: 44,
    },
    {
      id: 4,
      prev: 2,
      next: 5,
      value: [],
      percent: 50,
      type: "my-textarea",
      title:
        "Напишите тут комментарий или размеры, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "специалист по зеркалам",
        text: "Смотри подсказку→→→ Впишите дополнительную информацию. Например, что еще нам стоит учесть или укажите, что для Вас важнее всего в случае заказа (скорость, качество, точность, под ключ, доставка, установка, цена, сложные изделия)",
      },
    },
    {
      id: 4.1,
      prev: 3.1,
      next: 5.1,
      value: [],
      percent: 63,
      type: "my-textarea",
      title:
        "Напишите тут комментарий или размеры, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "специалист по зеркалам",
        text: "Смотри подсказку→→→ Впишите дополнительную информацию. Например, что еще нам стоит учесть или укажите, что для Вас важнее всего в случае заказа (скорость, качество, точность, под ключ, доставка, установка, цена, сложные изделия)",
      },
    },
    {
      id: 4.2,
      prev: 3.2,
      next: 5.2,
      value: [],
      percent: 63,
      type: "my-textarea",
      title:
        "Напишите тут комментарий или размеры, уточнения, пожелания, ссылку на картинку",
      assistant: {
        avatar:
          "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
        name: "Дарья",
        specialty: "специалист по зеркалам",
        text: "Смотри подсказку→→→ Впишите дополнительную информацию. Например, что еще нам стоит учесть или укажите, что для Вас важнее всего в случае заказа (скорость, качество, точность, под ключ, доставка, установка, цена, сложные изделия)",
      },
    },
    {
      id: 5,
      prev: 4,
      next: 7,
      percent: 75,
      type: "radio",
      value: [],
      title: "Для себя или Для клиента?",
      buttonText: "Последний шаг",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 5.1,
      prev: 4.1,
      next: 7,
      percent: 81,
      type: "radio",
      value: [],
      title: "Для себя или Для клиента?",
      buttonText: "Последний шаг",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 5.2,
      prev: 4.2,
      next: 7,
      percent: 81,
      type: "radio",
      value: [],
      title: "Для себя или Для клиента?",
      buttonText: "Последний шаг",
      questions: [
        {
          id: 1,
          text: "Я- Частное лицо, заказываю для себя",
        },
        {
          id: 2,
          text: "Я- Мебельщик, заказываю для клиента",
        },
      ],
    },
    {
      id: 7,
      type: "choice-of-comm-met",
      colLeft: false,
      title: "Отлично!",
      text: "МЫ ПОЛУЧИЛИ ВАШИ ОТВЕТЫ",
      subtitle: "Сообщить результат по Телефону или в Viber?",
      description: "",
    },
  ],
};
