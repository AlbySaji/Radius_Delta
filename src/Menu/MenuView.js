import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../Common/Component/HeaderComponent/Header';
import moderateScale from '../Common/Common.utils';
import MenuStyle from './MenuStyle';
import Navigation from '../Navigation/AppNavigation';
import {useNavigation} from '@react-navigation/native';
const MenuView = Navigation => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={MenuStyle.mainContainer}>
      {/* <Header
     
      /> */}
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Profile')}>
        <View>
          <Text style={MenuStyle.heading}>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Profile')}>
        <View>
          <Text style={MenuStyle.heading}>Attendance</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Schedule')}>
        <View>
          <Text style={MenuStyle.heading}>Schedule</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Fees')}>
        <View>
          <Text style={MenuStyle.heading}>Fees</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Result')}>
        <View>
          <Text style={MenuStyle.heading}>Exam Results</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Profile')}>
        <View>
          <Text style={MenuStyle.heading}>About us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuStyle.container}
        onPress={() => navigation.navigate('Profile')}>
        <View>
          <Text style={MenuStyle.heading}>Log out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuView;
