import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput, Button } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import {Picker} from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Category() {
  const totalAmount = '1259.90';
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parseFloat(totalAmount));

  return (
    <>
      <View style={styles.boxCard}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='add uma categoria'
            placeholderTextColor='#cccccc89'
            keyboardType="default"
            maxLength={14}
            returnKeyType="send"
            // value={formatMoney}
            // onChangeText={setInputMoney}
            // onSubmitEditing={() => Checking()}
          />

          <TouchableOpacity style={styles.btnPlus}>
            <MaterialIcons name="add-box" size={24} color="#fff" />
          </TouchableOpacity>
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
          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#E06E41" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#E06E41" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <View style={styles.boxTxtIcon}>
            <View style={styles.boxTxt}>
              <Text style={[styles.txtProduct, {fontSize: 15}]}>Nome do produto</Text>
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
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  card: {
    width: '100%',
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftColor: 'rgb(223,184,190)',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
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

  /** ---------------------------------------------------------------- */
  form: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: 'rgb(223,184,190)',
    justifyContent: 'space-between',
    gap: 16,
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,

    borderTopWidth: 3,
    borderTopColor: '#ccc',

    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',

    borderLeftWidth: 3,
    borderLeftColor: '#f0f0f0',

    borderRightWidth: 2,
    borderRightColor: '#ccc',
  },
  btnPlus: {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50,
    borderRadius: 8,
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

 /** ---------------------------------------------------------------- */
  scroll: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxTxtIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 24,
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