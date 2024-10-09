import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; // For navigation
import backgroundImage from '../Images/BackgroundImage.jpg'; // Your background image path

const RepairScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Top Left Back Icon */}
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </TouchableOpacity>

      {/* Top Right Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('Home')}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>

      {/* Bottom Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Quality repair, fair pricing</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  skipText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjusted opacity for better visibility
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 600,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});

export default RepairScreen;
