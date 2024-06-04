import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput, Button } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import {Picker} from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

type StackDashboard = {navigation: {navigate:Function}}

const Home: React.FC<StackDashboard> = ({ navigation }) => {
  const totalAmount = '1259.90';
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parseFloat(totalAmount));

  /** FUNCTIONS ROUTES */
  function form() {navigation.navigate('Form',{})};

  return (
    <>
      <View style={styles.boxCard}>
        <View style={styles.card}>
          <View>
            <Text style={styles.total}>15693</Text>
            <Text style={styles.txtTotal}>produtos em estoque</Text>
          </View>

          <TouchableOpacity onPress={() => form()} style={styles.btnPlus}>
            <MaterialIcons name="add-box" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* --------------------------------------------------------------------------- */}
        <View style={styles.cardPrice}>
          <View style={styles.price}>
            <Text style={[styles.txtPrice, {fontSize: 20}]}>R$156,56</Text>
            <Text style={[styles.txtPrice, {color: '#ccc'}]}>valor do{'\n'}estoque</Text>
          </View>
          
          <View style={styles.price}>
            <Text style={[styles.txtPrice, {fontSize: 20}]}>R$156,56</Text>
            <Text style={[styles.txtPrice, {color: '#ccc'}]}>faturamento{'\n'}previsto</Text>
          </View>
        </View>

        <View style={styles.boxLabel}>
          <Text style={styles.txtFilter}>Produtos cadastrados</Text>
          <Text style={styles.txtFilter}>
            <MaterialIcons name="list" size={24} color="rgb(223,184,190)" />
          </Text>
        </View>
      </View>

      <ScrollView
        style={{width: '100%', backgroundColor: '#fff'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 105
        }}
      >
        <View style={styles.scroll}>
          <View style={styles.icon}>
            <Ionicons name="ios-images-outline" size={40} color="#E06E41" />
          </View>

          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 12, opacity: 0.5}]}>cód.:12389</Text>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
              <Text style={[styles.txtProduct, {fontSize: 13, opacity: 0.5}]}>{formattedAmount}</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#E06E41" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <View style={styles.icon}>
            <Ionicons name="ios-images-outline" size={40} color="#E06E41" />
          </View>

          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 12, opacity: 0.5}]}>cód.:12389</Text>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
              <Text style={[styles.txtProduct, {fontSize: 13, opacity: 0.5}]}>{formattedAmount}</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#E06E41" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <View style={styles.icon}>
            <Ionicons name="ios-images-outline" size={40} color="#E06E41" />
          </View>

          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 12, opacity: 0.5}]}>cód.:12389</Text>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
              <Text style={[styles.txtProduct, {fontSize: 13, opacity: 0.5}]}>{formattedAmount}</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#E06E41" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  boxCard: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  card: {
    width: '100%',
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftColor: 'rgb(223,184,190)',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
  },
  total: {
    color: '#242425',
    fontWeight: 'bold',
    fontSize: 32,
  },
  txtTotal: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ccc'
  },
  btnPlus: {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50,
    borderRadius: 50/2,
    backgroundColor: 'rgb(223,184,190)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    bottom: 0,
  },

  cardPrice: {
    gap: 8,
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
  },
  price: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    bottom: 0,
    backgroundColor: '#fff',
    borderLeftColor: 'rgb(223,184,190)',
    borderLeftWidth: 2,
    borderRadius: 8,
  },
  txtPrice: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  boxLabel: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    bottom: 0,
    backgroundColor: '#fff',
    borderLeftColor: 'rgb(223,184,190)',
    borderLeftWidth: 3,
  },
  txtFilter: {
    color: '#242425',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

 /** ---------------------------------------------------------------- */
  scroll: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    minHeight: 75,
    maxHeight: 75,
    maxWidth: 75,
    minWidth: 75,
    borderRadius: 16,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

    borderTopWidth: 3,
    borderTopColor: '#ccc',

    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',

    borderLeftWidth: 1,
    borderLeftColor: '#ccc',

    borderRightWidth: 3,
    borderRightColor: '#ccc',
  },
  boxTxtIcon: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#36363678',
    paddingRight: 16,
  },
  boxTxt: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  txtProduct: {
    color: '#242425',
    fontWeight: 'bold',
  }
});

export default Home;