import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Місто');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/register.png')} style={styles.headerImage} />
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.text}>Вже є обліковий запис? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.underlineContainer}>
            <Text style={styles.underlineText}>Вхід</Text>
            <View style={styles.underline} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
          <Text style={styles.cityText}>{selectedCity}</Text>
          <Image source={require('../../assets/icons/vector.png')} style={styles.vector} />
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownList}>
            <TouchableOpacity onPress={() => selectCity('Київ')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Київ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('Львів')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Львів</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('Одеса')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Одеса</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('Харків')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Харків</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('Дніпро')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Дніпро</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.input}>
          <TextInput placeholder="Ім'я" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Прізвище" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Email" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Пароль" style={styles.inputText} secureTextEntry={true} />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Diet')}>
        <Text style={styles.primaryButtonText}>Реєстрація</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.linkButton}>
        <Text style={styles.skip}>Пропустити</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 242.5,
    height: 130.11,
  },
  title: {
    fontFamily: 'Comfortaa',
    fontSize: 32,
    fontWeight: '700',
    color: '#FFD84B',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontWeight: '400',
    color: '#2846C9',
  },
  underlineContainer: {
    position: 'relative',
  },
  underlineText: {
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontWeight: '400',
    color: '#2846C9',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#2846C9',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 13,
    width: 280,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#A2D6F9',
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 1,
    marginBottom: 10,
  },
  cityText: {
    fontSize: 20,
    color: '#53B7FA',
  },
  vector: {
    width: 21.49,
    height: 10,
  },
  dropdownList: {
    position: 'absolute',
    top: 45,
    width: 280,
    backgroundColor: '#FFFFFF',
    borderColor: '#A2D6F9',
    borderWidth: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: 2,
  },
  dropdownItem: {
    padding: 5,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
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
    backgroundColor: '#FFD84B',
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
  linkButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skip: {
    fontFamily: 'Comfortaa',
    color: '#53B7FA',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RegisterScreen;
