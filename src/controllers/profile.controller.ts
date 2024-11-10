
import {get} from '@loopback/rest';

export class ProfileController {
  @get('/profile')
  profile(): string {
    return 'Hi, my name is Priya Suvarna(801366527) and this is the assignment for Quiz 14';
  }
}
