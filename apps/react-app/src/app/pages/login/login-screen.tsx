import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { observer, Observer } from 'mobx-react';
import { loginVm } from './login.vm';
import { MessageText } from '../../common-views/message/message';

const LoginPage: React.FC = observer(() => {
  console.log('Re-rendering ...');
  return (
    <React.Fragment>
      <h3>Login Page</h3>
      <p>
        <Observer render={() => <button
          onClick={loginVm.doLogin}>{loginVm.authService.isAuthenticated ? 'Logged in' : 'Plz login'}</button>} />
        <button onClick={loginVm.doLogout}>Log out</button>
      </p>
      <button onClick={loginVm.increment}>Increase number</button>
      <Observer render={() => <h3>Count: {loginVm.count}</h3>} />
      <Link to={ROUTES.WELCOME}>Push to protected welcome page</Link>
      <br />
      <Link to={ROUTES.HOME}>Push to protected index page</Link>
      <hr />
      <Observer render={() => <MessageText msg={loginVm.msg} />} />
    </React.Fragment>
  );
});

export default LoginPage;
