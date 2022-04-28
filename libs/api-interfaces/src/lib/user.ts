import { Color, DbDocument } from './core';

export interface User extends DbDocument {
  color: Color;
  displayName: string;
}
