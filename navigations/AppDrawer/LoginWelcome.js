import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-paper';
import {logIn} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

const WelcomeScreen = ({onChange}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {params} = useRoute();
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Ribbon /> */}
      <View>
        <Image
          resizeMode="contain"
          height={300}
          width={200}
          style={styles.loginImage}
          source={require('../../../assets/shapes/LargeTitle.png')}
        />
      </View>

      <View>
        <Text style={styles.welcomeText}>
          We are on a mission to help reduce how much sugar people eat.
        </Text>
        <Text style={styles.textContainer}>
          We believe that refined sugar is bad for you and should be left out of
          most foods — plain and simple. This is why we want to be the first
          company committed to having no sugar in any of our products! We
          created this app to help you monitor your sugar intake and cut it from
          your diet!
        </Text>
        <TouchableOpacity onPress={onChange}>
          <FastImage
            style={{width: 260, height: 62, alignSelf: 'center'}}
            source={require('../../../assets/shapes/tempButton.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: height * 0.03,

    width: width * 0.9,

    height: height * 0.2,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#73B843',
  },
  welcomeText: {
    color: '#FFFFFF',
    marginHorizontal: 30,
    fontWeight: '400',
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 35,
  },
  textContainer: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: height * 0.05,
  },
});
export default WelcomeScreen;
