import { createContext, ReactFragment } from 'react';

/**
 * The header context is used to render different components within
 * the header. By default we render nothing
 */
export const HeaderContext = createContext<ReactFragment | undefined>(
  undefined
);
