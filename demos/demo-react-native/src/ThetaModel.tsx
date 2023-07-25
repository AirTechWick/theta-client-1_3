import React, {useEffect, useState} from 'react';
import {
  Text, TouchableOpacity,
} from 'react-native';

import {
  getThetaModel,
} from 'theta-client-react-native';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThetaModel = ({ navigation }) => {
  const [thetaModel, setThetaModel] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const result = await getThetaModel();
      setThetaModel(result);
    };

    fetchOptions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.buttonBack}>
      <Text style={styles.button}>{thetaModel}</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThetaModel;