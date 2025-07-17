import {createTheme} from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      '#edeafd',
      '#d6d0fb',
      '#b4a9f8',
      '#9281f5',
      '#705af2',
      '#553eee',
      '#4126F1',
      '#331fd0',
      '#2516a3',
      '#180c75',
    ],
  },
  primaryColor: 'brand',
  primaryShade: {
    light: 6,
    dark: 4,
  },
  components: {
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
    Input: {
      styles: {
        input: {
          borderRadius: 8,
          border: '1px solid #555',
        }
      },
    },
    Button: {
      styles: {
        root: {
          width: 'max-content',
          height: '48px',
          padding: '0 24px',
          fontWeight: 600,
          fontSize: '16px',
          textTransform: 'uppercase',
          borderRadius: '100000px',
          lineHeight: "100%",
        },
      }
    }
  }
})
