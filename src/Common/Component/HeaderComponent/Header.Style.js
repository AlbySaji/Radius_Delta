import React from 'react';
import {moderateScale} from '../../Common.utils';
import {StyleSheet} from 'react-native';
const HeaderStyle = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 10,
  },
  backArrow: {
    flex: 0.3,
    //height: 82,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 0.8,
    height: 82,

    justifyContent: 'center',
    alignItems: 'center',
  },

  referehIcon: {
    flex: 0.3,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invoiceHistoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 600,
    fontSize: moderateScale(15),
    color: '#1A1D1E',
  },
  backArrowStyle: {
    height: moderateScale(45),
    width: moderateScale(45),
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: moderateScale(18),
  },
});
export default HeaderStyle;
