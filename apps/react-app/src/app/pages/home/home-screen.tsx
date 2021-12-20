import * as React from 'react';
import { observer } from 'mobx-react';
import { homeVm } from './home.vm';

const HomePage = observer(() => {
  return (
    <>
      <h4>Index page</h4>
      <p>Hi: {homeVm.authService.username}</p>
    </>
  );
});

export default HomePage;
