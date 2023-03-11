import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoggedInNavigation from './LoggedInNavigation';
import LoggedOutNavigation from './LoggedOutNavigation';

const RootNavigation = () => {
  const { isAuth } = useSelector((store: RootState) => store.auth);

  return <>{isAuth ? <LoggedInNavigation /> : <LoggedOutNavigation />}</>;
};

export default RootNavigation;
