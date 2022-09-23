import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CrushSvg from '../../../assets/cravingicon.svg';
import DiscoverSvg from '../../../assets/icons/Discover-Icon.svg';
import ProgressSvg from '../../../assets/icons/Progress-Icon.svg';
import CrushIcon from '../../../assets/icons/Crush-Icon.svg';
import RecipeIcon from '../../../assets/icons/Recipes-Icon.svg';
import AuthComponent from '../../components/AuthComponent';

import ShopIcon from '../../../assets/icons/Shop-Icon.svg';
import FeedbackIcon from '../../../assets/icons/Feedback-Icon.svg';
import LogoutIcon from '../../../assets/icons/Logout-Icon.svg';
import ExerciseIcon from '../../../assets/icons/Exercise-Icon.svg';
import SettingIcon from '../../../assets/icons/User-Icon.svg';
import WhyNosugarIcon from '../../../assets/icons/Why-no-sugar.svg';
import RecipesScreen from '../AppStacks/LifeStyle';
import ShopScreen from '../AppStacks/Products';
import ProfileScreen from '../AppStacks/Profile';
import {IconButton} from 'react-native-paper';
import HomeSvg from '../../../assets/icons/home-icon.svg';
import Home2Svg from '../../../assets/icons/home-icon.svg';
import DiscoverIcon from '../../../assets/icons/Discover-Icon.svg';
import FeedBack from '../../screens/FeedBack';
// import BottomTabs from '../AppStacks/Home';
import BottomTabs from '../BottomBar';
import {useDispatch, useSelector} from 'react-redux';
import dp from '../../../assets/icons/profile.png';
import {logOut} from '../../redux/actions/authActions';
import {useShopify} from '../../custom_hooks/shopify_hook';
import {getProfile} from '../../redux/actions/profileActions';
import Meal from '../../screens/Home/components/Meal';
import ExerciseScreen from '../AppStacks/Exercise';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;
const width = Dimensions.get('screen').width;

const AppDrawer = () => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    // fetchCollection,
  } = useShopify();

  useEffect(() => {
    createShop();
    fetchProducts();
    createCheckout();
    // fetchCollection()
  }, []);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  // const [profileData, setProfileData] = useState(null);
  const profileData = useSelector(state => state?.profile?.profile_data);

  const token = useSelector(state => state?.auth?.token);
  const guest = useSelector(state => state?.auth?.guest);
  const [welcomeShow, setWelcomeShow] = useState(true);
  useEffect(() => {
    guest ? null : dispatch(getProfile(token));
  }, []);
  return (
    <Navigator
      drawerType="slide"
      drawerStyle={{
        backgroundColor: '#41B87F',
      }}
      screenOptions={{
        activeTintColor: 'black',
        labelStyle: {color: 'white'},
        drawerLabelStyle: {
          color: '#777777',
          marginLeft: -10,
          fontSize: 16,
          fontWeight: '400',
        },
      }}
      drawerContent={props => (
        <DrawerContentScrollView
          // style={{backgroundColor: '#41B87F'}}
          {...props}>
          {false ? null : (
            <View>
              <Image
                style={
                  profileData?.image
                    ? styles.imageContainer2
                    : styles.imageContainer
                }
                // size={100}
                source={profileData?.image ? {uri: profileData?.image} : dp}
              />

              <Text numberOfLines={1} style={styles.nameContainer}>
                {profileData?.email
                  ? profileData?.name
                    ? profileData?.name
                    : profileData?.email.slice(
                        0,
                        profileData?.email.indexOf('@'),
                      )
                  : 'Guest User'}
              </Text>
            </View>
          )}

          <DrawerItemList {...props} />
          {/* {guest ? null : ( */}
            <TouchableOpacity
              style={{marginTop: 10}}
              // disabled={guest}
              onPress={() => {
                // removeValue();
              guest?navigate("AuthModalComponent"):  navigate('ProgressHistoryScreen');
              }}>
              <View style={styles.addressEditContainer}>
                <ProgressSvg width={25} height={25} />

                <View>
                  <Text style={[styles.editAddressText, {marginLeft: 20}]}>
                    My Progress 
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* )} */}
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
           navigate('RecipesScreen');
            }}>
            <View style={styles.addressEditContainer}>
              <RecipeIcon width={20} height={20} />

              <View>
                <Text style={styles.editAddressText}>Recipes</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
              guest?navigate("AuthModalComponent"):   navigate('ExerciseScreen');
            }}>
            <View style={styles.addressEditContainer}>
              <ExerciseIcon width={25} height={25} />

              <View>
                <Text style={[styles.editAddressText, {marginLeft: 20}]}>
                  Exercise
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
              navigate('Discover');
            }}>
            <View style={styles.addressEditContainer}>
              <DiscoverIcon width={20} height={20}/>

              <View>
                <Text style={styles.editAddressText}>Discover</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
              navigate('ShopScreen');
            }}>
            <View style={styles.addressEditContainer}>
              <ShopIcon width={20} height={20} />

              <View>
                <Text style={styles.editAddressText}>Shop</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
              navigate('FeedbackScreen');
            }}>
            <View style={styles.addressEditContainer}>
              <FeedbackIcon width={20} height={20} />

              <View>
                <Text style={styles.editAddressText}>Feedback</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();
              guest?navigate("AuthModalComponent"):  navigate('ProfileSettingScreen');
            }}>
            <View style={styles.addressEditContainer}>
              <SettingIcon width={20} height={20} />

              <View>
                <Text style={styles.editAddressText}>Profile and Settings</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              // removeValue();

              dispatch(logOut());
            }}>
            <View style={styles.addressEditContainer}>
              <LogoutIcon width={20} height={20} />

              <View>
                <Text style={styles.editAddressText}>
                  {guest ? 'Go to Login' : 'Logout'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      )}>
      <Screen
        name="HomeScreen"
        component={BottomTabs}
        active
        options={{
          // drawerItemStyle: {display: ''},

          drawerIcon: ({focused, color}) =>
            focused ? (
              <HomeSvg width={20} height={20} />
            ) : (
              <HomeSvg width={20} height={20} />
            ),
          headerShown: false,
          title: 'Home',
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    marginTop: '10%',
    width: 100,
    // borderRadius: 50,
    height: 100,
    backgroundColor: 'white',

    // marginVertical: 2,
  },
  imageContainer2: {
    alignSelf: 'center',
    marginTop: '10%',
    width: 100,
    borderRadius: 50,
    height: 100,
    backgroundColor: 'white',

    // marginVertical: 2,
  },
  nameContainer: {
    alignSelf: 'center',
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
    marginTop: 20,
    fontSize: 20,
    marginVertical: 1,
    color: '#4d4d4d',
  },
  editAddressText: {
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 25,
    fontFamily: 'Montserrat-Regular',
    marginTop: -5,
    color: '#777777',
    lineHeight: 28,
  },
  addressEditContainer: {
    flexDirection: 'row',
    // justifyContent: '',
    marginVertical: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },

  iconContainer: {
    justifyContent: 'flex-end',
  },
});
export default AppDrawer;
