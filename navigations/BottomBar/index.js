import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text} from 'react-native';
import HomeScreen from '../AppStacks/Home';
import {
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import ProductsScreen from '../AppStacks/Products';
import CommunityScreen from '../AppStacks/Community';
import CrushMyCraving from '../AppStacks/CrushMyCraving';
import Product from '../../../assets/producticon.svg';
import Product2 from '../../../assets/producticon2.svg';
import DiscoverIcon from '../../../assets/shapes/Discover-Icon.svg';
import ProgressIcon from '../../../assets/shapes/Progress-Icon.svg';
import CrushIcon from '../../../assets/shapes/Crush-Icon.svg';
import Recipe from '../../../assets/RecipesGrey.svg';
import RecipeGreen from '../../../assets/RecipesGreen.svg';
import DailyIntakeScreens from '../AppStacks/DailyIntake';
import ExerciseScreen from '../AppStacks/Exercise';
import FeedBack from '../../screens/FeedBack';
import { useSelector } from 'react-redux';
import RecipesScreen from '../AppStacks/LifeStyle';
import ShopScreen from '../AppStacks/Products';
import ProfileScreen from '../AppStacks/Profile';
import WhyNoSugar from '../../screens/WhyNoSugar';
import Discover from '../../screens/Discover';
import Progress from '../../screens/Progress';
import styled from 'styled-components';
import {useNavigation, useIsFocused} from '@react-navigation/core';
import AuthModalComponent from '../../components/AuthComponent';


const GrayText = styled(Text)`
  font-size: 10px;
  color: white;
  margin-bottom: 3px;
`;

const GreenText = styled(Text)`
  font-size: 10px;
  color: white;
  margin-bottom: 3px;
`;

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation, route}) => {
  
  const guest = useSelector(state => state?.auth?.guest);
  // const navigation = useNavigation();
  const isFocused = useIsFocused();
  // useEffect(() => {
  //   if (isFocused) {
  //     navigation.dispatch(DrawerActions.closeDrawer());
  //   }
  // }, [isFocused]);
  // React.useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (routeName === 'VideoScreen') {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [navigation, route]);
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor: '#72b852'},
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            ),

            tabBarLabel: ({focused, color}) =>
              focused ? (
                <GreenText>Menu</GreenText>
              ) : (
                <GreenText>Menu</GreenText>
              ),
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Ionicons color="white" size={30} name="menu" />
              ) : (
                <Ionicons color="white" size={30} name="menu" />
              ),
          }}
        />

        <Tab.Screen
          name="WhyNoSugar"
          component={WhyNoSugar}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />

        <Tab.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen 
          name="AuthModalComponent"
          component={AuthModalComponent}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="ProgressHistoryScreen"
          component={Progress}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="ShopScreen"
          component={ShopScreen}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="RecipesScreen"
          component={RecipesScreen}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="FeedbackScreen"
          component={FeedBack}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="ProfileSettingScreen"
          component={ProfileScreen}
          options={{
            tabBarVisible: false,
            headerShown: false,

            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="CrushMyCravingScreen"
          component={CrushMyCraving}
          options={{
            // tabBarButton: props => (
            //   <TouchableOpacity
            //     {...props}
            //     onPress={() => navigation.navigate('CrushMyCraving')}
            //   />
            // ),
            tabBarStyle: {
              display: 'none',
            },
            // tabBarButton: () => null,
            tabBarLabel: ({focused, color}) =>
              focused ? (
                <GrayText>Crush</GrayText>
              ) : (
                <GreenText>Crush</GreenText>
              ),
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <CrushIcon width={30} height={27} />
              ) : (
                <CrushIcon width={30} height={27} />
              ),
            // tabBarIcon: ({focused, color}) =>
            //   focused ? (
            //     <Ionicons color="#72B852" size={30} name="food-fork-drink" />
            //   ) : (
            //     <Ionicons color="grey" size={30} name="food-fork-drink" />
            //   ),
          }}
        />

        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: ({focused, color}) =>
              focused ? (
                <GrayText>Discover</GrayText>
              ) : (
                <GreenText>Discover</GreenText>
              ),
            tabBarStyle: {
              display: 'none',
            },
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <DiscoverIcon width={30} height={27} />
              ) : (
                <DiscoverIcon width={30} height={27} />
              ),
          }}
        />

        <Tab.Screen
          name="ProgressScreen"
          component={guest? AuthModalComponent : Progress}
          options={{
            tabBarLabel: ({focused, color}) =>
              focused ? (
                <GrayText>Progress</GrayText>
              ) : (
                <GreenText>Progress</GreenText>
              ),
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <ProgressIcon width={30} height={27} />
              ) : (
                <ProgressIcon width={30} height={27} />
              ),
          }}
        />

        {/* <Tab.Screen
        name="Settings"
        component={<View></View>}
        options={({navigation}) => ({
          tabBarButton: props => (
            <TouchableOpacity {...props} onPress={() => console.log()} />
          ),
        })}
      /> */}
        {/* <Tab.Screen
          name="Drawer"
          component={Home}
          options={{
            tabBarIconStyle: {display: 'none'},
            tabBarLabelStyle: {display: 'none'},
            // tabBarStyle: {display: 'none'},
            tabBarLabel: '',

            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Ionicons color="#72B852" size={30} name="menu" />
              ) : (
                <Ionicons color="grey" size={30} name="menu" />
              ),
          }}
        /> */}
      </Tab.Navigator>
      {/* <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={{
          position: 'absolute',
          // top: height * 0.927,
          left: 20,
          paddingTop: height * 0.92,
          width: 35,
          zIndex: 2,
        }}>
        <Ionicons color="#D2D2D2" size={35} name="menu" />
        <Text style={{fontSize: 10, textAlign: 'center', color: 'grey'}}>
          Menu
        </Text>
      </TouchableOpacity> */}
    </>
  );
};

export default BottomTabs;
