import { introBlue, introTan, whiteColor } from '../constants/colors';
import { font } from '../constants/fonts';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;

const styles = {
  nameHeading: {
    fontSize: 25,
    fontFamily: font.bold.fontFamily,
    color: introBlue,
  },

  img: {
    width: 0.4 * vh,
    height: 0.4 * vh * (596 / 1000),
    margin: 0,
  },

  introText: {
    fontSize: 25,
    fontFamily: font.bold.fontFamily,
    color: introTan,
  },

  googleBtnContainer: { backgroundColor: introTan, borderRadius: 10 },

  googleIcon: { width: 20, height: 20 },

  googleBtnText: {
    fontSize: 16,
    fontFamily: font.medium.fontFamily,
    color: introBlue,
  },

  bgImageStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    bottom: 0,
    zIndex: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  parentContainer: { backgroundColor: whiteColor },
};

export default styles;
