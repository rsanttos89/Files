import React, { useState, useEffect, useRef } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Dimensions, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Fontisto } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

export default function ImagePickerExample() {
  const productNameInputRef:React.MutableRefObject<any> = useRef();
  const purchasePriceInputRef:React.MutableRefObject<any> = useRef();
  const sellingPriceInputRef:React.MutableRefObject<any> = useRef();
  const stockQuantityInputRef:React.MutableRefObject<any> = useRef();
  const productSizeInputRef:React.MutableRefObject<any> = useRef();
  const productDescriptionInputRef:React.MutableRefObject<any> = useRef();

  {/**--------------------------------------------------------------------------- */}
  const [images, setImages] = useState(Array(5).fill(null));
  const [imageNewNames, setImageNewNames] = useState(Array(5).fill(null));
  const [uploadStatus, setUploadStatus] = useState(null);
  const [currentUploadIndex, setCurrentUploadIndex] = useState(0);

  {/**--------------------------------------------------------------------------- */}
  const [productCode, setProductCode] = useState('');
  const [productSize, setProductSize] = useState('1');
  const [stockQuantity, setStockQuantity] = useState('1');
  const [sizeTypeSelectValue, setSizeTypeSelectValue] = useState('MM');
  const [typeSelectValue, setTypeSelectValue] = useState('SELECIONE UMA CATEGORIA');

  const [productName, setProductName] = useState('');
  const handleTextChangeProduct = (text) => {
    if (text.length <= 16) {
      setProductName(text);
    }
  };

  const [purchasePrice, setPurchasePrice] = useState('');
  const inputPurchasePriceFloat = purchasePrice.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2");
  const formatPurchasePrice = purchasePrice.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1,$2").replace(/(?=(\d{3})+(\D))\B/g, ".");

  const [sellingPrice, setSellingPrice] = useState('');
  const inputSellingPriceFloat = sellingPrice.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2");
  const formatSellingPrice = sellingPrice.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1,$2").replace(/(?=(\d{3})+(\D))\B/g, ".");

  const [productDescription, setProductDescription] = useState('');
  const handleTextChangeDescription = (text) => {
    if (text.length <= 250) {
      setProductDescription(text);
    }
  };

  {/**--------------------------------------------------------------------------- */}
  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      const filename = new Date().getTime() + '.webp';
      const updatedImages = [...images];
      const updatedImageNewNames = [...imageNewNames];

      updatedImages[index] = result.assets[0].uri;
      updatedImageNewNames[index] = filename;

      setImages(updatedImages);
      setImageNewNames(updatedImageNewNames);
    }
  };

  const uploadImage = async (index) => {
    const image = images[index];
    const imageNewName = imageNewNames[index];

    if (image) {
      const formData = new FormData();
      formData.append('file', {
        uri: image,
        name: imageNewName,
        type: 'image/jpeg',
      } as any);

      try {
        const response = await fetch('https://rosystore.com.br/public/assets/uploads.php', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const responseData = await response.json();

        if (responseData.success) {
          setUploadStatus(`Upload successful. Server filename: ${responseData.filename}`);
        } else {
          setUploadStatus(`Upload failed. ${responseData.message}`);
        }

        // Clear the message after 3 seconds
        setTimeout(() => {
          setUploadStatus(null);
        }, 3000);

        return responseData.success;
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploadStatus('Error uploading image. Please try again.');

        // Clear the error message after 3 seconds
        setTimeout(() => {
          setUploadStatus(null);
        }, 3000);

        return false;
      }
    }

    return false;
  };

  {/**--------------------------------------------------------------------------- */}
  const resetImages = () => {
    setImages(Array(5).fill(null));
    setImageNewNames(Array(5).fill(null));
    setUploadStatus(null);
    setCurrentUploadIndex(0);
    setProductCode('');
    setProductSize('1');
    setStockQuantity('1');
    setSizeTypeSelectValue('MM');
    setTypeSelectValue('SELECIONE UMA CATEGORIA');
    setProductName('');
    setPurchasePrice('');
    setSellingPrice('');
    setProductDescription('');
  };

  {/**--------------------------------------------------------------------------- */}
  async function sendUrlImg() {
    try {
      const response = await fetch(`https://rosystore.com.br/server/send_url_img.php`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          ProductCode: productCode,
          ImagePath: imageNewNames.join(',')
        })
      });
  
      const responseText = await response.text();
      const responseJson = JSON.parse(responseText);
      
      if (responseJson.success) {
        setUploadStatus(`successful`);
        sendDataForm();
      } else {
        setUploadStatus(`Upload failed. ${responseJson.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  {/**--------------------------------------------------------------------------- */}
  async function sendDataForm() {
    try { 
      const response = await fetch(`https://rosystore.com.br/server/products.php`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          product_code: productCode,
          product_name: productName,
          selling_price: parseFloat(inputSellingPriceFloat),
          purchase_price: parseFloat(inputPurchasePriceFloat),
          size_type: sizeTypeSelectValue,
          category: typeSelectValue,
          product_size: productSize,
          product_description: productDescription,
          stock_quantity: parseFloat(stockQuantity),
          visit_count: 0
        })
      });
  
      const responseText = await response.text();
      const responseJson = JSON.parse(responseText);

      if (responseJson.success) {
        Alert.alert(
          'Produto Adicionado',
          'Deseja adicionar o mesmo produto com tamanho diferente?',
          [
            {
              text: 'Não',
              onPress: () => {
                resetImages();
                setUploadStatus(null);
              },
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => {
                setUploadStatus(null);
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        setUploadStatus(`Upload failed. ${responseJson.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  {/**--------------------------------------------------------------------------- */}
  const handleUpload = async () => {
    if (currentUploadIndex < images.length) {
      const success = await uploadImage(currentUploadIndex);
      if (success) {
        setCurrentUploadIndex(currentUploadIndex + 1);
      }

      // Se todos os uploads forem concluídos, redefina as imagens
      if (currentUploadIndex === images.length - 1) {
        sendUrlImg();
      }
    }
  };

  const checkAndSendData = () => {
    // Verifica se a categoria foi selecionada
    if (typeSelectValue === 'SELECIONE UMA CATEGORIA') {
      Alert.alert('Atenção!!!', 'Por favor, selecione uma categoria antes de enviar.');
      return; // Impede o envio se a categoria não estiver selecionada
    }
  
    // Verifica se todos os valores estão definidos
    if (
      images.every((image) => image !== null) &&
      imageNewNames.every((imageName) => imageName !== null) &&
      productCode &&
      productSize &&
      stockQuantity &&
      sizeTypeSelectValue &&
      productName &&
      purchasePrice &&
      sellingPrice &&
      productDescription
    ) {
      // Todos os valores estão definidos, chama a função sendUrlImg
      sendUrlImg();
    } else {
      // Alguns valores não estão definidos, exibe um alerta
      Alert.alert('Atenção!!!', 'Por favor, preencha todos os campos antes de enviar.');
    }
  };

  useEffect(() => {
    handleUpload();
  }, [currentUploadIndex]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 8, paddingVertical: 8}}
    >
      <ScrollView
        style={{width: '100%'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        {images.map((image, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => pickImage(index)} 
            style={index === 0 ? styles.firstCardImgPrimary : styles.cardImgPrimary}
          >
            <View style={styles.icon}>
              <Fontisto name="picture" size={32} color="#242425" />
            </View>
          {image && (
            <Image
              source={{ uri: image }}
              style={index === 0 ? styles.firstCardImgPrimary : styles.cardImgPrimary}
            />
          )}
          </TouchableOpacity>
        ))}

        {/**--------------------------------------------------------------------------- */}
        <View style={styles.form}>
          <View style={styles.count}>
            <Text style={styles.label}>código do produto</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder=".........."
            placeholderTextColor="gray"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect={true}
            value={productCode}
            onChangeText={(text) => setProductCode(text)}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => (productNameInputRef.current && productNameInputRef.current.focus())}
          />

          {/**--------------------------------------------------------------------------- */}
          <View style={styles.count}>
            <Text style={styles.label}>nome do produto</Text>
            <Text>{productName.length}/16</Text>
          </View>
          <TextInput
            ref={productNameInputRef}
            style={styles.input}
            placeholder=".........."
            placeholderTextColor="gray"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect={true}
            value={productName}
            onChangeText={handleTextChangeProduct}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => (purchasePriceInputRef.current && purchasePriceInputRef.current.focus())}
          />

          {/**-------------------------------------valor de venda---------------------------------- */}
          <View style={styles.row}>
            <View style={{width: '100%', flex: 1}}>
              <Text style={styles.label}>valor de compra</Text>
              <TextInput
                ref={purchasePriceInputRef}
                style={styles.input}
                placeholder="..........."
                placeholderTextColor="gray"
                keyboardType="numeric"
                autoCorrect={true}
                value={formatPurchasePrice}
                onChangeText={(text) => setPurchasePrice(text)}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => (sellingPriceInputRef.current && sellingPriceInputRef.current.focus())}
              />
            </View>

            <View style={{width: '100%', flex: 1}}>
              <Text style={styles.label}>valor de venda</Text>
              <TextInput
                ref={sellingPriceInputRef}
                style={styles.input}
                placeholder="..........."
                placeholderTextColor="gray"
                keyboardType="numeric"
                autoCapitalize="sentences"
                autoCorrect={true}
                value={formatSellingPrice}
                onChangeText={(text) => setSellingPrice(text)}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => (stockQuantityInputRef.current && stockQuantityInputRef.current.focus())}
              />
            </View>
          </View>

          {/**-----------------------------------tamanho------------------------------------ */}
          <View style={styles.row}>
            <View style={{width: 100,}}>
              <Text style={styles.label}>quantidade</Text>
              <TextInput
                ref={stockQuantityInputRef}
                style={styles.input}
                placeholder="..........."
                placeholderTextColor="gray"
                keyboardType="numeric"
                autoCorrect={true}
                value={stockQuantity}
                onChangeText={(text) => setStockQuantity(text)}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => (productSizeInputRef.current && productSizeInputRef.current.focus())}
              />
            </View>

            <View style={{width: 100,}}>
              <Text style={styles.label}>tamanho</Text>
              <TextInput
                ref={productSizeInputRef}
                style={styles.input}
                placeholder="..........."
                placeholderTextColor="gray"
                keyboardType="numeric"
                value={productSize}
                onChangeText={(text) => setProductSize(text)}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => (productDescriptionInputRef.current && productDescriptionInputRef.current.focus())}
              />
            </View>

            <View style={{width: '100%', flex: 1,}}>
              <Text style={styles.label}>Tipo</Text>
              <View style={{borderWidth: 1, height: 50, justifyContent: 'center'}}>
                <Picker
                  selectedValue={sizeTypeSelectValue}
                  onValueChange={(itemValue, itemIndex) => setSizeTypeSelectValue(itemValue)}
                >
                  <Picker.Item label="MM" value="MM" />
                  <Picker.Item label="CM" value="CM" />
                  <Picker.Item label="CIRCUNFERÊNCIA" value="CIRCUNFERÊNCIA" />
                </Picker>
              </View>
            </View>
          </View>

          {/**--------------------------------------------------------------------------- */}
          <Text style={styles.label}>categoria</Text>
          <View style={{borderWidth: 1, height: 50, justifyContent: 'center', marginBottom: 24}}>
            <Picker
              selectedValue={typeSelectValue}
              onValueChange={(itemValue, itemIndex) => setTypeSelectValue(itemValue)}
            >
              <Picker.Item label="SELECIONE UMA CATEGORIA" value="SELECIONE UMA CATEGORIA" />
              <Picker.Item label="ANÉIS" value="ANÉIS" />
              <Picker.Item label="BRINCOS" value="BRINCOS" />
              <Picker.Item label="COLARES" value="COLARES" />
              <Picker.Item label="PINGENTE" value="PINGENTE" />
              <Picker.Item label="PULSEIRAS" value="PULSEIRAS" />
              <Picker.Item label="OUTROS" value="OUTROS" />
            </Picker>
          </View>

          {/**--------------------------------------------------------------------------- */}
          <View style={styles.count}>
            <Text style={styles.label}>descrição do produto</Text>
            <Text>{productDescription.length}/250</Text>
          </View>
          <TextInput
            ref={productDescriptionInputRef}
            style={[styles.input, {textAlignVertical: 'top', paddingVertical: 16}]}
            placeholder=".........."
            placeholderTextColor="gray"
            keyboardType="default"
            autoCapitalize="sentences"
            multiline={true}
            underlineColorAndroid='transparent'
            numberOfLines={5}
            autoCorrect={true}
            value={productDescription}
            onChangeText={handleTextChangeDescription}
            blurOnSubmit={false}
          />
        </View>

        {/**--------------------------------------------------------------------------- */}
      </ScrollView>

      <TouchableOpacity style={styles.handleUpload} onPress={checkAndSendData}>
        <Text style={styles.btnTxt}>salvar</Text>
      </TouchableOpacity>
      {uploadStatus && <Text>{uploadStatus}</Text>}

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  firstCardImgPrimary: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  cardImgPrimary: {
    width: (width - 48) / 4,
    aspectRatio: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    zIndex: 3,
  },
  icon: {
    position: 'absolute',
    zIndex: 1
  },
  handleUpload: {
    height: 50,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  btnTxt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginTop: 24,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  label: {
    textTransform: 'uppercase',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
});
