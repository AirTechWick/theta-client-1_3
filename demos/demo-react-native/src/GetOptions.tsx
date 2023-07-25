import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  OptionNameEnum,
  getOptions,
} from 'theta-client-react-native';
import styles from './Styles';

const GetOptions = ({ navigation }) => {
  const [optionNames, setOptionNamesReact] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const result = await getOptions([
        OptionNameEnum.AiAutoThumbnail,
        OptionNameEnum.Bitrate,
        OptionNameEnum.CaptureInterval,
        OptionNameEnum.CaptureMode,
        OptionNameEnum.CaptureNumber,
      ]);

      setOptionNamesReact(JSON.stringify(result, null, 4));
    };

    fetchOptions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonBack}>
        <Text style={styles.button}>{optionNames}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GetOptions;