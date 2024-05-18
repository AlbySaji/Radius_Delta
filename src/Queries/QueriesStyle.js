import { StyleSheet } from "react-native";
 
 
 export const QueriesStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003366',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 20,
    },
    form: {
      width: '100%',
      backgroundColor: '#0055ff',
      borderRadius: 10,
      padding: 20,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#003366',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default QueriesStyle