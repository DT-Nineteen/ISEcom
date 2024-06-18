//theme/Colors.ts
const primary = '#463FB0';
const purples = {
  purple900: '#4A5784',
  purple500: '#6F69C9',
};

const grays = {
  white: '#fff',
  gray100: '#F2F2F2',
  gray800: '#5D5D5D',
  gray950: '#1e1e1e',
  gray975: '#121212',
  black: '#000',
};

export const colors = {
  light: {
    primary,
    text: grays.gray800,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: '#ccc',
    ...purples,
    ...grays,
    completedBackground: primary,
    completedPrimary: grays.white,
    navBarBackground: grays.white,
    successText: 'green',
    errorText: 'red',
  },
  dark: {
    primary,
    text: grays.white,
    background: grays.gray800,
    tint: primary,
    tabIconDefault: '#ccc',
    ...purples,
    ...grays,
    white: grays.gray950,
    completedBackground: grays.gray800,
    completedPrimary: purples.purple500,
    navBarBackground: grays.gray975,
    successText: 'green',
    errorText: 'red',
  },
};
