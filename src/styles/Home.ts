import { introBlue } from '../constants/colors';
import { font } from '../constants/fonts';

const styles = {
  profilePic: {
    height: 48,
    width: 48,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: introBlue,
  },

  logoutBtn: { borderColor: 'red', borderWidth: 0.75 },

  logoutLabel: { fontSize: 12 },

  hiLabel: {
    fontFamily: font.semiBold.fontFamily,
    color: introBlue,
    fontSize: 24,
  },

  heading: {
    fontFamily: font.bold.fontFamily,
    color: introBlue,
    fontSize: 22,
  },

  helpLabel: {
    fontFamily: font.medium.fontFamily,
    fontSize: 18,
    color: introBlue,
  },

  helpIconColor: introBlue,
};

export default styles;
