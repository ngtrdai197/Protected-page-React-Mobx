import { makeObservable, observable } from 'mobx';
import { AuthService } from '../../services/auth.service';
import { Container } from 'typedi';

class HomeViewModel {
  public authService: AuthService = Container.get(AuthService);

  @observable
  public  titleScreen: string = 'Home page';

  constructor() {
    makeObservable(this);
  }
}

export const homeVm = new HomeViewModel();
