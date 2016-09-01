module.exports = {
  getRecipes(cb) {
    cb([{
      title: 'Musaka',
      preparationTime: 50,
      portion: 1,
      backgroundImage: 'https://placehold.it/600x600',
      permalink: 'http://google.com',
    }, {
      title: 'Musakata',
      preparationTime: 20,
      portion: 4,
      backgroundImage: 'https://placehold.it/600x600',
      permalink: 'http://google.com',
    }, {
      title: 'Musaka',
      preparationTime: 30,
      portion: 2,
      backgroundImage: 'https://placehold.it/600x600',
      permalink: 'http://google.com',
    }, {
      title: 'Musakata',
      preparationTime: 60,
      portion: 4,
      backgroundImage: 'https://placehold.it/600x600',
      permalink: 'http://google.com',
    }]);
  },
  getTeasers(cb) {
    cb([{
      title: ' Musaka',
      backgroundImage: 'https://placehold.it/328x120',
      permalink: 'recipes/1',
    }, {
      title: 'Musakata',
      backgroundImage: 'https://placehold.it/328x120',
      permalink: 'recipes/2',
    }, {
      title: 'Musaka',
      backgroundImage: 'https://placehold.it/328x120',
      permalink: 'recipes/1',
    }]);
  },
};
