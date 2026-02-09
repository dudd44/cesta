import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';


export default function App() {
  return (
    <SafeAreaView>
      <Text> Eduarda </Text>
      <Sobrenome sobrenome= "Luciano" />
    </SafeAreaView>
  );
}

