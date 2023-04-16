import {
  darkHeading,
  greyDarkHeading,
  spendColor,
  whiteColor,
} from '../constants/colors';
import { font } from '../constants/fonts';

const styles = {
  heading: {
    fontFamily: font.bold.fontFamily,
    fontSize: 18,
    color: darkHeading,
  },

  icon: {
    height: 25,
    width: 25,
  },

  imageIcon: {
    width: '100%',
    height: '100%',
  },

  currentSaving: {
    fontFamily: font.semiBold.fontFamily,
    fontSize: 15,
  },

  targetAmt: {
    fontFamily: font.medium.fontFamily,
    fontSize: 15,
    color: greyDarkHeading,
  },

  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: whiteColor,
  },

  exceededText: {
    color: spendColor,
    fontSize: 16,
    fontFamily: font.semiBold.fontFamily,
  },
};

export default styles;
