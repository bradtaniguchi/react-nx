import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './core/Header';
import { HeaderContext } from './core/header-context';
import { Login } from './pages/login/Login';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import { RoomCreate } from './pages/room-create/room-create';
import { RoomUsers } from './pages/room-users/RoomUsers';
import { Room } from './pages/room/Room';
import { Rooms } from './pages/rooms/Rooms';

export const App = () => {
  return (
    <HeaderContext.Provider value={undefined}>
      {/* TODO: add oauth redirect route  */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/room/create " element={<RoomCreate />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/room/:roomId/users" element={<RoomUsers />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HeaderContext.Provider>
  );
};

export default App;
