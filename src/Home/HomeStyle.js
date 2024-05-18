import {StyleSheet} from 'react-native';
import {moderateScale} from '../Common/Common.utils';
export const HomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: moderateScale(15),
  },
  container: {
    flex: 0.27,
    borderRadius: moderateScale(20),
    backgroundColor: '#3750DD',
    marginBottom: moderateScale(20),
  },
  topContainer: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
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

export default HomeStyle;
