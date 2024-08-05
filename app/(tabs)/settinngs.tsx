import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfileScreen({ navigation }) {
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Стать');

  const toggleGenderDropdown = () => {
    setGenderDropdownOpen(!genderDropdownOpen);
  };

  const selectGender = (gender) => {
    setSelectedGender(gender);
    setGenderDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />
      <View style={styles.avatar}>
        <Image source={require('../../assets/icons/bigProfile.png')} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Єнот Полоскун</Text>
        <View style={styles.line} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Ім'я</Text>
          <TextInput style={styles.input} placeholder="Введіть ваше ім'я" placeholderTextColor="#53B7FA" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Прізвище</Text>
          <TextInput style={styles.input} placeholder="Введіть ваше прізвище" placeholderTextColor="#53B7FA" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Дата</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>ДД/MM/ГГГГ</Text>
            <Image source={require('../../assets/icons/vector.png')} style={styles.vector} />
          </TouchableOpacity>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Стать</Text>
          <TouchableOpacity onPress={toggleGenderDropdown} style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedGender}</Text>
            <Image source={require('../../assets/icons/vector.png')} style={styles.vector} />
          </TouchableOpacity>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Ім’я користувача</Text>
          <TextInput style={styles.input} placeholder="Введіть ім’я користувача" placeholderTextColor="#53B7FA" />
        </View>
        <Text style={styles.note}>Змінювати можна лише один раз на 30 днів</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonBorder} />
          <Image source={require('../../assets/icons/back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Зберегти</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerBackground: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    backgroundColor: '#2846C9',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: 0,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    backgroundColor: '#FF889D',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 0,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderColor: '#1835B6',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    position: 'absolute',
  },
  headerText: {
    fontFamily: 'Comfortaa',
    fontSize: 20,
    color: '#7E7E7E',
    marginTop: 20,
  },
  line: {
    width: '85%',
    height: 2,
    backgroundColor: '#1835B6',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  formContainer: {
    width: 320,
    height: '80%',
    backgroundColor: '#FFFFFF',
    borderColor: '#1835B6',
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: '20%',
  },
  formGroup: {
    width: '85%',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Comfortaa',
    fontSize: 14,
    color: '#A3A3A3',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#53B7FA',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    fontFamily: 'Comfortaa',
    fontSize: 16,
    color: '#53B7FA',
  },
  note: {
    fontFamily: 'Comfortaa',
    fontSize: 10,
    color: '#7E7E7E',
    textAlign: 'center',
    marginTop: -10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    zIndex: 1,
  },
  primaryButton: {
    width: 235,
    height: 50,
    backgroundColor: '#FFD84B',
    borderColor: '#1835B6',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  primaryButtonText: {
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#2846C9',
  },
  backButton: {
    width: 65,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderColor: '#1835B6',
    borderWidth: 2,
    borderRadius: 51,
  },
  dropdown: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#53B7FA',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dropdownText: {
    fontFamily: 'Comfortaa',
    fontSize: 16,
    color: '#53B7FA',
    flex: 2,
  },
  vector: {
    width: 21.49,
    height: 10,
  },
  dropdownList: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#53B7FA',
    borderWidth: 2,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginTop: 57,
    zIndex:3,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#53B7FA',
  },
  dropdownItemText: {
    fontFamily: 'Comfortaa',
    fontSize: 16,
    color: '#53B7FA',
  },
});
