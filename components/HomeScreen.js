import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service'; // Import Geolocation service
import Icon from 'react-native-vector-icons/Ionicons';
import Notification from '../Images/Notification.png';
import BookingDetail from '../Images/Trackoder2.png';
import Support from '../Images/Support.png';
import GPS from '../Images/Location.png';
import UpcomingBooking from '../Images/DeliveryGPS.png';
import LiveJobs from '../Images/GPS.png';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

  // Use useCallback to memoize the function
  const requestLocationPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }, []); // Empty dependency array ensures it's only created once

  // Function to get current location
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log('Current Location:', position.coords);
      },
      (error) => {
        // Handle location error
        Alert.alert('Error', 'Unable to fetch location. Make sure location services are enabled.');
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Request location when component mounts
  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]); // requestLocationPermission as a dependency

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi Jay!</Text>
          <Text style={styles.location}>
            📍 {location ? `Lat: ${location.latitude}, Long: ${location.longitude}` : 'Fetching location...'}
          </Text>
          <View style={styles.iconContainer}>
            <Icon name="cart-outline" size={25} color="black" />
            <Icon name="notifications-outline" size={25} color="black" style={styles.icon} />
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={Notification} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={BookingDetail} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Booking Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={Support} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={GPS} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>GPS </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={UpcomingBooking} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Upcoming Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={LiveJobs} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Current/Live Jobs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 17,
  },
  topSection: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  buttonSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionButton: {
    backgroundColor: '#54a3da',
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 80,
    height: 70,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
