export const quizMirrors = [
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
        img: "../img/mirrors/synxpdsqel7l27vvx3hj.webp",
      },
      {
        id: 2,
        text: "Зеркальная плитка",
        img: "../img/mirrors/iuta0ofcfga5wapjwgoz.webp",
      },
      {
        id: 3,
        text: "Зеркальное панно",
        img: "../img/mirrors/p1pkloi0rpylwcyzhd9u.webp",
      },
      {
        id: 4,
        text: "С фацетом",
        img: "../img/mirrors/ahuxlvu57kxlbxbcrno5.webp",
      },
      {
        id: 5,
        text: "С алмазной гравировкой",
        img: "../img/mirrors/qmm6n9uzxrnx7dhtqcsq.webp",
      },
      {
        id: 6,
        text: "с витражем CRI",
        img: "../img/mirrors/ki5gxrbjnompgm1kh2cu.webp",
      },
      {
        id: 7,
        text: "С пескоструем",
        img: "../img/mirrors/bo0ff6ydxxn3bptcwlzf.webp",
      },
      {
        id: 8,
        text: "С подсветкой",
        img: "../img/mirrors/gvim6u3ht9imxjncmnvh.webp",
      },
      {
        id: 9,
        text: "Зеркало для шкафа-купе",
        img: "../img/mirrors/mxlrxr8ylshyb2cryjcc.webp",
      },
      { id: 10, text: "Не могу определиться", img: "../img/mirrors/grey.jpg" },
    ],
    assistant: {
      avatar: "../img/mirrors/daria.webp",
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
        next: 3,
      },
      {
        id: 2,
        text: "Нет чертежей, но могу дать ссылку на картинку",
        next: 4,
      },
      {
        id: 3,
        text: "Нет ни чертежей, ни ссылки на картинку",
        next: 6,
      },
    ],
    assistant: {
      avatar: "../img/mirrors/daria.webp",
      name: "Дарья",
      specialty: "специалист по зеркалам",
      text: "Смотри подсказку→→→ Если да, то предложим загрузить Ваш файл или фото в следующем шаге. Либо можете отправить нам фотографию чертежей в Viber.",
    },
  },
  {
    id: 3,
    title: "Загрузите Ваш эскиз/ чертеж зеркала или Фото с примером",
    type: "my-load-file",
    next: 5,
    prev: 2,
    value: [],
    percent: 44,
  },
  {
    id: 4,
    title: "Вставьте ссылку на картинку с видом зеркала",
    type: "my-input",
    next: 5,
    prev: 2,
    value: [],
    percent: 44,
  },
  {
    id: 5,
    prev: 2,
    next: 8,
    value: [],
    percent: 63,
    type: "my-textarea",
    title:
      "Напишите тут комментарий или размеры, уточнения, пожелания, ссылку на картинку",
    assistant: {
      avatar: "../img/mirrors/daria.webp",
      name: "Дарья",
      specialty: "специалист по зеркалам",
      text: "Смотри подсказку→→→ Впишите дополнительную информацию. Например, что еще нам стоит учесть или укажите, что для Вас важнее всего в случае заказа (скорость, качество, точность, под ключ, доставка, установка, цена, сложные изделия)",
    },
  },
  {
    id: 6,
    prev: 2,
    next: 7,
    value: [],
    percent: 50,
    type: "my-textarea",
    title:
      "Напишите тут комментарий или размеры, уточнения, пожелания, ссылку на картинку",
    assistant: {
      avatar: "../img/mirrors/daria.webp",
      name: "Дарья",
      specialty: "специалист по зеркалам",
      text: "Смотри подсказку→→→ Впишите дополнительную информацию. Например, что еще нам стоит учесть или укажите, что для Вас важнее всего в случае заказа (скорость, качество, точность, под ключ, доставка, установка, цена, сложные изделия)",
    },
  },
  {
    id: 7,
    prev: 5,
    next: 9,
    percent: 75,
    type: "radio",
    value: [],
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
    id: 8,
    prev: 5,
    next: 9,
    percent: 81,
    type: "radio",
    value: [],
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
    id: 9,
    type: "choice-of-comm-met",
    value: [],
  },
];
