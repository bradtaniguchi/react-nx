import { AppBar, Box } from '@mui/material';
import { HeaderContext } from './header-context';
/**
 * The header is always shown at the top of screen, and can dynamically render
 * different components depending on HeaderContext
 */
export const Header = () => {
  return (
    <HeaderContext.Consumer>
      {(headerContent) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">{headerContent}</AppBar>
        </Box>
      )}
    </HeaderContext.Consumer>
  );
};
