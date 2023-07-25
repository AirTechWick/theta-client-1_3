import React, {useEffect, useState} from 'react';
import {
  Text, TouchableOpacity, SafeAreaView,
} from 'react-native';
import styles from './Styles';
import { BitrateEnum, setOptions, Options } from 'theta-client-react-native';

const BitrateEcon = ({ navigation }) => {
  const [isItSuccess, setIsItSuccess] = useState([]);

  useEffect(() => {
    const setWantedOptions = async () => {
      let options: Options = {};

      // setting the option bitrate to Economy
      options.bitrate = 1048576;
    
      // Using setOptions function to execute wanted changes
      const results = (await setOptions(options))
           
      setIsItSuccess(String(results));
      
    };

    setWantedOptions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonBack}>
        <Text style={styles.button}>{isItSuccess}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BitrateEcon;