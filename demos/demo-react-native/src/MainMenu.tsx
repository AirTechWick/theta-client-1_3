import React from 'react';
import {StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import {initialize} from 'theta-client-react-native';

const MainMenu = ({navigation}) => {
  const goTake = () => {
    navigation.navigate('take');
  };
  const goList = () => {
    navigation.navigate('list');
  };
  const goOptions = () => {
    navigation.navigate('options');
  }

  const goThetaModel = () => {
    navigation.navigate('model')
  }

  const goBitrateEcon = () => {
    navigation.navigate('econ')
  }

  React.useEffect(() => {
    async function init() {
      // const endpoint = 'https://fake-theta.vercel.app' 
      const endpoint = 'http://192.168.1.1'
      const config = {
        // clientMode: { // Client mode authentication settings
        //   username: 'THETAXX12345678',
        //   password: '12345678',
        // }
      }
      await initialize(endpoint, config);
    }
    init();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.buttonBack} onPress={goTake}>
        <Text style={styles.button}>Take a Photo</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonBack} onPress={goList}>
        <Text style={styles.button}>List Photos</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonBack} onPress={goOptions}>
        <Text style={styles.button}>Get Options</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonBack} onPress={goThetaModel}>
        <Text style={styles.button}>Get Theta Model</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonBack} onPress={goBitrateEcon}>
        <Text style={styles.button}>BitRate Econ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainMenu;
