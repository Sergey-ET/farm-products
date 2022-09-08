const products = [
  {
    id: 0,
    image: 'https://i.ibb.co/FmR3phW/product-1.jpg',
    title: 'Филе бедра цыпленка',
    description:
      'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
    weight: 700,
    price: 515,
    specifications: [
      {
        property: 'Масса',
        value: '700 г. (350-1050г.)'
      },
      {
        property: 'Срок годности',
        value: '6 суток.'
      },
      {
        property: 'Условия хранения',
        value: 'при температуре от 0 до +4 °С.'
      },
      {
        property: 'Упаковка',
        value: 'вакуумная упаковка.'
      },
      {
        property: 'Место происхождения',
        value: 'Рязанская область, Спасский р-н.'
      }
    ],
    properties: [
      {
        property: 'Энергетическая ценность',
        value: '109 ккал. / 456 кДж.'
      },
      {
        property: 'Пищевая ценность',
        value: 'белки - 21 г., жиры - 6,5 г., углеводы - 0,1 г.; на 100 г.'
      }
    ]
  },
  {
    id: 1,
    image: 'https://i.ibb.co/3mWCB2S/product-2.jpg',
    title: 'Филе бедра гуся',
    description:
      'Грудка гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
    weight: 100,
    price: 309,
    specifications: [
      {
        property: 'Масса',
        value: '100 г.'
      },
      {
        property: 'Срок годности',
        value: '30 суток.'
      },
      {
        property: 'Условия хранения',
        value: 'при температуре от 0 до +6 °С.'
      },
      {
        property: 'Упаковка',
        value: 'вакуумный пакет.'
      },
      {
        property: 'Место происхождения',
        value: 'Московская облать, Егорьевский район.'
      }
    ],
    properties: [
      {
        property: 'Энергетическая ценность',
        value: '227 кКал. / 949,8 кДж.'
      },
      {
        property: 'Пищевая ценность',
        value: 'белки - 20,9 г., жиры - 15,9 г., углеводы - 0 г.; на 100 г.'
      }
    ]
  },
  {
    id: 2,
    image: 'https://i.ibb.co/30KVP57/product-3.jpg',
    title: 'Мякоть бедра говяжья',
    description:
      'Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме, поэтому мясо нежное и вкусное.Цвет мяса может быть от светло розового до более тёмного в зависимости от зрелости бычков.',
    weight: 500,
    price: 649,
    specifications: [
      {
        property: 'Масса',
        value: '500 г. (375-625г.)'
      },
      {
        property: 'Срок годности',
        value: '7 суток.'
      },
      {
        property: 'Условия хранения',
        value: 'при температуре от +2 до +6 °С.'
      },
      {
        property: 'Упаковка',
        value: 'вакуумный пакет.'
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область, Калининский район.'
      }
    ],
    properties: [
      {
        property: 'Энергетическая ценность',
        value: '137,98 кКал. / 577,3 кДж.'
      },
      {
        property: 'Пищевая ценность',
        value: 'белки - 20,2 г., жиры - 6,4 г., углеводы - 0 г.; на 100 г.'
      }
    ]
  },
  {
    id: 3,
    image: 'https://i.ibb.co/0Ym7SYD/product-4.jpg',
    title: 'Грудка цыпленка на кости',
    description:
      'Мясо грудки считается самым диетическим. Грудку можно отваривать, тушить с овощами, запекать под сыром, обжаривать в соусе. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.',
    weight: 900,
    price: 660,
    specifications: [
      {
        property: 'Масса',
        value: '900 г. (0.75-1.25кг.)'
      },
      {
        property: 'Срок годности',
        value: '7 суток.'
      },
      {
        property: 'Условия хранения',
        value: 'при температуре от -2 до +2 °С.'
      },
      {
        property: 'Упаковка',
        value: 'вакуумная упаковка.'
      },
      {
        property: 'Место происхождения',
        value: 'Краснодарский край, район Славянский.'
      }
    ],
    properties: [
      {
        property: 'Энергетическая ценность',
        value: '201 ккал. / 841 кДж.'
      },
      {
        property: 'Пищевая ценность',
        value: 'белки - 23,6 г., жиры - 1,9 г., углеводы - 0 г.; на 100 г.'
      }
    ]
  },
  {
    id: 4,
    image: 'https://i.ibb.co/gRvbsVD/product-5.jpg',
    title: 'Голень цыпленка',
    description:
      'Голень — это нижняя часть куриного окорочка с очень нежным и сочным мясом. Голени подходят для жарки, запекания, приготовления праздничных закусок и согревающих бульонов. Мясо голени богато белком, аминокислотами, витаминами группы B и железом.',
    weight: 700,
    price: 389,
    specifications: [
      {
        property: 'Масса',
        value: '700 г. (350-1050г.)'
      },
      {
        property: 'Срок годности',
        value: '5 суток.'
      },
      {
        property: 'Условия хранения',
        value: 'при температуре от 0 до +4 °С.'
      },
      {
        property: 'Упаковка',
        value: 'вакуумная упаковка.'
      },
      {
        property: 'Место происхождения',
        value: 'Рязанская область, Спасский р-н.'
      }
    ],
    properties: [
      {
        property: 'Энергетическая ценность',
        value: '238 кКал. / 995,8 кДж.'
      },
      {
        property: 'Пищевая ценность',
        value: 'белки - 18,2 г., жиры - 18,4 г., углеводы - 0,1 г.; на 100 г.'
      }
    ]
  }
];

export default products;
