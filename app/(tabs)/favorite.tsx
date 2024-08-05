import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = Array.from({ length: 5 }, (_, index) => ({
  id: index.toString(),
  name: 'Назва ресторану',
  image: 'https://via.placeholder.com/320x135',
}));

export default function Favorite() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/favorite.png')} style={styles.resourceImage} />
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Шось улюблене</Text>
      </View>
      <ScrollView contentContainerStyle={styles.favoriteCards}>
        <View style={styles.cardsWrapper}>
          {data.map((item) => (
            <View key={item.id} style={styles.favoriteCard}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardRectangle}>
                <Text style={styles.cardName}>{item.name}</Text>
              </View>
              <TouchableOpacity style={styles.cardHeart}>
                <Image source={require('../../assets/icons/likeBg.png')} style={styles.heartIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF889D',
  },
  headerWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    marginTop:0
  },
  header: {
    fontFamily: 'Comfortaa',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 27,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  resourceImage: {
    width: 321,
    height: 176,
    marginTop: 20,
    alignSelf: 'center',
  },
  favoriteCards: {
    padding: 20,
  },
  cardsWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  favoriteCard: {
    position: 'relative',
    width: 320,
    height: 135,
    borderWidth: 2,
    borderColor: '#1835B6',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardRectangle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 35,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#1835B6',
    justifyContent: 'center',
    paddingLeft: 24,
  },
  cardName: {
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17,
    color: '#1835B6',
  },
  cardHeart: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 10,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
});
