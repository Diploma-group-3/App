import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ToggleButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isListSelected = route.name === 'Search';

  const handlePress = (isList) => {
    navigation.navigate(isList ? 'Search' : 'Map');
  };

  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[styles.toggleButton, isListSelected && styles.selectedButton]}
        onPress={() => handlePress(true)}
      >
        <Text style={[styles.toggleButtonText, isListSelected && styles.selectedButtonText]}>Перелік</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.toggleButton, !isListSelected && styles.selectedButton]}
        onPress={() => handlePress(false)}
      >
        <Text style={[styles.toggleButtonText, !isListSelected && styles.selectedButtonText]}>Мапа</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 320,
    height: 43,
    flexDirection: 'row',
    borderRadius: 21.5,
    borderWidth: 1,
    borderColor: '#1835B6',
    backgroundColor: '#FF889D',
    overflow: 'hidden',
    marginBottom:-40,
    alignSelf: 'center',
  },
  toggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    borderColor: '#1835B6',
    borderWidth: 1,
  },
  toggleButtonText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: '#FFF0ED',
  },
  selectedButtonText: {
    fontWeight: '700',
    color: '#1835B6',
  },
});

export default ToggleButton;
