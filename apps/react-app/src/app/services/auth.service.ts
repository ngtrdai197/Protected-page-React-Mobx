import { Service } from 'typedi';
import { makeAutoObservable } from 'mobx';

@Service()
export class AuthService {

  public isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  public onLogin() {
    this.isAuthenticated = true;
  }

  public onLogout() {
    this.isAuthenticated = false;
  }
}
