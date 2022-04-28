import { Types } from 'mongoose';
/**
 * Base type used for all database documents from mongoose.
 */
export interface DbDocument {
  _id: Types.ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
}
