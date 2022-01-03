import * as React from 'react';
import { observer } from 'mobx-react';
import { homeVm } from './home.vm';
import { MessageText } from '../../common-views/message/message';

const HomePage = observer(() => {
  const message = (msg: string) => React.createElement(MessageText, { msg });
  return (
    <>
      <h4>Index page</h4>
      {message(homeVm.authService.username)
      }
    </>
  );
});

export default HomePage;
