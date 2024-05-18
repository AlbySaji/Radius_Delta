import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import HeaderStyle from './Header.Style';

import {useRoute} from '@react-navigation/native';
const Header = ({title, onPress}) => {
  // const route = useRoute();

  return (
    <View style={HeaderStyle.headerContainer}>
      <View style={HeaderStyle.backArrow}>
        <TouchableOpacity style={HeaderStyle.backArrowStyle}>
          <Text>0</Text>
        </TouchableOpacity>
      </View>
      <View style={HeaderStyle.headerText}>
        <Text style={HeaderStyle.invoiceHistoryText}>{title}</Text>
      </View>
      <View style={HeaderStyle.referehIcon}>
        {/* {route.name === 'Home' ? <Text>8</Text> : null} */}
      </View>
    </View>
  );
};
export default Header;
