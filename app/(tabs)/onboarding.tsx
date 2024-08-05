import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Привіт! Хочеш</Text>
      <Text style={styles.highlightText}>Шось смачненьке?</Text>
      <Image source={require('../../assets/images/onBoarding.png')} style={styles.image} />
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.primaryButtonText}>Вхід</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>або</Text>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.secondaryButtonText}>Увійти як гість</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2846C9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 30,
    color: '#FFD84B',
    textAlign: 'center',
    marginBottom: 5,
  },
  highlightText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 296,
    height: 279,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  primaryButton: {
    width: 280,
    height: 50,
    backgroundColor: '#FFD84B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    color: '#2846C9',
  },
  orText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: '#53B7FA',
    textAlign: 'center',
    marginVertical: 10,
  },
  secondaryButton: {
    width: 280,
    height: 50,
    backgroundColor: '#A2D6F9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 20,
    color: '#2846C9',
  },
});

export default OnboardingScreen;
