import { AppBar, Box, Toolbar } from '@mui/material';
import { HeaderContext } from './header-context';
import { Story } from '@storybook/addon-docs';
/**
 * The header is always shown at the top of screen, and can dynamically render
 * different components depending on HeaderContext
 */
export const Header = () => {
  return (
    <HeaderContext.Consumer>
      {(headerContent) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} style={{ maxHeight: '64px' }}>
            <Toolbar>{headerContent}</Toolbar>
          </AppBar>
        </Box>
      )}
    </HeaderContext.Consumer>
  );
};

<Story name="test!" />;
