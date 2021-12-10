import { createContext, useContext } from 'react';
// import { LoginVm } from './pages/login/login.vm';

interface IStore {
  // loginVm: LoginVm;
}

export const store: IStore = {
  // loginVm: new LoginVm()
};

export const StoreContext = createContext<IStore | undefined>(undefined);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useStore must be used within a StoreProvider.');
  return store;
};
