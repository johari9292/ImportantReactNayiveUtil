import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import CutOut from '../../../screens/CrushMyCraving/Challenge/CutOut';
import CutOutDetails from '../../../screens/CrushMyCraving/Challenge/CutOutDetails';
import CrushMyCraving from '../../../screens/CrushMyCraving/index';
import GeneralScreen from '../../../screens/CrushMyCraving/components/GeneralScreen';
import After8PM from '../../../screens/CrushMyCraving/Challenge/after8index';
import TimerScreen from '../../../screens/CrushMyCraving/components/TimerScreen';
import Congratulations from '../../../screens/CrushMyCraving/components/Congratulation';
import After8PMDetails from "../../../screens/CrushMyCraving/Challenge/after8Details"
import Music from '../../../screens/CrushMyCraving/Music/GeneralScreen';
import MusicTimer from '../../../screens/CrushMyCraving/Music/TimerScreen';
import Snacks from '../../../screens/CrushMyCraving/Snacks/GeneralScreen';
import SnacksTimer from '../../../screens/CrushMyCraving/Snacks/TimerScreen';
import Exercise from '../../../screens/CrushMyCraving/Exercise/GeneralScreen';
import ExerciseTimer from '../../../screens/CrushMyCraving/Exercise/TimerScreen';
import NoProblem from '../../../screens/CrushMyCraving/Exercise/NoProblem';
import {useSelector} from 'react-redux';
import {getData} from '../../../screens/NetworkRequest';
import Challenges from '../../../screens/CrushMyCraving/Challenge/Challenges';
import CrushIndex from '../../../screens/CrushMyCraving/CrushIndex';

const Stack = createNativeStackNavigator();

const Challenge = () => {
  const navigation = useNavigation();
  const [points, setPoints] = useState(0);
  const token = useSelector(state => state?.auth.token);
  const guest = useSelector(state => state?.auth.guest);
  const cartCount = useSelector(state => state.shopifyState.cartCount);

  const [visible, setVisible] = useState(false);
  const getRewards = async () => {
    try {
      const data = await getData(token, 'activity_reward/');
      //   console.log('rewardsssss dataaa', data);
      setPoints(data?.points);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    guest ? null : getRewards();
  }, []);
  const {Navigator, Screen} = Stack;
  useEffect(() => {}, []);
  return (
    <>
      <Navigator
        initialRouteName="CrushMyCraving"
        screenOptions={{}}
        defaultStatus="open">

        <Screen
          name="CrushMyCraving"
          component={CrushMyCraving}
          options={{
            title: 'Crush My Craving',
            headerShown: false,
          }}
        />
        <Screen 
        name='CrushIndex'
        component={CrushIndex}
        options={{
          title: 'Crush My Craving',
          headerShown: false,
        }}/>
         <Screen 
        name='Challenges'
        component={Challenges}
        options={{
          title: 'Chalenges',
          headerShown: false,
        }}/>
        <Screen
          name="GeneralScreen"
          component={GeneralScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CutOut"
          component={CutOut}
          options={{
            headerShown: false,
            androidStatusBarColor: '#34495e',
          }}
        />
        <Screen
          name="CutOutDetails"
          component={CutOutDetails}
          options={{
            headerShown: false,
          }}
        />
        <Screen name="After8PM" component={After8PM} 
        options={{
          headerShown: false,
        }}/>
        <Screen name='After8PMDetails' component={After8PMDetails}
        options={{
          headerShown:false
        }}/>
        <Screen
          name="TimerScreen"
          component={TimerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Congratulations"
          component={Congratulations}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="Snacks"
          component={Snacks}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SnacksTimer"
          component={SnacksTimer}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="Music"
          component={Music}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="MusicTimer"
          component={MusicTimer}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="Exercise"
          component={Exercise}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="ExerciseTimer"
          component={ExerciseTimer}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="NoProblem"
          component={NoProblem}
          options={{
            headerShown: false,
          }}
        />
        {/* <Screen
          name="CrushStat"
          component={CrushStat}
          options={{
            // headerShown: false,
            headerLeft: () => {
              return (
                <IconButton
                  mode="outlined"
                  icon="arrow-left"
                  // size={30}
                  // style={{paddindBottom: 20}}
                  color={'gray'}
                  onPress={() => navigation.navigate('HomeScreens')}
                  // disabled={displaybutton}
                />
              );
            },
            title: 'Crush My Sugar Craving',
          }}
        /> */}
      </Navigator>
    </>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -8,
    marginRight: -5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    // color: '#66cc33',
    color: 'black',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    // color: '#66cc33',
    color: 'black',
  },
  headerStyle: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
  },
});

// {order === 1 ? (
//   <>
//     <Screen
//       name="CrushMyCraving"
//       component={CrushMyCraving}
//       options={{
//         title: 'Crush My Craving',
//         headerShown: false,
//       }}
//     />
//     <Screen
//       name="GeneralScreen"
//       component={GeneralScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Screen
//       name="TimerScreen"
//       component={TimerScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </>
// ) : order === 2 ? (
//   <>
//     <Screen
//       name="NoProblem"
//       component={NoProblem}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Screen
//       name="Congratulations"
//       component={Congratulations}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </>
// ) : order === 3 ? (
//   <>
//     <Screen
//       name="Music"
//       component={Music}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Screen
//       name="MusicTimer"
//       component={MusicTimer}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </>
// ) : order === 4 ? (
//   <>
//     <Screen
//       name="Exercise"
//       component={Exercise}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Screen
//       name="ExerciseTimer"
//       component={ExerciseTimer}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </>
// ) : (
//   <Screen
//     name="CrushMyCraving"
//     component={CrushMyCraving}
//     options={{
//       title: 'Crush My Craving',
//       headerShown: false,
//     }}
//   />
// )}

/* <Screen
  name="CrushStat"
  component={CrushStat}
  options={{
    // headerShown: false,
    headerLeft: () => {
      return (
        <IconButton
          mode="outlined"
          icon="arrow-left"
          // size={30}
          // style={{paddindBottom: 20}}
          color={'gray'}
          onPress={() => navigation.navigate('HomeScreens')}
          // disabled={displaybutton}
        />
      );
    },
    title: 'Crush My Sugar Craving',
  }}
/> */
