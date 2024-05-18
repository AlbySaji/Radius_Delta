import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import moderateScale from '../Common/Common.utils';
import ResultStyle from './ResultsStyle';
//import Arrow from '../../Assets/Images/arrow.svg';

const ResultView = () => {
  return (
    <SafeAreaView style={ResultStyle.mainContainer}>
      <View style={ResultStyle.container}>
        <Text style={ResultStyle.heading}>Exam Results</Text>
        <Text
          style={[
            ResultStyle.bottomHead,
            {alignSelf: 'flex-start', marginTop: 18},
          ]}>
          Exam Name/ Date
        </Text>
        <View style={ResultStyle.SubView}>
          <TouchableOpacity>
            <View style={ResultStyle.detail}>
              <Text style={ResultStyle.subHead}>Subject</Text>
              <View style={{flexDirection: 'row', marginRight: 66}}>
                <Text style={ResultStyle.subHead}>Marks</Text>

                {/* <Arrow width={20} height={20}/> */}
              </View>
            </View>
          </TouchableOpacity>
          <View style={ResultStyle.bottomDetail}>
            <Text style={ResultStyle.bottomHead}>Maths</Text>
            <View style={{flexDirection: 'row', marginRight: 80}}>
              <Text style={ResultStyle.bottomPay}>00</Text>

              {/* <Arrow width={20} height={20}/> */}
            </View>
          </View>
          <View style={ResultStyle.bottomDetail}>
            <Text style={ResultStyle.bottomHead}>Physics</Text>
            <View style={{flexDirection: 'row', marginRight: 80}}>
              <Text style={ResultStyle.bottomPay}>00</Text>

              {/* <Arrow width={20} height={20}/> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultView;
