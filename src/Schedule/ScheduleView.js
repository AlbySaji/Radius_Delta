import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import moderateScale from '../Common/Common.utils';
import ScheduleStyle from './ScheduleStyle';

const ScheduleView = () => {
  return (
    <SafeAreaView style={ScheduleStyle.mainContainer}>
      <View style={ScheduleStyle.container}>
        <Text style={ScheduleStyle.heading}>Schedule</Text>
        <View style={ScheduleStyle.topContainer}>
          <View style={ScheduleStyle.headContainer}>
            <Text style={ScheduleStyle.subHead}>Today</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={ScheduleStyle.subHead}>******</Text>
            </View>
          </View>

          <View style={ScheduleStyle.middleContainer}>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.sub}>Subject</Text>

              <Text style={ScheduleStyle.tutor}>Tutor Name</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.time}>FN</Text>
              <Text style={ScheduleStyle.subTime}>Time</Text>
            </View>
          </View>
          <View style={ScheduleStyle.middleContainer}>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.sub}>Subject</Text>

              <Text style={ScheduleStyle.tutor}>Tutor Name</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.time}>AN</Text>
              <Text style={ScheduleStyle.subTime}>Time</Text>
            </View>
          </View>
          <View style={ScheduleStyle.middleContainer}>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.sub}>Subject</Text>

              <Text style={ScheduleStyle.tutor}>Tutor Name</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={ScheduleStyle.time}>-</Text>
              <Text style={ScheduleStyle.subTime}>Time</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleView;
