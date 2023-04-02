import { font } from '../constants/fonts';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;

const styles = {
  nameHeading: {
    fontSize: 25,
    fontFamily: font.bold.fontFamily,
  },

  img: {
    width: 0.4 * vh,
    height: 0.4 * vh * (596 / 1000),
    margin: 0,
  },

  introText: {
    fontSize: 25,
    fontFamily: font.bold.fontFamily,
    color: '#D2B48C',
  },

  googleBtnContainer: { backgroundColor: '#D2B48C', borderRadius: 10 },

  googleIcon: { width: 20, height: 20 },

  googleBtnText: { fontSize: 16 },
};

export default styles;
