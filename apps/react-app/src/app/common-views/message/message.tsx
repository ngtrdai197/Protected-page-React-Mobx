import React from 'react';

interface IProps {
  msg: string;
}

export const MessageText: React.FC<IProps> = ({ msg }) => {
  return <strong>Message received: {msg}</strong>;
};
