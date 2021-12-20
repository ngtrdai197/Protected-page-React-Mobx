import { Container } from 'typedi';
import { action, makeObservable, observable } from 'mobx';
import { AuthService } from '../../services/auth.service';

export class LoginViewModel {
  public authService: AuthService = Container.get(AuthService);

  @observable
  public count = 0;

  @observable
  public msg = '';

  constructor() {
    makeObservable(this);
  }

  public effect = () => {
    this.authService.onLogout();
  };

  @action.bound
  public increment = () => {
    this.count += 1;
    this.msg = 'Hi there !';
  };

  public doLogin = () => {
    this.authService.onLogin();
  };

  public doLogout = () => {
    this.authService.onLogout();
  };
}

export const loginVm = new LoginViewModel();
