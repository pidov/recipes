import faker from 'faker';

export default function () {
  return {
    title: faker.random.words(faker.random.number({
      min: 1,
      max: 5,
    })),
    backgroundImage: faker.image.food(328, 120, true),
    permalink: `recipes/${faker.random.number()}`,
  };
}
