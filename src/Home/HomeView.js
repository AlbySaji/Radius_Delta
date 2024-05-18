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
import HomeStyle from './HomeStyle';
import Navigation from '../Navigation/AppNavigation';
import {useNavigation} from '@react-navigation/native';
const HomeView = Navigation => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={HomeStyle.mainContainer}>
      {/* <Header
     
      /> */}
      <View style={HomeStyle.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={HomeStyle.subHeading}>Click here!</Text>
        </TouchableOpacity>
      </View>
      <View style={HomeStyle.topContainer}>
        <Text style={HomeStyle.heading}>Your Attention, Please</Text>
        <Text style={HomeStyle.subHeading}>New Notifications Available!</Text>
      </View>

      <View style={HomeStyle.container}></View>
      <View style={HomeStyle.container}></View>
      <View style={HomeStyle.container}></View>
    </SafeAreaView>
  );
};

export default HomeView;
