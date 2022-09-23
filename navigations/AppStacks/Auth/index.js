import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, ForgetPassword, ResetPassword} from '../../../screens';
import GenderScreen from '../../../screens/Questionnaire/Gender';
import HeightScreen from '../../../screens/Questionnaire/Height';
import GoalsScreen from '../../../screens/Questionnaire/Goal';
import Protein from '../../../screens/Questionnaire/Protein';
import Diet from '../../../screens/Questionnaire/Diet';
import WeightLoss from '../../../screens/Questionnaire/WeightLoss';
import Activities from '../../../screens/Questionnaire/Activities';
import Gain_Weight from '../../../screens/Questionnaire/GainWeight';
import ArgueGrabSnack from '../../../screens/Questionnaire/Argue';
import Program from '../../../screens/Questionnaire/SelectProgram';
import FitnessTracker from '../../../screens/Questionnaire/FitnessTracker';
import NewsLetter from '../../../screens/Questionnaire/NewsLetter';
import WelcomeScreen from '../../../screens/Auth/WelcomeScreen';
import TutorialScreen from '../../../screens/Auth/TutorialScreen';
import GenderQues from '../../../screens/Questionnaire/GenderQues';
import QuesWeight from '../../../screens/Questionnaire/QuesWeight';
import QuesSugarFix from '../../../screens/Questionnaire/QuesSugarFix';
import QuesGoal from '../../../screens/Questionnaire/QuesGoal';
import QuesDiet from '../../../screens/Questionnaire/QuesDiet';
import QuesUrgeSnack from '../../../screens/Questionnaire/QuesUrgeSnack';
import QuesNotification from '../../../screens/Questionnaire/QuesNotification';
import Subscription from '../../../screens/Auth/Subscription';
import AuthModal from '../../../components/ModalAuth';

import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

const AuthStack = () => {
  const uuid = useSelector(state => state?.auth?.uuid);
  const guest = useSelector(state => state?.auth?.guest);
const [isModal, setIsModal] = React.useState(false);
  return (
    <Navigator
      screenOptions={
        {
          // headerShown: false,
          //   headerLeft: () => (
          //     <View>
          //       <Text>ddd</Text>
          //     </View>
          //   ),
        }
      }>
      {uuid !== 'guest1234' ? (
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Screen
          name="GenderQues"
          options={{
            headerShown: false,
          }}
          component={GenderQues}
        />
      )}
      {uuid !== 'guest1234' ? (
        <Screen
          name="GenderQues"
          options={{
            headerShown: false,
          }}
          component={GenderQues}
        />
      ) : (
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Subscription"
        component={Subscription}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="TutorialScreen"
        component={TutorialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={Register}
      />
      <Screen
        name="QuesWeight"
        options={{
          headerShown: false,
        }}
        component={QuesWeight}
      />

      <Screen
        name="QuesDiet"
        options={{
          headerShown: false,
        }}
        component={QuesDiet}
      />
      <Screen
        name="QuesGoal"
        options={{
          headerShown: false,
        }}
        component={QuesGoal}
      />
      <Screen
        name="QuesSugarFix"
        options={{
          headerShown: false,
        }}
        component={QuesSugarFix}
      />
      <Screen
        name="QuesUrgeSnack"
        options={{
          headerShown: false,
        }}
        component={QuesUrgeSnack}
      />
      <Screen
        name="QuesNotification"
        options={{
          headerShown: false,
        }}
        component={QuesNotification}
      />

      <Screen
        name="ForgetPassword"
        options={{
          headerShown: false,
        }}
        component={ForgetPassword}
      />
      <Screen
        name="ResetPassword"
        options={{
          headerShown: false,
        }}
        component={ResetPassword}
      />

      <Stack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={{
          title: 'Questionnaire',
          //   headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#86B841',
          // },
          headerTitleAlign: 'center',
          // headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="HeightScreen"
        component={HeightScreen}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="ProteinScreen"
        component={Protein}
        options={{
          title: 'Questionnaire',
          //   headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#86B841',
          // },
          headerTitleAlign: 'center',
          // headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="DietScreen"
        component={Diet}
        options={{
          title: 'Questionnaire',
          //   headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#86B841',
          // },
          headerTitleAlign: 'center',
          // headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="WeightLoss"
        component={WeightLoss}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="GainWeight"
        component={Gain_Weight}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Activities"
        component={Activities}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Grab Snack"
        component={ArgueGrabSnack}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Training Program"
        component={Program}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Fitness Tracker"
        component={FitnessTracker}
        options={{
          title: 'Questionnaire',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="NewsLetter"
        component={NewsLetter}
        options={{
          title: 'Newsletter',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AuthStack;
