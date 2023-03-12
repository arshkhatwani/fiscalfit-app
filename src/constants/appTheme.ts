import { configureFonts, MD2LightTheme } from 'react-native-paper';

const font = {
  regular: {
    fontFamily: 'Quicksand',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Quicksand-Medium',
    fontWeight: '500',
  },
  light: {
    fontFamily: 'Quicksand-Light',
    fontWeight: '300',
  },
  semiBold: {
    fontFamily: 'Quicksand-SemiBold',
    fontWeight: '600',
  },
  bold: {
    fontFamily: 'Quicksand-Bold',
    fontWeight: '700',
  },
};

const fontConfig: Object = {
  web: font,
  ios: font,
  android: font,
};

const theme: Object = {
  ...MD2LightTheme,
  fonts: configureFonts({ config: fontConfig, isV3: false }),
};

export default theme;
