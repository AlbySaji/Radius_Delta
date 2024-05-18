import {StyleSheet} from 'react-native';
import {moderateScale} from '../Common/Common.utils';
export const ScheduleStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: moderateScale(12),
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFEFE',

    paddingTop: moderateScale(32),
  },

  heading: {
    color: '#3750DD',
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#FFFEFE',
    marginTop: moderateScale(13),
    borderRadius: moderateScale(5),
    shadowColor: 'grey',
    elevation: moderateScale(10),
  },
  headContainer: {
    flex: 0.06,
    padding: moderateScale(6),
    flexDirection: 'row',
    backgroundColor: '#3750DD',
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
  },
  middleContainer: {
    flex: 0.13,
    padding: moderateScale(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: moderateScale(2),
    borderBlockStartColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
  },
  subHead: {
    color: '#FFFEFE',
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    fontWeight: '800',
    justifyContent: 'center',
  },
  sub: {
    color: 'rgba(30, 30, 30, 1)',
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
    justifyContent: 'center',
  },
  time: {
    color: 'rgba(30, 30, 30, 1)',
    fontSize: moderateScale(30),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
    alignSelf: 'center',
  },
  tutor: {
    color: '#949494',
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  subTime: {
    color: 'rgba(30, 30, 30, 1)',
    fontSize: moderateScale(12),
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    alignSelf: 'center',
  },
});

export default ScheduleStyle;
