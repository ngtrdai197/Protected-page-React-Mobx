import React from 'react';
import { Observer } from 'mobx-react';
import { LoginViewModel } from '../../pages/login/login.vm';

interface IProps {
}

export const MessageText: React.FC<IProps> = (props) => {
  const vm = new LoginViewModel();
  return <Observer render={() => <strong>Message received: {vm.msg}</strong>} />;
};
