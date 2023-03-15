import { whiteColor } from '../constants/colors';
import { font } from '../constants/fonts';

const styles = {
  heading: {
    fontFamily: font.bold.fontFamily,
    fontSize: 22,
  },

  spendBtn: {
    backgroundColor: 'red',
    borderColor: 'red',
  },

  earnBtn: {
    backgroundColor: 'green',
    borderColor: 'green',
  },

  btnLabelActive: {
    color: whiteColor,
  },

  formLabel: {
    fontFamily: font.semiBold.fontFamily,
    fontSize: 18,
  },
};

export default styles;
