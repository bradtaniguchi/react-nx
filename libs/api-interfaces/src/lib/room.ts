import { Color, DbDocument } from './core';

export interface Room extends DbDocument {
  color: Color;
  name: string;
}

export const createRoom = (room?: Partial<Room>): Room => ({
  _id: 'roomId',
  color: Color('#444'),
  name: 'Room Name',
  createdAt: new Date(),
  updatedAt: new Date(),
  ...room,
});
