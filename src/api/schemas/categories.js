import faker from 'faker';

export default function () {
  const title = faker.random.words(faker.random.number({
    min: 1,
    max: 2,
  }));
  return {
    title,
    permalink: `/category/${faker.helpers.slugify(title)}`,
    id: Math.random(),
  };
}
