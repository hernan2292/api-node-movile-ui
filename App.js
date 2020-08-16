import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './views/Home'
import DetailsEntity from './views/DetailsEntity'
import NewEntity from './views/NewEntity'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="NewEntity"
            component={NewEntity}
            options={{
              title:"New Entity"
            }}
          />
          <Stack.Screen
            name="DetailsEntity"
            component={DetailsEntity}
            options={{
              title:"Details Entity"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
