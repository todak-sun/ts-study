import { IPerson } from '@@shared/person.dto';

export class AppService {
  message(person: IPerson) {
    console.log(person);
  }
}
