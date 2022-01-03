import React from 'react';

interface IProps {
  msg: string;
}

export const MessageText: React.FC<IProps> = (props) => {
  return <strong>Message received: {props.msg}</strong>;
};
