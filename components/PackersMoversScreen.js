import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../Images/logo.png'

const PackersMoversScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Repair'); 
    }, 2000); 
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Packers & Movers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54a3da', 
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 80,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default PackersMoversScreen;
