export default ({ app }, inject) => {
  inject('featuredApartment', {
    name: 'Apartamento em destaque',
    title: 'Sua casa financiada <br> em até 360 meses',
    badget: '40,31m², 2 Quartos, Garagem Coberta, Armário na Cozinha',
    description: 'Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, <br><br><br><br> Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2',
    shortDescription: 'Ótimo apartamento com 2 quartos e garagem coberta',
    cta: 'Veja mais Informações',
    slug: 'ape-1',
    details: {
      bedrooms: 2,
      toilets: 2,
      squareMeters: 31,
      constructionData: '2019',
      parkingSpace: '1 coberta',
      amenities: [
        {
          // icon: 'flaticon-garage',
          name: 'Piscina'
        },
        {
          // icon: 'flaticon-park',
          name: 'Garagem Coberta'
        },
        {
          // icon: 'flaticon-home-2',
          name: 'Suíte'
        },
        {
          // icon: 'flaticon-car',
          name: 'Sala de festa'
        },
        {
          // icon: 'flaticon-car',
          name: 'Área de churrasco'
        },
        {
          // icon: 'flaticon-car',
          name: 'Playground'
        },
      ],
      price: '155.000,00',
      location: {
        address: 'Rua Antônio Zanelato, 193 - Residencial Atlanta',
        city: 'Ribeirão Preto, SP',
      },
      video: 'https://www.youtube.com/watch?v=-Z-ec2c084A'
    },
    defaultPicture: '/apartments/1/destaque.jpg',
    pictures: [
      '/apartments/1/1.jpg',
    ]
  });


  inject('apartments', [
    {
      "id": 1,
      name: 'Apê top 1',
      title: 'Sua casa financiada <br> em até 360 meses',
      shortDescription: 'Descrição curta apartamento 1',
      cta: 'Veja mais Informações',
      slug: 'ape-1',
      details: {
        bedrooms: 3,
        toilets: 2,
        squareMeters: 40.31,
        constructionData: '2019',
        parkingSpace: '1 coberta',
        amenities: [
          'Piscina',
          'Garagem Coberta',
          'SChurrasqueira',
        ],
        price: '155.000,00',
        location: {
          address: 'Rua Antônio Zanelato, 193 - Residencial Atlanta',
          city: 'Ribeirão Preto, SP',
        },
        video: 'https://www.youtube.com/watch?v=-Z-ec2c084A'
      },
      defaultPicture: '/apartments/1/destaque.jpg',
      pictures: [
        '/apartments/1/1.jpg',
      ]
    },
    {
      "id": 2,
      name: 'Apê top nnn2',
      title: 'Sua casa financiada <br> em até 360 meses',
      description: 'Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, <br><br><br><br> Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2, Descrição longa apartamento 2',
      shortDescription: 'Descrição curta apartamento 2',
      cta: 'Veja mais Informações',
      slug: 'ape-2',
      details: {
        bedrooms: 3,
        toilets: 2,
        squareMeters: 40.31,
        constructionData: '2019',
        parkingSpace: '1 coberta',
        amenities: [
          {
            icon: 'flaticon-car',
            name: 'Piscina'
          },
          {
            icon: 'flaticon-car',
            name: 'Garagem Coberta'
          },
          {
            icon: 'flaticon-car',
            name: 'Suíte'
          },
        ],
        price: '155.000,00',
        location: {
          address: 'Rua Antônio Zanelato, 193 - Residencial Atlanta',
          city: 'Ribeirão Preto, SP',
        },
        video: 'https://www.youtube.com/watch?v=-Z-ec2c084A'
      },
      defaultPicture: '/apartments/1/destaque.jpg',
      pictures: [
        '/apartments/1/1.jpg',
        '/apartments/1/1.jpg',
        '/apartments/1/1.jpg',
        '/apartments/1/1.jpg',
      ]
    },
    {
      id: 3,
      name: 'Apê top 3',
      title: 'Sua casa financiada <br> em até 360 meses',
      shortDescription: 'Descrição curta apartamento 3',
      cta: 'Veja mais Informações',
      slug: 'ape-3',
      details: {
        bedrooms: 3,
        toilets: 2,
        squareMeters: 40.31,
        constructionData: '2019',
        parkingSpace: '1 coberta',
        amenities: [
          'Piscina',
          'Garagem Coberta',
          'Suíte'
        ],
        price: '155.000,00',
        location: {
          address: 'Rua Antônio Zanelato, 193 - Residencial Atlanta',
          city: 'Ribeirão Preto, SP',
        },
        video: 'https://www.youtube.com/watch?v=-Z-ec2c084A'
      },
      defaultPicture: '/apartments/1/destaque.jpg',
      pictures: [
        '/apartments/1/1.jpg',
      ]
    },
    {
      id: 4,
      name: 'Apê top 4',
      title: 'Sua casa financiada <br> em até 360 meses',
      shortDescription: 'Descrição curta apartamentom 4',
      cta: 'Veja mais Informações',
      slug: 'ape-4',
      details: {
        bedrooms: 3,
        toilets: 2,
        squareMeters: 40.31,
        constructionData: '2019',
        parkingSpace: '1 coberta',
        amenities: [
          'Piscina',
          'Garagem Coberta',
          'Suíte'
        ],
        price: '155.000,00',
        location: {
          address: 'Rua Antônio Zanelato, 193 - Residencial Atlanta',
          city: 'Ribeirão Preto, SP',
        },
        video: 'https://www.youtube.com/watch?v=-Z-ec2c084A'
      },
      defaultPicture: '/apartments/1/destaque.jpg',
      pictures: [
        '/apartments/1/1.jpg',
      ]
    },
  ]);


  // inject('posts', {
  //   1: {
  //     title: 'Post blog 1',
  //     description: 'Aprenda como sair do aluguél',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum commodo justo, vitae tincidunt felis posuere vel. Nunc in purus ac nunc tincidunt mattis. Pellentesque euismod, mi eget vehicula auctor, metus ex placerat urna, ac pellentesque leo libero non velit. Maecenas consequat turpis eu libero faucibus congue. Suspendisse vel neque pellentesque, iaculis velit scelerisque, commodo lorem. Ut porttitor nibh sed ornare viverra. Vestibulum vehicula laoreet lorem at tincidunt. Morbi malesuada felis non finibus ultricies. Morbi non lacus at lectus laoreet dictum sit amet a augue. Maecenas condimentum dolor vitae quam suscipit volutpat. Cras venenatis neque nisi, sit amet ultrices ante accumsan eget. Maecenas ac volutpat enim. Donec at mattis dolor. Sed sed pulvinar ligula.\n' +
  //       '\n' +
  //       'Donec nec lorem pretium, scelerisque quam commodo, cursus urna. Curabitur consectetur vel orci id fringilla. Curabitur ac fermentum nulla, sit amet lacinia nibh. Donec ultricies tincidunt scelerisque. Cras vehicula convallis turpis id rutrum. Donec dictum rutrum blandit. Cras imperdiet ultricies dolor laoreet vulputate. Sed vel ullamcorper elit, nec finibus sapien. Maecenas odio massa, pulvinar ut est sit amet, viverra sollicitudin libero. Proin vitae auctor dolor, vitae fringilla neque. Mauris neque felis, congue non orci a, laoreet cursus quam. Quisque purus sem, aliquet et dolor sit amet, condimentum feugiat quam.\n' +
  //       '\n' +
  //       'Fusce at neque ac metus commodo egestas condimentum eget tellus. Etiam vitae congue turpis. Duis varius risus mi, sit amet sodales mauris ullamcorper vitae. Nullam viverra ligula et enim fermentum, eget fringilla elit consequat. Morbi pellentesque tellus ut tempor hendrerit. Duis elementum ipsum cursus justo molestie, egestas elementum quam vulputate. Maecenas ac condimentum lectus. Morbi eros sem, placerat a est sit amet, dapibus semper lectus. Integer ut massa nisi. Suspendisse luctus velit massa, at efficitur orci consectetur sit amet. Cras malesuada, ante id pretium pretium, dolor risus luctus augue, posuere bibendum est mauris a odio. Proin at diam eu lacus aliquam condimentum ut at lectus. Cras at varius orci, molestie viverra odio. Vestibulum porttitor turpis diam. In hac habitasse platea dictumst. Duis at nulla odio.\n' +
  //       '\n' +
  //       'Maecenas eu mi quis velit eleifend laoreet. Cras dignissim magna non ante porta egestas. Cras lacinia orci facilisis velit pulvinar, in molestie purus semper. Proin condimentum volutpat nisl. Ut nec augue felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in sapien urna. Morbi nisl sem, accumsan in vehicula et, mattis tincidunt nulla. Morbi ac augue viverra, vestibulum nisl sit amet, tempor felis. Maecenas erat nulla, consectetur nec sem sit amet, interdum pharetra sem. Integer vitae vehicula sem, at mattis erat. Maecenas vitae gravida sem.\n' +
  //       '\n' +
  //       'Proin maximus nisi placerat malesuada venenatis. Vestibulum congue consectetur quam, non convallis dui ultrices ac. Aliquam neque erat, eleifend in ornare in, ullamcorper eget massa. Curabitur laoreet nibh eleifend, dictum massa vel, tempor nunc. Curabitur tincidunt dapibus est. Morbi quis pharetra ligula. Quisque varius convallis mi. Duis ultrices leo eu lacus sollicitudin vestibulum. Fusce bibendum felis in egestas bibendum. Aenean sed efficitur eros. Phasellus congue ante eleifend nibh malesuada, id auctor odio vulputate. Vestibulum ut nisi vel diam laoreet viverra. Vestibulum quis facilisis erat. Donec non pharetra turpis. Duis luctus neque ac neque pulvinar, eget commodo dolor sollicitudin. Fusce sit amet gravida magna, non viverra turpis.',
  //     slug: 'post-blog-1',
  //     thumbnail: '/blog/1/post-blog-1-small.jpg',
  //   },
  //   2: {
  //     title: 'Post blog 2',
  //     description: 'Aprenda como sair do aluguél 2',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum commodo justo, vitae tincidunt felis posuere vel. Nunc in purus ac nunc tincidunt mattis. Pellentesque euismod, mi eget vehicula auctor, metus ex placerat urna, ac pellentesque leo libero non velit. Maecenas consequat turpis eu libero faucibus congue. Suspendisse vel neque pellentesque, iaculis velit scelerisque, commodo lorem. Ut porttitor nibh sed ornare viverra. Vestibulum vehicula laoreet lorem at tincidunt. Morbi malesuada felis non finibus ultricies. Morbi non lacus at lectus laoreet dictum sit amet a augue. Maecenas condimentum dolor vitae quam suscipit volutpat. Cras venenatis neque nisi, sit amet ultrices ante accumsan eget. Maecenas ac volutpat enim. Donec at mattis dolor. Sed sed pulvinar ligula.\n' +
  //       '\n' +
  //       'Donec nec lorem pretium, scelerisque quam commodo, cursus urna. Curabitur consectetur vel orci id fringilla. Curabitur ac fermentum nulla, sit amet lacinia nibh. Donec ultricies tincidunt scelerisque. Cras vehicula convallis turpis id rutrum. Donec dictum rutrum blandit. Cras imperdiet ultricies dolor laoreet vulputate. Sed vel ullamcorper elit, nec finibus sapien. Maecenas odio massa, pulvinar ut est sit amet, viverra sollicitudin libero. Proin vitae auctor dolor, vitae fringilla neque. Mauris neque felis, congue non orci a, laoreet cursus quam. Quisque purus sem, aliquet et dolor sit amet, condimentum feugiat quam.\n' +
  //       '\n' +
  //       'Fusce at neque ac metus commodo egestas condimentum eget tellus. Etiam vitae congue turpis. Duis varius risus mi, sit amet sodales mauris ullamcorper vitae. Nullam viverra ligula et enim fermentum, eget fringilla elit consequat. Morbi pellentesque tellus ut tempor hendrerit. Duis elementum ipsum cursus justo molestie, egestas elementum quam vulputate. Maecenas ac condimentum lectus. Morbi eros sem, placerat a est sit amet, dapibus semper lectus. Integer ut massa nisi. Suspendisse luctus velit massa, at efficitur orci consectetur sit amet. Cras malesuada, ante id pretium pretium, dolor risus luctus augue, posuere bibendum est mauris a odio. Proin at diam eu lacus aliquam condimentum ut at lectus. Cras at varius orci, molestie viverra odio. Vestibulum porttitor turpis diam. In hac habitasse platea dictumst. Duis at nulla odio.\n' +
  //       '\n' +
  //       'Maecenas eu mi quis velit eleifend laoreet. Cras dignissim magna non ante porta egestas. Cras lacinia orci facilisis velit pulvinar, in molestie purus semper. Proin condimentum volutpat nisl. Ut nec augue felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in sapien urna. Morbi nisl sem, accumsan in vehicula et, mattis tincidunt nulla. Morbi ac augue viverra, vestibulum nisl sit amet, tempor felis. Maecenas erat nulla, consectetur nec sem sit amet, interdum pharetra sem. Integer vitae vehicula sem, at mattis erat. Maecenas vitae gravida sem.\n' +
  //       '\n' +
  //       'Proin maximus nisi placerat malesuada venenatis. Vestibulum congue consectetur quam, non convallis dui ultrices ac. Aliquam neque erat, eleifend in ornare in, ullamcorper eget massa. Curabitur laoreet nibh eleifend, dictum massa vel, tempor nunc. Curabitur tincidunt dapibus est. Morbi quis pharetra ligula. Quisque varius convallis mi. Duis ultrices leo eu lacus sollicitudin vestibulum. Fusce bibendum felis in egestas bibendum. Aenean sed efficitur eros. Phasellus congue ante eleifend nibh malesuada, id auctor odio vulputate. Vestibulum ut nisi vel diam laoreet viverra. Vestibulum quis facilisis erat. Donec non pharetra turpis. Duis luctus neque ac neque pulvinar, eget commodo dolor sollicitudin. Fusce sit amet gravida magna, non viverra turpis.',
  //     slug: 'post-blog-2',
  //     thumbnail: '/blog/2/post-blog-2-small.jpg',
  //   },
  //   3: {
  //     title: 'Post blog 3',
  //     description: 'Aprenda como sair do aluguél 3',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum commodo justo, vitae tincidunt felis posuere vel. Nunc in purus ac nunc tincidunt mattis. Pellentesque euismod, mi eget vehicula auctor, metus ex placerat urna, ac pellentesque leo libero non velit. Maecenas consequat turpis eu libero faucibus congue. Suspendisse vel neque pellentesque, iaculis velit scelerisque, commodo lorem. Ut porttitor nibh sed ornare viverra. Vestibulum vehicula laoreet lorem at tincidunt. Morbi malesuada felis non finibus ultricies. Morbi non lacus at lectus laoreet dictum sit amet a augue. Maecenas condimentum dolor vitae quam suscipit volutpat. Cras venenatis neque nisi, sit amet ultrices ante accumsan eget. Maecenas ac volutpat enim. Donec at mattis dolor. Sed sed pulvinar ligula.\n' +
  //       '\n' +
  //       'Donec nec lorem pretium, scelerisque quam commodo, cursus urna. Curabitur consectetur vel orci id fringilla. Curabitur ac fermentum nulla, sit amet lacinia nibh. Donec ultricies tincidunt scelerisque. Cras vehicula convallis turpis id rutrum. Donec dictum rutrum blandit. Cras imperdiet ultricies dolor laoreet vulputate. Sed vel ullamcorper elit, nec finibus sapien. Maecenas odio massa, pulvinar ut est sit amet, viverra sollicitudin libero. Proin vitae auctor dolor, vitae fringilla neque. Mauris neque felis, congue non orci a, laoreet cursus quam. Quisque purus sem, aliquet et dolor sit amet, condimentum feugiat quam.\n' +
  //       '\n' +
  //       'Fusce at neque ac metus commodo egestas condimentum eget tellus. Etiam vitae congue turpis. Duis varius risus mi, sit amet sodales mauris ullamcorper vitae. Nullam viverra ligula et enim fermentum, eget fringilla elit consequat. Morbi pellentesque tellus ut tempor hendrerit. Duis elementum ipsum cursus justo molestie, egestas elementum quam vulputate. Maecenas ac condimentum lectus. Morbi eros sem, placerat a est sit amet, dapibus semper lectus. Integer ut massa nisi. Suspendisse luctus velit massa, at efficitur orci consectetur sit amet. Cras malesuada, ante id pretium pretium, dolor risus luctus augue, posuere bibendum est mauris a odio. Proin at diam eu lacus aliquam condimentum ut at lectus. Cras at varius orci, molestie viverra odio. Vestibulum porttitor turpis diam. In hac habitasse platea dictumst. Duis at nulla odio.\n' +
  //       '\n' +
  //       'Maecenas eu mi quis velit eleifend laoreet. Cras dignissim magna non ante porta egestas. Cras lacinia orci facilisis velit pulvinar, in molestie purus semper. Proin condimentum volutpat nisl. Ut nec augue felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in sapien urna. Morbi nisl sem, accumsan in vehicula et, mattis tincidunt nulla. Morbi ac augue viverra, vestibulum nisl sit amet, tempor felis. Maecenas erat nulla, consectetur nec sem sit amet, interdum pharetra sem. Integer vitae vehicula sem, at mattis erat. Maecenas vitae gravida sem.\n' +
  //       '\n' +
  //       'Proin maximus nisi placerat malesuada venenatis. Vestibulum congue consectetur quam, non convallis dui ultrices ac. Aliquam neque erat, eleifend in ornare in, ullamcorper eget massa. Curabitur laoreet nibh eleifend, dictum massa vel, tempor nunc. Curabitur tincidunt dapibus est. Morbi quis pharetra ligula. Quisque varius convallis mi. Duis ultrices leo eu lacus sollicitudin vestibulum. Fusce bibendum felis in egestas bibendum. Aenean sed efficitur eros. Phasellus congue ante eleifend nibh malesuada, id auctor odio vulputate. Vestibulum ut nisi vel diam laoreet viverra. Vestibulum quis facilisis erat. Donec non pharetra turpis. Duis luctus neque ac neque pulvinar, eget commodo dolor sollicitudin. Fusce sit amet gravida magna, non viverra turpis.',
  //     slug: 'post-blog-3',
  //     thumbnail: '/blog/3/post-blog-3-small.jpg',
  //   },
  //   4: {
  //     title: 'Post blog 4',
  //     description: 'Aprenda como sair do aluguél 4',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum commodo justo, vitae tincidunt felis posuere vel. Nunc in purus ac nunc tincidunt mattis. Pellentesque euismod, mi eget vehicula auctor, metus ex placerat urna, ac pellentesque leo libero non velit. Maecenas consequat turpis eu libero faucibus congue. Suspendisse vel neque pellentesque, iaculis velit scelerisque, commodo lorem. Ut porttitor nibh sed ornare viverra. Vestibulum vehicula laoreet lorem at tincidunt. Morbi malesuada felis non finibus ultricies. Morbi non lacus at lectus laoreet dictum sit amet a augue. Maecenas condimentum dolor vitae quam suscipit volutpat. Cras venenatis neque nisi, sit amet ultrices ante accumsan eget. Maecenas ac volutpat enim. Donec at mattis dolor. Sed sed pulvinar ligula.\n' +
  //       '\n' +
  //       'Donec nec lorem pretium, scelerisque quam commodo, cursus urna. Curabitur consectetur vel orci id fringilla. Curabitur ac fermentum nulla, sit amet lacinia nibh. Donec ultricies tincidunt scelerisque. Cras vehicula convallis turpis id rutrum. Donec dictum rutrum blandit. Cras imperdiet ultricies dolor laoreet vulputate. Sed vel ullamcorper elit, nec finibus sapien. Maecenas odio massa, pulvinar ut est sit amet, viverra sollicitudin libero. Proin vitae auctor dolor, vitae fringilla neque. Mauris neque felis, congue non orci a, laoreet cursus quam. Quisque purus sem, aliquet et dolor sit amet, condimentum feugiat quam.\n' +
  //       '\n' +
  //       'Fusce at neque ac metus commodo egestas condimentum eget tellus. Etiam vitae congue turpis. Duis varius risus mi, sit amet sodales mauris ullamcorper vitae. Nullam viverra ligula et enim fermentum, eget fringilla elit consequat. Morbi pellentesque tellus ut tempor hendrerit. Duis elementum ipsum cursus justo molestie, egestas elementum quam vulputate. Maecenas ac condimentum lectus. Morbi eros sem, placerat a est sit amet, dapibus semper lectus. Integer ut massa nisi. Suspendisse luctus velit massa, at efficitur orci consectetur sit amet. Cras malesuada, ante id pretium pretium, dolor risus luctus augue, posuere bibendum est mauris a odio. Proin at diam eu lacus aliquam condimentum ut at lectus. Cras at varius orci, molestie viverra odio. Vestibulum porttitor turpis diam. In hac habitasse platea dictumst. Duis at nulla odio.\n' +
  //       '\n' +
  //       'Maecenas eu mi quis velit eleifend laoreet. Cras dignissim magna non ante porta egestas. Cras lacinia orci facilisis velit pulvinar, in molestie purus semper. Proin condimentum volutpat nisl. Ut nec augue felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in sapien urna. Morbi nisl sem, accumsan in vehicula et, mattis tincidunt nulla. Morbi ac augue viverra, vestibulum nisl sit amet, tempor felis. Maecenas erat nulla, consectetur nec sem sit amet, interdum pharetra sem. Integer vitae vehicula sem, at mattis erat. Maecenas vitae gravida sem.\n' +
  //       '\n' +
  //       'Proin maximus nisi placerat malesuada venenatis. Vestibulum congue consectetur quam, non convallis dui ultrices ac. Aliquam neque erat, eleifend in ornare in, ullamcorper eget massa. Curabitur laoreet nibh eleifend, dictum massa vel, tempor nunc. Curabitur tincidunt dapibus est. Morbi quis pharetra ligula. Quisque varius convallis mi. Duis ultrices leo eu lacus sollicitudin vestibulum. Fusce bibendum felis in egestas bibendum. Aenean sed efficitur eros. Phasellus congue ante eleifend nibh malesuada, id auctor odio vulputate. Vestibulum ut nisi vel diam laoreet viverra. Vestibulum quis facilisis erat. Donec non pharetra turpis. Duis luctus neque ac neque pulvinar, eget commodo dolor sollicitudin. Fusce sit amet gravida magna, non viverra turpis.',
  //     slug: 'post-blog-4',
  //     thumbnail: '/blog/4/post-blog-4-small.jpg',
  //   },
  //   5: {
  //     title: 'Post blog 5',
  //     description: 'Aprenda como sair do aluguél 5',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum commodo justo, vitae tincidunt felis posuere vel. Nunc in purus ac nunc tincidunt mattis. Pellentesque euismod, mi eget vehicula auctor, metus ex placerat urna, ac pellentesque leo libero non velit. Maecenas consequat turpis eu libero faucibus congue. Suspendisse vel neque pellentesque, iaculis velit scelerisque, commodo lorem. Ut porttitor nibh sed ornare viverra. Vestibulum vehicula laoreet lorem at tincidunt. Morbi malesuada felis non finibus ultricies. Morbi non lacus at lectus laoreet dictum sit amet a augue. Maecenas condimentum dolor vitae quam suscipit volutpat. Cras venenatis neque nisi, sit amet ultrices ante accumsan eget. Maecenas ac volutpat enim. Donec at mattis dolor. Sed sed pulvinar ligula.\n' +
  //       '\n' +
  //       'Donec nec lorem pretium, scelerisque quam commodo, cursus urna. Curabitur consectetur vel orci id fringilla. Curabitur ac fermentum nulla, sit amet lacinia nibh. Donec ultricies tincidunt scelerisque. Cras vehicula convallis turpis id rutrum. Donec dictum rutrum blandit. Cras imperdiet ultricies dolor laoreet vulputate. Sed vel ullamcorper elit, nec finibus sapien. Maecenas odio massa, pulvinar ut est sit amet, viverra sollicitudin libero. Proin vitae auctor dolor, vitae fringilla neque. Mauris neque felis, congue non orci a, laoreet cursus quam. Quisque purus sem, aliquet et dolor sit amet, condimentum feugiat quam.\n' +
  //       '\n' +
  //       'Fusce at neque ac metus commodo egestas condimentum eget tellus. Etiam vitae congue turpis. Duis varius risus mi, sit amet sodales mauris ullamcorper vitae. Nullam viverra ligula et enim fermentum, eget fringilla elit consequat. Morbi pellentesque tellus ut tempor hendrerit. Duis elementum ipsum cursus justo molestie, egestas elementum quam vulputate. Maecenas ac condimentum lectus. Morbi eros sem, placerat a est sit amet, dapibus semper lectus. Integer ut massa nisi. Suspendisse luctus velit massa, at efficitur orci consectetur sit amet. Cras malesuada, ante id pretium pretium, dolor risus luctus augue, posuere bibendum est mauris a odio. Proin at diam eu lacus aliquam condimentum ut at lectus. Cras at varius orci, molestie viverra odio. Vestibulum porttitor turpis diam. In hac habitasse platea dictumst. Duis at nulla odio.\n' +
  //       '\n' +
  //       'Maecenas eu mi quis velit eleifend laoreet. Cras dignissim magna non ante porta egestas. Cras lacinia orci facilisis velit pulvinar, in molestie purus semper. Proin condimentum volutpat nisl. Ut nec augue felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in sapien urna. Morbi nisl sem, accumsan in vehicula et, mattis tincidunt nulla. Morbi ac augue viverra, vestibulum nisl sit amet, tempor felis. Maecenas erat nulla, consectetur nec sem sit amet, interdum pharetra sem. Integer vitae vehicula sem, at mattis erat. Maecenas vitae gravida sem.\n' +
  //       '\n' +
  //       'Proin maximus nisi placerat malesuada venenatis. Vestibulum congue consectetur quam, non convallis dui ultrices ac. Aliquam neque erat, eleifend in ornare in, ullamcorper eget massa. Curabitur laoreet nibh eleifend, dictum massa vel, tempor nunc. Curabitur tincidunt dapibus est. Morbi quis pharetra ligula. Quisque varius convallis mi. Duis ultrices leo eu lacus sollicitudin vestibulum. Fusce bibendum felis in egestas bibendum. Aenean sed efficitur eros. Phasellus congue ante eleifend nibh malesuada, id auctor odio vulputate. Vestibulum ut nisi vel diam laoreet viverra. Vestibulum quis facilisis erat. Donec non pharetra turpis. Duis luctus neque ac neque pulvinar, eget commodo dolor sollicitudin. Fusce sit amet gravida magna, non viverra turpis.',
  //     slug: 'post-blog-5',
  //     thumbnail: '/blog/5/post-blog-5-small.jpg',
  //   },
  // });
};
