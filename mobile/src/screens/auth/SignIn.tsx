import { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Button, 
  KeyboardAvoidingView, 
  Platform, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'

export default function SignIn({navigation}) {
  const inputPass: React.MutableRefObject<any> = useRef();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [getVerification, setVerification] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const checking = () => {
    setVerification(true);

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Conta cadastrada com sucesso!");
    })
    .catch((error) => console.log(error))
    .finally(() => setVerification(false));
  }

  /** FUNCTIONS ROUTES */
  function signUp() {
    navigation.navigate('SignUp', {});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboard}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Olá e seja bem-vindo!{'\n'}Estamos animados por tê-lo aqui</Text>
        </View>

        <View style={styles.form}>
          <Text>E-mail</Text>
          <View style={styles.boxInput}>
            <View style={styles.boxIcon}>
              <Entypo name="email" size={24} color="#505050" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#aaaaaa"
              keyboardType="default"
              value={email}
              onChangeText={(text) => setEmail(text)}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => (inputPass.current && inputPass.current.focus())}
            />
          </View>

          <Text>Senha</Text>
          <View style={styles.boxInput}>
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons name="form-textbox-password" size={24} color="#505050" />
            </View>
            <TextInput
              style={styles.input}
              ref={inputPass}
              placeholder="******"
              placeholderTextColor="#aaaaaa"
              keyboardType="default"
              autoCapitalize="sentences"
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="send"
              blurOnSubmit={false}
              onSubmitEditing={() => checking()}
              secureTextEntry={isPasswordHidden}
            />
            <TouchableOpacity style={styles.boxIcon} onPress={togglePasswordVisibility}>
              <FontAwesome name={isPasswordHidden ? "eye-slash" : "eye"} size={24} color="#505050" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnForgot}>
            <Text style={styles.txtForgot}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {!getVerification ? 
            <TouchableOpacity style={styles.btn} onPress={() => checking()}>
              <Text style={styles.txtBtn}>entrar</Text>
            </TouchableOpacity>
          :
            <View style={styles.btn}>
              <ActivityIndicator color='#fff' size="large" />
            </View>
          }
        </View>

        <View style={styles.decoration}>
          <View style={styles.line} />
          <Text style={styles.text}>acompanhe nas redes sociais</Text>
        </View>

        <View style={styles.boxSocial}>
          <TouchableOpacity style={styles.btnSocial}>
            <FontAwesome name="youtube-play" size={32} color="red" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSocial}>
            <FontAwesome name="instagram" size={32} color="#E22B41" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSocial}>
            <FontAwesome name="linkedin" size={24} color="blue" />
          </TouchableOpacity>
        </View>

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    marginTop: 60,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#404040',
  },

  form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 25,
  },

  boxInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    marginBottom: 24,
  },

  input: {
    flex: 1,
    height: 60,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxIcon: {
    minHeight: 60,
    maxHeight: 60,
    minWidth: 60,
    maxWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnForgot: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  txtForgot: {
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: '#E22B41'
  },

  btn: {
    height: 60,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#E22B41',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtBtn: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: "#fff",
  },

  decoration: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 25,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#e22b4032',
    position: 'absolute'
  },

  text: {
    fontSize: 11,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    textTransform: 'uppercase',
    paddingHorizontal: 8,
    color: '#bebebe'
  },

  boxSocial: {
    marginTop: 25,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  btnSocial: {
    minHeight: 65,
    maxHeight: 65,
    minWidth: 65,
    maxWidth: 65,
    borderWidth: 1,
    borderRadius: 65/2,
    borderColor: '#c9c9c9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxLink: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  link: {
    color: '#000',
  },
});