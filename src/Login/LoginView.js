import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import LoginStyle from './Loginstyle';
import Navigation from '../Navigation/AppNavigation';
import {useNavigation} from '@react-navigation/native';

const LoginView = ({Navigation}) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  return (
    <View style={LoginStyle.container}>
      <Text style={LoginStyle.title}>Sign In For Knowledge!</Text>
      <Text style={LoginStyle.subtitle}>
        Welcome Back, You Have Been Missed!
      </Text>

      <TextInput
        style={LoginStyle.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />

      <View style={LoginStyle.passwordContainer}>
        <TextInput
          style={LoginStyle.input}
          placeholder="Password"
          secureTextEntry={passwordVisibility}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={LoginStyle.eyeButton}
          onPress={() => setPasswordVisibility(!passwordVisibility)}>
          {/* Here, you can add your eye icon component */}
        </TouchableOpacity>
      </View>

      <Text style={LoginStyle.forgotPassword}>Forgot Password?</Text>

      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={LoginStyle.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Queries')}>
        <Text style={LoginStyle.newHere}>New Here? Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
