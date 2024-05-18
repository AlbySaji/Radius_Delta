import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import moderateScale from '../Common/Common.utils';
import FeesStyle from './FeesStyle';
//import Arrow from '../../Assets/Images/Arrow.svg';

const FeesView = () => {
  return (
    <SafeAreaView style={FeesStyle.mainContainer}>
      <View style={FeesStyle.container}>
        <Text style={FeesStyle.heading}>Fees</Text>
        <View style={FeesStyle.SubView}>
          <TouchableOpacity>
            <View style={FeesStyle.detail}>
              <Text style={FeesStyle.subHead}>Month</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={FeesStyle.pay}>Pay</Text>

                {/* <Arrow width={20} height={20} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <View style={FeesStyle.bottomDetail}>
            <Text style={FeesStyle.bottomHead}>Rs. 10,000 /-</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={FeesStyle.bottomPay}>Due on 00-00-0000</Text>

              {/* <Arrow width={20} height={20}/> */}
            </View>
          </View>
        </View>
        <View style={FeesStyle.SubView}>
          <View style={FeesStyle.bottomDetail}>
            <Text style={FeesStyle.bottomHead}>Month</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={FeesStyle.paid}>Paid</Text>

              {/* <Arrow width={20} height={20}/> */}
            </View>
          </View>
          <View style={FeesStyle.divider}></View>
          <View style={FeesStyle.bottomDetail}>
            <Text style={FeesStyle.bottomHead}>Rs. 10,000 /-</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={FeesStyle.bottomPay}>Paid on 00-00-0000</Text>

              {/* <Arrow width={20} height={20}/> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeesView;
