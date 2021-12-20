import { Service } from 'typedi';
import { action, makeObservable, observable } from 'mobx';

@Service()
export class AuthService {
  @observable
  public isAuthenticated = false;

  @observable
  public username: string = '';

  constructor() {
    makeObservable(this);
  }

  @action.bound
  public onLogin() {
    this.isAuthenticated = true;
    this.username = 'Dai Nguyen';
  }

  @action.bound
  public onLogout() {
    this.isAuthenticated = false;
  }
}
