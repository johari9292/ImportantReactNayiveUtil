import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Products from '../../../screens/Products';
import AllProducts from '../../../screens/Products/AllProducts';
import CategoryProducts from '../../../screens/Products/AllProducts/CollectionsProduct';
import ProductDetail from '../../../screens/Products/ProductDetail';
import AddToCart from '../../../screens/Products/Checkout/index';
import PlaceOrder from '../../../screens/Products/Checkout/PlaceOrder';
import ModalFlag from '../../../components/ModalFlag';
import LocationSvg from '../../../../assets/00location.svg';
import {useNavigation} from '@react-navigation/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const width = Dimensions.get('window').width;
const ProductsScreen = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      {visible && (
        <ModalFlag
          modalVisible={visible}
          onRequestClose={() => setVisible(false)}
        />
      )}
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: '',
            headerStyle: {backgroundColor: '#73B843', paddingBottom: 20},
            headerTitleAlign: 'center',
            headerRight: () => {
              return (
                <View>
                  <TouchableOpacity onPress={() => setVisible(true)}>
                    <LocationSvg height={32} width={32} />
                  </TouchableOpacity>
                </View>
              );
            },
            headerLeft: () => {
              return (
                <View
                  style={{
                    marginLeft: -10,
                    marginTop: -5,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation?.navigate('Home')}>
                    <Icons
                      color="white"
                      size={45}
                      // style={{position: 'absolute', top: 40, right: 20}}
                      name="chevron-left"
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="AllProducts"
          component={AllProducts}
          options={({route}) => ({
            title: route?.params?.name || 'Products',
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="CategoryProducts"
          component={CategoryProducts}
          options={({route}) => ({
            title: route.params.name,
            headerTitleAlign: 'center',
          })}
          // options={({route}) => ({
          //   title: 'Products',
          //   headerTitleAlign: 'center',
          // })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            title: 'Add to Cart',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{
            title: 'Checkout',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Place Order"
          component={PlaceOrder}
          options={{
            title: 'Checkout',
            headerTitleAlign: 'center',
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProductsScreen;
