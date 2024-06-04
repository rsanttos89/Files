import React, { useRef } from 'react';
import { Platform, StyleSheet, Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';

export default function SignIn({navigation}) {
  const animation = useRef(null);

  /** FUNCTIONS ROUTES */
  function signIn() {
    navigation.navigate('SignIn', {});
  }

  function signUp() {
    navigation.navigate('SignUp', {});
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#E22B41' style='light'/>

      <View style={styles.header}>
        <Image
          style={{resizeMode: 'contain', width: 250}}
          source={require('../../assets/ocardapio.png')}
        />
      </View>

      <View style={{
        flex: 1,
        width: 800,
        borderTopLeftRadius: 800,
        borderTopRightRadius: 800,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.main}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 325,
              height: 325,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
            source={require('../../assets/food.json')}
          />
          
          <View style={styles.boxTxt}>
            <Text style={[styles.txt, {fontSize: 30, marginBottom: 15}]}>Gerencie Seu Cardápio, Conquiste Clientes!</Text>
            <Text style={[styles.txt, {color: '#4e4e4e'}]}>Destaque seus pratos, conecte-se{'\n'}com clientes, impulsione seu restaurante.</Text>

            <TouchableOpacity style={styles.btn} onPress={() => signIn()}>
              <Text style={styles.txtBtn}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.boxLink}>
              <Text style={styles.link}>Ainda não tem uma conta?</Text>
              <Text style={[styles.link, {marginLeft: 4}]}>
                <TouchableOpacity onPress={() => signUp()}>
                  <Text style={[styles.link, {
                    color: '#E22B41',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline', 
                    fontSize: 13,
                    textTransform: 'uppercase', 
                  }]}>Sign Up</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E22B41',
  },

  header: {
    flex: 0.22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 75,
    width: '100%',
  },

  boxTxt: {
    width: '100%',
    maxWidth: 360,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '900',
    color: '#404040',
  },

  btn: {
    height: 60,
    width: '100%',
    borderRadius: 4,
    marginVertical: 30,
    backgroundColor: '#E22B41',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtBtn: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: "#fff",
  },

  boxLink: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  link: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16
  },
});