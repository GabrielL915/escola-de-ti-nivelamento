import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../interfaces/user';

type EntityForm<T> = {
  [K in keyof T]: FormControl<T[K] | null | undefined>;
};
export class UserForm extends FormGroup<EntityForm<User>> {
  constructor() {
    super({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
