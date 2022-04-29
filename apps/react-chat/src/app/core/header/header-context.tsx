import { createContext, ReactElement } from 'react';

/**
 * The header context is used to render different components within
 * the header. By default we render nothing
 */
export const HeaderContext = createContext<ReactElement | undefined>(undefined);
