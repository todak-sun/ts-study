import { AppService } from './app.service';
describe(`hello`, () => {
  it(`test`, () => {
    const service: AppService = new AppService();
    service.message({ name: 'hello', age: 1 });
  });
});
