import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Svg from 'react-native-svg';
import ToggleButton from '../ToggleButton';

const SearchScreen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Київ');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Шось смачненьке</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.selectedCityText}>{selectedCity}</Text>
          <Image
            style={styles.dropdownIcon}
            source={require('../../assets/icons/vector2.png')}
          />
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownList}>
            <TouchableOpacity onPress={() => selectCity('КИЇВ')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Київ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('ЛЬВІВ')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Львів</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('ОДЕСА')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Одеса</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('ХАРКІВ')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Харків</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectCity('ДНІПРО')} style={styles.dropdownItem}>
              <Text style={styles.cityText}>Дніпро</Text>
            </TouchableOpacity>
          </View>
        )}
        <TextInput placeholder="Пошук" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterBtn}>
          <Image source={require('../../assets/icons/settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartBtn}>
          <Svg height="100" width="100" viewBox="0 0 370 370" fill="none">
            <path
              d="M0.999999 28.3204 L0.999992 183.5 C0.999988 284.312 82.6879 366 183.5 366 C284.312 366 366 284.312 366 183.5 C366 82.6879 284.312 1.00001 183.5 1.00001 L0 1 C0 1 0.999999 13.2942 0.999999 28.3204Z"
              stroke="#1835B6"
              strokeWidth="3"
              strokeLinejoin="round"
              fill="white"
              transform="scale(-1, 1) translate(-367, 0)"
            />
          </Svg>
          <Image style={styles.cartIcon} source={require('../../assets/icons/cart.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}>
      <View style={styles.toggleWrapper}>
        <ToggleButton />
        </View>
        <View style={styles.cards}>
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.photoBox}>
                <Image source={{ uri: 'https://via.placeholder.com/320x128' }} style={styles.image} />
              </View>
              <View style={styles.bgCard}>
                <View style={styles.icons}>
                  <View style={styles.stars}>
                    <Image source={require('../../assets/icons/star.png')} style={styles.star} />
                    <Text style={styles.starText}>5.0</Text>
                  </View>
                  <View style={styles.locations}>
                    <Image source={require('../../assets/icons/location.png')} style={styles.location} />
                    <Text style={styles.locationText}>250m</Text>
                  </View>
                </View>
                <Text style={styles.restaurantName}>Назва ресторану</Text>
                <View style={styles.timeText}>
                  <Text style={styles.pickupText}>Забрати: сьогодні 17:00-18:00</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },
  header: {
    width: '100%',
    height: 200,
    borderBottomWidth: 2,
    borderColor: '#2846C9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FFB7B7',
    zIndex: 1,
  },
  headerText: {
    position: 'absolute',
    top: '24.93%',
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 27,
    color: '#1835B6',
    left: '8%',
  },
  dropdownButton: {
    position: 'absolute',
    top: '45%',
    left: '6%',
    width: 150,
    height: 40,
    backgroundColor: '#FFB7B7',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCityText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 18,
    color: '#FFFFFF',
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  dropdownIcon: {
    width: 22,
    height: 9.5,
  },
  dropdownList: {
    position: 'absolute',
    top: '60%',
    left: '6%',
    width: 150,
    backgroundColor: '#FFB7B7',
    borderRadius: 5,
    zIndex: 1,
    paddingVertical: 5,
    maxHeight: 200,
  },
  dropdownItem: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  cityText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: -5,
  },
  searchInput: {
    position: 'absolute',
    width: '70%',
    top: '71.43%',
    height: 34,
    borderWidth: 1,
    borderColor: '#1835B6',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    color: '#1835B6',
    left: '8%',
    paddingLeft: 10,
  },
  filterBtn: {
    position: 'absolute',
    width: 42,
    height: 34,
    right: '5%',
    top: '71.43%',
    borderWidth: 1,
    borderColor: '#1835B6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  cartBtn: {
    position: 'absolute',
    width: 85,
    height: 85,
    right: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
  },
  recommendedText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    color: '#1835B6',
    textAlign: 'left',
    left: '8%',
    marginTop: 10,
    marginBottom: 5,
  },
  cards: {
    alignItems: 'center',

  },
  card: {
    width: 320,
    height: 200,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  photoBox: {
    width: '100%',
    height: 126,
    backgroundColor: '#5E5E5E',
    borderWidth: 2,
    borderColor: '#1835B6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgCard: {
    width: '100%',
    height: 85,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#1835B6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'flex-start',
    padding: 10,
  },
  icons: {
    position: 'absolute',
    width: 84,
    height: 83.5,
    top: 0,
    right: 0,
    backgroundColor: '#FF889D',
    borderWidth: 2,
    borderColor: '#1835B6',
    borderBottomRightRadius: 20,
    borderRightWidth: 0,
    borderTopWidth: 0,
    padding: 10,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  star: {
    width: 15,
    height: 15,
  },
  starText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    color: '#ffffff',
    marginLeft: 5,
    marginTop: 2,
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  location: {
    width: 15,
    height: 15,
  },
  locationText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 14,
    color: '#ffffff',
    marginTop: 2,
    marginLeft: 5,
  },
  timeText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 30,
    borderColor: '#18D6AA',
    borderWidth: 3,
    padding: 5,
  },
  pickupText: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    color: '#3D3D3D',
  },
  restaurantName: {
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: '#3D3D3D',
    marginVertical: 5,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  toggleWrapper: {
    alignItems: 'center',
    marginVertical: 10,
    marginBottom:50,
  },
});

export default SearchScreen;
