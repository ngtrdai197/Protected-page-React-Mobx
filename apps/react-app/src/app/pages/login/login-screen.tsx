import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { Observer } from 'mobx-react';
import { LoginViewModel } from './login.vm';
import { MessageText } from '../../common-views/message/message';

const LoginPage: React.FC = () => {
  const vm = new LoginViewModel();
  return (
    <React.Fragment>
      <h3>Login Page</h3>
      <p>
        <Observer render={() => <button
          onClick={vm.doLogin}>{vm.authService.isAuthenticated ? 'Logged in' : 'Plz login'}</button>} />
        <button onClick={vm.doLogout}>Log out</button>
      </p>
      <button onClick={vm.increment}>Increase number</button>
      <Observer render={() => <h3>Count: {vm.count}</h3>} />
      <Link to={ROUTES.WELCOME}>Push to protected page</Link>
      <hr />
      <MessageText />
    </React.Fragment>
  );
};
export default LoginPage;


