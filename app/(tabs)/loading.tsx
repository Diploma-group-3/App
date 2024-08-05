import React, { useEffect, useState } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';

const imageUrl = require('../../assets/images/loading.png');
const imageUrl2 = require('../../assets/images/loading2.png');

const LoadingScreen = ({ navigation }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const rotateValue = new Animated.Value(0);
  const [containerBackgroundColor] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    Animated.timing(containerBackgroundColor, {
      toValue: showSecondImage ? 1 : 0,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    if (showSecondImage) {
      Animated.sequence([
        Animated.timing(rotateValue, {
          toValue: 0.25,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.delay(100),
        Animated.timing(rotateValue, {
          toValue: 0.5,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.delay(100),
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ]).start(() => {
        navigation.navigate('OnBoarding');
      });
    }
  }, [showSecondImage, navigation]);


  const backgroundColor = containerBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#747474', '#ffffff'],
  });

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      {!showSecondImage ? (
        <View style={styles.firstImageContainer}>
          <Image source={imageUrl} style={styles.firstImage} />
        </View>
      ) : (
        <Animated.Image
          source={imageUrl2}
          style={[styles.image, { transform: [{ rotate }] }]}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImageContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 32,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImage: {
    width: 140,
    height: 140,
  },
  image: {
    width: 241,
    height: 250,
  },
});

export default LoadingScreen;
