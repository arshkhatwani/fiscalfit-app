import { Dimensions } from 'react-native';
import { introTan, whiteColor } from '../constants/colors';
import { font } from '../constants/fonts';

export const vw = Dimensions.get('window').width;

const styles = {
  heading: {
    fontFamily: font.bold.fontFamily,
    color: introTan,
    fontSize: 22,
    textAlign: 'center' as 'center',
  },

  subHeading: {
    fontFamily: font.medium.fontFamily,
    fontSize: 18,
    color: whiteColor,
  },

  container: {
    width: 0.8 * vw,
    overflow: 'hidden' as 'hidden',
    borderRadius: 10,
  },
};

export default styles;
