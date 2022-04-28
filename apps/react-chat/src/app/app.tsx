import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Header } from './core/Header';
import { HeaderContext } from './core/header-context';
import { Login } from './pages/login/Login';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import { RoomCreate } from './pages/room-create/room-create';
import { RoomUsers } from './pages/room-users/RoomUsers';
import { Room } from './pages/room/Room';
import { Rooms } from './pages/rooms/Rooms';
import User from './pages/user/User';
import './scss/app.scss';

export const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const { pathname } = useLocation();

  // TODO: this still errors out but I'm not sure why
  // useEffect(() => {
  //   if (error) console.log('auth state error', error);
  // }, [error, isAuthenticated]);

  useEffect(() => console.log('pathname:', pathname), [pathname]);

  if (isLoading) {
    return <div>Loading spinner!</div>;
  }

  if (pathname === '/login' && isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (pathname !== '/login' && !isAuthenticated) {
    // TODO: handle state passing redirect?
    return <Navigate to="/login" />;
  }

  return (
    <HeaderContext.Provider value={undefined}>
      {/* TODO: add oauth redirect route  */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/room/create " element={<RoomCreate />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/room/:roomId/users" element={<RoomUsers />} />
        {/* TODO: figure out how to remove this, maybe use switch? */}
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HeaderContext.Provider>
  );
};

export default App;
