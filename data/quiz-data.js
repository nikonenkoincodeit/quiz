export const quizShowerRoom = [
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
  },
];

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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
      avatar: "https://nikonenkoincodeit.github.io/quiz/img/mirrors/daria.webp",
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
  },
];
