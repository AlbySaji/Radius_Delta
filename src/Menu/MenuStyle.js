import {StyleSheet} from 'react-native';
import {moderateScale} from '../Common/Common.utils';
export const MenuStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: moderateScale(15),
  },
  container: {
    padding: moderateScale(7),
    flex: 0.09,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: moderateScale(10),
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    elevation: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3750DD',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3750DD',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: '#949494',
  },
});

export default MenuStyle;
