import React from 'react';
import {TouchableOpacity, SafeAreaView, View, Text, Image} from 'react-native';
import ProfileStyle from './ProfileStyle';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../Common/Common.utils';
// import MenuIcon from "../../Assets/Images/Hamsberg.svg"

const ProfileView = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={ProfileStyle.mainContainer}>
      <View style={ProfileStyle.container}>
        <View style={ProfileStyle.innerContainer}>
          <Text style={ProfileStyle.heading}>Profile</Text>
        </View>
        <View style={ProfileStyle.middleContainer}>
          <View style={ProfileStyle.imageView}></View>
        </View>
        <View style={ProfileStyle.lastContainer}>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Name</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>Qwerty</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Admission ID</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>ASDFG213</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Email</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>Qwerty@gmail.com</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Phone</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>1234567890</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Batch</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>5</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Branch</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>2022</Text>
            </View>
          </View>
          <View style={ProfileStyle.division}>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoLabel}>Address</Text>
            </View>
            <View style={ProfileStyle.subView}>
              <Text style={ProfileStyle.infoContent}>Qffdf p.o, Ernakulam</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileView;

// <Text style={ProfileStyle.infoLabel}>Name</Text>
//         <Text style={ProfileStyle.infoContent}>Qwerty</Text>
//         <Text style={ProfileStyle.infoLabel}>Admission ID</Text>
//         <Text style={ProfileStyle.infoContent}>D87556</Text>
//         <Text style={ProfileStyle.infoLabel}>Email</Text>
//         <Text style={ProfileStyle.infoContent}>Qwerty@gmail.com</Text>
//         <Text style={ProfileStyle.infoLabel}></Text>
//         <Text style={ProfileStyle.infoContent}>Phone1234567890</Text>
//         <Text style={ProfileStyle.infoLabel}>Batch</Text>
//         <Text style={ProfileStyle.infoContent}>5</Text>
//         <Text style={ProfileStyle.infoLabel}>Branch</Text>
//         <Text style={ProfileStyle.infoContent}>2022</Text>
//         <Text style={ProfileStyle.infoLabel}>Address</Text>
//         <Text style={ProfileStyle.infoContent}>Qwert St., RTY Po 682552</Text>
