import faker from 'faker';

export default (limit = 5, arrayData = false) => {
  const data = [];
  for (let i = 1; i <= limit; i++) {
    let row = null;
    if (arrayData) {
      row = [
        i,
        faker.name.findName(),
        faker.finance.amount(),
        faker.address.country(),
        faker.image.avatar(),
        faker.address.city(),
        faker.name.jobTitle(),
        faker.lorem.sentence(),
        faker.random.boolean(),
        faker.date.past()
      ];
    } else {
      row = {
        id: i,
        name: faker.name.findName(),
        salary: faker.finance.amount(),
        country: faker.address.country(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        job: faker.name.jobTitle(),
        description: faker.lorem.sentence(),
        active: faker.random.boolean(),
        birthday: faker.date.past()
      };
    }
    data.push(row);
  }
  return data;
}