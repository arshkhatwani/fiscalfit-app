import { earnColor, spendColor } from '../constants/colors';
import { font } from '../constants/fonts';

const styles = {
  heading: {
    fontFamily: font.bold.fontFamily,
    fontSize: 18,
  },

  date: {
    fontFamily: font.medium.fontFamily,
  },

  price: {
    fontSize: 16,
    fontFamily: font.semiBold.fontFamily,
  },

  icon: {
    height: 32,
    width: 32,
    borderRadius: 32,
  },

  imgIcon: {
    width: '100%',
    height: '100%',
  },

  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  spendType: (spend: boolean) => ({
    color: spend ? spendColor : earnColor,
  }),
};

export default styles;
