import { greyHeading, whiteColor } from '../constants/colors';
import { font } from '../constants/fonts';

const styles = {
  heading: {
    fontFamily: font.semiBold.fontFamily,
    fontSize: 22,
    textAlign: 'center' as 'center',
    color: whiteColor,
  },

  balanceHeading: {
    fontFamily: font.medium.fontFamily,
    fontSize: 12,
    color: greyHeading,
  },

  balance: {
    fontFamily: font.bold.fontFamily,
    fontSize: 28,
    color: whiteColor,
  },
};

export default styles;
