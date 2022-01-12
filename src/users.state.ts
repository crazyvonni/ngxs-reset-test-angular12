import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@State<User>({
  name: 'userdata',
  defaults: {
    id: 13,
    name: 'John Doe'
  }
})
@Injectable()
export class UserState {

}
