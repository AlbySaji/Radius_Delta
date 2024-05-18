import {StyleSheet} from 'react-native';
import {moderateScale} from '../Common/Common.utils';
export const ProfileStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: moderateScale(18),
  },

  container: {
    flex: 1,
    backgroundColor: '#3750DD',

    borderRadius: moderateScale(20),
  },
  imageView: {
    backgroundColor: 'white',
    padding: moderateScale(15),
    width: moderateScale(180),
    height: moderateScale(180),
    borderRadius: moderateScale(15),
  },
  middleContainer: {
    marginVertical: moderateScale(15),
    // backgroundColor: 'red',
    flex: 0.28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {flex: 0.5, marginLeft: moderateScale(35)},
  lastContainer: {
    //backgroundColor: 'black',
    flex: 0.67,
    paddingTop: moderateScale(50),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  division: {
    flexDirection: 'row',
    flex: 0.13,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#3750DD',
    flex: 0.05,
    borderRadius: moderateScale(20),
    elevation: moderateScale(10),
    shadowOpacity: moderateScale(34),
    shadowColor: 'black',
    padding: moderateScale(13),
  },
  heading: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0047AB', // Adjusted to a darker blue
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
    // Add additional styling for your icon button if needed
  },
  photoContainer: {
    backgroundColor: '#0047AB', // Same as header for a unified look
    paddingBottom: 10,
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    marginTop: -50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#0000ff', // Placeholder color
  },
  infoContainer: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  infoContent: {
    fontSize: 16,
    color: '#FFFFFF',

    alignSelf: 'flex-start',
  },
});

export default ProfileStyle;
