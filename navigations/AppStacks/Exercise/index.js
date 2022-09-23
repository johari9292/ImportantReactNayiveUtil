import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Videos from '../../../screens/Home/components/Videos';
import VideosList from '../../../screens/Home/components/VideosList';
import VideoExercise from '../../../screens/Exercise/';

const Stack = createNativeStackNavigator();

const Home = () => {
  const {Navigator, Screen} = Stack;
  useEffect(() => {}, []);
  return (
    <>
      <Navigator screenOptions={{}} defaultStatus="open">
        <Screen
          name="VideoExercise"
          component={VideoExercise}
          options={{
            title: 'Orders',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />

        <Screen
          name="VideoScreen"
          component={Videos}
          options={{
            title: '',
            headerBackTitle: '',
            headerTintColor: 'white',
            headerBackTitleStyle: {color: 'blue'},
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#73B843'},
            // headerShown: false,
          }}
        />

        <Screen
          name="VideosListScreen"
          component={VideosList}
          options={{
            title: 'Videos List',
            headerTitleAlign: 'center',
            headerBackTitle: 'Back',
            headerShown: false,
            // headerBackVisible: false,
            // headerShadowVisible: false,
          }}
        />
      </Navigator>
    </>
  );
};

export default Home;
