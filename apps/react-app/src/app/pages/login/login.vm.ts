import { Container } from 'typedi';
import { makeAutoObservable } from 'mobx';
import { AuthService } from '../../services/auth.service';

export class LoginViewModel {
  public authService: AuthService = Container.get(AuthService);

  public count = 0;
  public msg = '';

  constructor() {
    makeAutoObservable(this);
  }

  public effect = () => {
    this.authService.onLogout();
  };

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
