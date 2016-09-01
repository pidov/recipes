import faker from 'faker';

export default function () {
  return {
    title: faker.random.words(faker.random.number({
      min: 1,
      max: 5,
    })),
    preparationTime: faker.random.number({
      min: 10,
      max: 120,
    }),
    portion: faker.random.number({
      min: 1,
      max: 12,
    }),
    backgroundImage: faker.image.food(600, 600, true),
    permalink: faker.internet.url(),
  };
}
