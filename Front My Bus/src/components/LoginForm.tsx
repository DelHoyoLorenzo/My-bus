import { View, Text, TextInput, Button } from "react-native";

const LoginForm = () => {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Enviar" onPress={()=>{console.log('hola');
      }} />
    </View>
  );
};

export default LoginForm;
