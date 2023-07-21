/** @type { import('@storybook/react').Preview } */

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {red} from '@mui/material/colors';
import {withKnobs} from '@storybook/addon-knobs'

let theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators=[
  (Story)=>(
    <ThemeProvider theme={theme}><Story/></ThemeProvider>
  )
]

export default preview;
