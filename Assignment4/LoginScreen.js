import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply for a job now!</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or continue with</Text>
      <View style={styles.iconContainer}>
        <Image source={require('./assets/apple.png')} style={styles.icon} />
        <Image source={require('./assets/google.png')} style={styles.icon} />
        <Image source={require('./assets/facebook.png')} style={styles.icon} />
      </View>
      <Text style={styles.register}>Do not have an account? <Text style={styles.registerLink}>SignUp</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F80ED',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10,
  },
  subtitle: {
    fontSize: 13,
    color: '#828282',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2F80ED',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  or: {
    fontSize: 16,
    color: '#828282',
    marginVertical: 15,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
  register: {
    fontSize: 16,
    color: '#828282',
  },
  registerLink: {
    color: '#2F80ED',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
