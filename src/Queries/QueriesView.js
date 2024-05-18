import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import QueriesStyle from './QueriesStyle';

const QueriesView = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const sendMessage = () => {
    console.log(name, mobile, email, query);
  };

  return (
    <View style={QueriesStyle.container}>
      <Text style={QueriesStyle.title}>Get In Touch Today!</Text>
      <Text style={QueriesStyle.subtitle}>Your Gateway To Education Starts Here</Text>
      
      <View style={QueriesStyle.form}>
        <TextInput
          style={QueriesStyle.input}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={QueriesStyle.input}
          placeholder="Mobile"
          keyboardType="phone-pad"
          onChangeText={setMobile}
          value={mobile}
        />
        <TextInput
          style={QueriesStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={QueriesStyle.input}
          placeholder="Queries"
          onChangeText={setQuery}
          value={query}
          multiline
        />
        
        <TouchableOpacity style={QueriesStyle.button} onPress={sendMessage}>
          <Text style={QueriesStyle.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default QueriesView;
