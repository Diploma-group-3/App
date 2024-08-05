import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вхід</Text>
      <Text style={styles.noAccount}>Немає облікового запису?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Зареєструйтесь</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput placeholder="Email" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Password" style={styles.inputText} secureTextEntry={true} />
        </View>
      </View>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Вхід</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Увійти через:</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/google.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/facebook.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/apple.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.linkButton}>
        <Text style={styles.skip}>Пропустити</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Comfortaa',
    fontSize: 32,
    fontWeight: '700',
    color: '#18D6AA',
    textAlign: 'center',
    marginBottom: 20,
  },
  noAccount: {
    fontFamily: 'Comfortaa',
    color: '#1835B6',
    fontSize: 16,
    textAlign: 'center',
  },
  register: {
    fontFamily: 'Comfortaa',
    color: '#2846C9',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 5,
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 0,
  },
  input: {
    width: 280,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#A2D6F9',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    color: '#53B7FA',
  },
  primaryButton: {
    width: 280,
    height: 50,
    backgroundColor: '#18D6AA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#2846C9',
    fontSize: 20,
    fontWeight: '700',
  },
  socialContainer: {
    width: 280,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  socialText: {
    fontFamily: 'Comfortaa',
    color: '#2846C9',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  socialButton: {
    width: 55,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderColor: '#A2D6F9',
    borderWidth: 3,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  linkButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skip: {
    fontFamily: 'Comfortaa',
    color: '#53B7FA',
    fontSize: 14,
    textAlign: 'right',
  },
});

export default LoginScreen;
