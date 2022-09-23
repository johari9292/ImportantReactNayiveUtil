import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SubscriptionHome from '../../screens/Home/components/Subscription';
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
      <Screen
        name="SubscriptionHome"
        component={SubscriptionHome}
        options={{
          // title: 'Add Address',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AuthStack;
