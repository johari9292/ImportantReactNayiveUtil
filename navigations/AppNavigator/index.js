import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../AppStacks/Auth';
import {useSelector} from 'react-redux';
import AppDrawer from '../AppDrawer';
import WelcomeLoginScreen from '../AppDrawer/LoginWelcome';
import SubscriptionStack from '../AppStacks/SubscriptionStack';
import {Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {requestPurchase, requestSubscription, useIAP} from 'react-native-iap';
import * as RNIap from 'react-native-iap';
RNIap.initConnection();
const AppNavigator = () => {
  const status = useSelector(state => state?.auth?.status);
  const profileData = useSelector(state => state?.profile?.profile_data);
  console.log('profileDataa', profileData);
  // const handleDynamicLink = link => {
  //   // Handle dynamic link inside your own application
  //   console.log('opened link', link);
  // };

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // }, []);
  // useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       // handle link in app
  //       console.log('initial ssssss', link);
  //     });
  // }, []);
  // let purchaseUpdateSubscription = null;

  // let purchaseErrorSubscription = null;
  // useEf
  // const linking = {
  //   prefixes: ['nosugarcompany://', 'https://nosugarcompany.com/intro-offer'],

  //   // Custom function to get the URL which was used to open the app
  //   async getInitialURL() {
  //     // First, you would need to get the initial URL from your third-party integration
  //     // The exact usage depend on the third-party SDK you use
  //     // For example, to get to get the initial URL for Firebase Dynamic Links:
  //     const {isAvailable} = utils().playServicesAvailability;

  //     if (isAvailable) {
  //       const initialLink = await dynamicLinks().getInitialLink();

  //       if (initialLink) {
  //         return initialLink.url;
  //       }
  //     }

  //     // As a fallback, you may want to do the default deep link handling
  //     const url = await Linking.getInitialURL();
  //     console.log('url', url);

  //     return url;
  //   },

  //   // Custom function to subscribe to incoming links
  //   subscribe(listener) {
  //     // Listen to incoming links from Firebase Dynamic Links
  //     const unsubscribeFirebase = dynamicLinks().onLink(({url}) => {
  //       listener(url);
  //     });

  //     // Listen to incoming links from deep linking
  //     const linkingSubscription = Linking.addEventListener('url', ({url}) => {
  //       listener(url);
  //     });

  //     return () => {
  //       // Clean up the event listeners
  //       // unsubscribeFirebase();
  //       linkingSubscription.remove();
  //     };
  //   },
  //   config: {
  //     // Deep link configuration
  //   },
  // };

  return (
    <NavigationContainer>
      {profileData?.status === false ? (
        <SubscriptionStack />
      ) : status ? (
        <AppDrawer />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
