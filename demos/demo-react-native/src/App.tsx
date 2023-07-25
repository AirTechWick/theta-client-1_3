import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './MainMenu';
import TakePhoto from './TakePhoto';
import ListPhotos from './ListPhotos';
import PhotoSphere from './PhotoSphere';
import GetOptions from './GetOptions';
import ThetaModel from './ThetaModel';
import BitrateEcon from './BitrateEcon';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#6200ee',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitle: '',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          options={{title: 'Theta SDK sample app 1.3'}}
          name="main"
          component={MainMenu}
        />
        <Stack.Screen
          options={{title: 'Get Options'}}
          name="options"
          component={GetOptions}
        />
        <Stack.Screen
          options={{title: 'Take Photo'}}
          name="take"
          component={TakePhoto}
        />
        <Stack.Screen
          options={{title: 'List Photos'}}
          name="list"
          component={ListPhotos}
        />
        <Stack.Screen
          options={{title: 'Sphere'}}
          name="sphere"
          component={PhotoSphere}
        />
        <Stack.Screen
          options={{title: 'Theta Model'}}
          name="model"
          component={ThetaModel}
        />
        <Stack.Screen
          options={{title: 'Bitrate Econ'}}
          name="econ"
          component={BitrateEcon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
