import React from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { AuthService } from '../../services/auth.service';
import { Container } from 'typedi';
import { ROUTES } from '../../enums/routes';
import { observer } from 'mobx-react';

interface IProps extends RouteProps {
  redirectTo?: ROUTES;
}

export const ProtectedRoute = observer((props: IProps) => {
  const authService: AuthService = Container.get(AuthService);
  const location = useLocation();
  if (!authService.isAuthenticated) {
    return <Navigate to={props.redirectTo ?? ROUTES.LOGIN} state={{ from: location }} />;
  }
  return props.children as JSX.Element;
});
