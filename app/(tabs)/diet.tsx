import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const HexagonButton = ({ onPress, text, isSelected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, isSelected]}>
    <Svg width="85" height="96" viewBox="0 0 100 115">
      <Polygon
        points="50,5 95,30 95,85 50,110 5,85 5,30"
        fill={isSelected ? '#FFD84B' : '#FFFFFF'}
        stroke="#FFD84B"
        strokeWidth="3"
      />
    </Svg>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const DietScreen = ({ navigation }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
    const handlePress = (filter: string) => {
      setSelectedFilters((prevFilters) =>
        prevFilters.includes(filter)
          ? prevFilters.filter((item) => item !== filter)
          : [...prevFilters, filter]
      );
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Чи є у Вас{"\n"}харчові вподобання?</Text>
      <Text style={styles.subtitle}>*алергени та інші обмеження можна вказати в коментарі до замовлення</Text>
      
      <Image source={require('../../assets/images/diet.png')} style={styles.illustration} />
      
      <View style={styles.dietButtons}>
        <View style={styles.row}>
          <HexagonButton
            text="Без          м’яса"
            onPress={() => handlePress('Без м’яса')}
            isSelected={selectedFilters.includes('Без м’яса')}
            
          />
          <HexagonButton
            text="Без лактози"
            onPress={() => handlePress('Без лактози')}
            isSelected={selectedFilters.includes('Без лактози')}
          />
          <HexagonButton
            text="Без глютену"
            onPress={() => handlePress('Без глютену')}
            isSelected={selectedFilters.includes('Без глютену')}
          />
        </View>
        <View style={styles.centeredRow}>
          <HexagonButton
            text="Веган"
            onPress={() => handlePress('Веган')}
            isSelected={selectedFilters.includes('Веган')}
          />
          <HexagonButton
            text="Діабет"
            onPress={() => handlePress('Діабет')}
            isSelected={selectedFilters.includes('Діабет')}
          />
        </View>
        <View style={styles.singleButtonRow}>
          <HexagonButton
            text="Без       горіхів"
            onPress={() => handlePress('Без горіхів')}
            isSelected={selectedFilters.includes('Без горіхів')}
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => {
        console.log("Selected filters:", selectedFilters), navigation.navigate('Main') ;
      }}>
        <Text style={styles.primaryButtonText}>Продовжити</Text>
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
    marginTop: 40,
    width: 280,
    height: 65,
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 27,
    textAlign: 'center',
    color: '#2846C9',
  },
  subtitle: {
    marginTop: 10,
    width: 280,
    height: 40,
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 14,
    textAlign: 'center',
    color: '#2846C9',
  },
  illustration: {
    width: 245,
    height: 127.81,
    marginTop: 20,
  },
  dietButtons: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -20,
    width: 280,
    maxWidth: '100%',
  },
  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -20,
    marginLeft: 0,
    width: 280,
    maxWidth: '100%',
  },
  singleButtonRow: {
    alignItems: 'center',
    marginBottom: 10,
    width: 280,
  },
  button: {
    width: 85,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleButton: {
    marginRight: 0,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 14,
    textAlign: 'center',
    color: '#535353',
  },
  primaryButton: {
    marginTop: 20,
    width: 280,
    height: 50,
    backgroundColor: '#18D6AA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#2846C9',
  },
});

export default DietScreen;
