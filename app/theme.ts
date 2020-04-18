const palette = {
  white: '#F0F2F3',
  black: '#0B0B0B',
  blue: '#006FBB',
};

export const theme = {
  colors: {
    mainBackgroundColor: palette.white,
    textHeader: palette.blue,
    textBody: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontSize: 40,
      color: 'textHeader',
    },
    body: {
      fontSize: 24,
      color: 'textBody',
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackgroundColor: palette.black,
    textBody: palette.white,
  },
};

export type Theme = typeof theme;
