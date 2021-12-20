import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loadable from 'react-loadable';
import './mobx.config';

import { ROUTES } from './enums/routes';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { ProtectedRoute } from './common-views/protected-route/protected-route';
import { LoadingPage } from './pages/loading-page/loading-screen';

const LoginPage = Loadable(
  {
    loader: async () => (await import('./pages/login/login-screen')),
    loading: LoadingPage
  }
);
const NxWelcomePage = Loadable(
  {
    loader: async () => (await import('./nx-welcome')).NxWelcome,
    loading: LoadingPage
  }
);
const HomePage = Loadable(
  {
    loader: async () => (await import('./pages/home/home-screen')),
    loading: LoadingPage
  }
);

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.WELCOME}
             element={
               <ProtectedRoute>
                 <NxWelcomePage title='react-app' />
               </ProtectedRoute>
             }
      />
      <Route path={ROUTES.HOME}
             element={
               <ProtectedRoute>
                 <HomePage />
               </ProtectedRoute>
             }
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
