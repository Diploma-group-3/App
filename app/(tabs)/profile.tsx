import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={require('../../assets/icons/profilePhoto.png')} />
        </View>

        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>Єнот Полоскун</Text>
          <Text style={styles.profileSubtitle}>@enot</Text>
        </View>

        <TouchableOpacity
          style={styles.settingsIconContainer}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={require('../../assets/icons/profileSettings.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          {['Історія замовлень', 'Статистика', 'Банківські карти', 'Бали та промокоди', 'Благодійність'].map((text, index) => (
            <TouchableOpacity key={index} style={styles.vectorTextContainer}>
              <View style={styles.vector}></View>
              <Text style={styles.vectorText}>{text}</Text>
              <View style={styles.arrow}></View>
            </TouchableOpacity>
          ))}
        </View>

        <Image source={require('../../assets/images/profile.png')} style={styles.resourceImage} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },
  header: {
    width: '100%',
    height: 160,
    backgroundColor: '#18D6AA',
    borderColor: '#1835B6',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 32,
    borderColor: '#1835B6',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  profileInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  profileName: {
    fontFamily: 'Comfortaa',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  profileSubtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
  },
  settingsIconContainer: {
    width: 37,
    height: 37,
    marginRight: '7%',
    marginTop: "-6%",
  },
  settingsIcon: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  contentContainer: {
    marginTop: 40,
    paddingHorizontal: '5%',
  },
  vectorTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  vector: {
    width: 25,
    height: 25,
    backgroundColor: '#FF889D',
    borderRadius: 5,
    marginRight: 20,
  },
  vectorText: {
    fontFamily: 'Comfortaa',
    fontSize: 20,
    color: '#1835B6',
    fontWeight: '400',
    fontStyle: 'normal',
    flex: 1,
  },
  arrow: {
    width: 13,
    height: 13,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 0,
    borderColor: '#1835B6',
    borderLeftWidth: 0,
    transform: [{ rotate: '45deg' }],
    marginLeft: 10,
    position: 'relative',
  },
  resourceImage: {
    width: 231,
    height: 198,
    position: 'absolute',
    bottom: 20,
    right: 20,
    marginBottom: 0,
    marginRight: 0,
  },
});
