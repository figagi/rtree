import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// import { checkLogin } from '../utils/login';
type Props = {
  component: any;
  location: any;
};

const PrivateRoute: React.FC<Props> = ({ component: Component, location, ...rest }) => {
  useEffect(() => {
    // checkLogin();
  }, []);

  return <Route {...rest} element={<Component {...rest} />} />;
};

export default PrivateRoute;
