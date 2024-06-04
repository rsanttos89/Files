import { StyleSheet, View, TouchableOpacity, Platform, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function CustomTabBar({ state, descriptors, navigation }) {
  /** KEYBOARD STATUS */
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  const [nameProduct, setNameProduct] = useState('');
  const handleTextChange = (text) => {
    // Limitar o texto a 16 caracteres
    if (text.length <= 16) {
      setNameProduct(text);
    }
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
  }, []);

  return (
    <View style={[styles.container, {display: keyboardStatus === false  ?  'flex' : 'none'}]}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key} // Adicionado uma chave única para cada TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton} // Adicionado um estilo para o botão
            >
              <View style={{ alignItems: 'center', paddingHorizontal: 4, paddingVertical: 4 }}>
                <View style={[styles.innerButton, {backgroundColor: isFocused ? 'rgb(223,184,190)' : '#f9f9f9'}]}>
                  <FontAwesome 
                    color={isFocused ? '#fff' : '#ccc'}
                    name={options.tabBarIcon}
                    size={24}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    gap: 8,
    borderRadius: 40,
    flexDirection: 'row', // Alterado para row para exibir os botões na mesma linha
    backgroundColor: '#fff', // Adicionado uma cor de fundo para o container
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
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
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'transparent', // Adicionado uma borda inferior inicialmente transparente
  },
  innerButton: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4, 
    borderRadius: 99,
  }
});
