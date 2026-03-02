import { View } from 'react-native';
import Cesta from './src/Telas/Cesta';
import { SafeAreaView } from 'react-native-web';

import {
      useFonts,
      Montserrat_400Regular,
      Montserrat_700Bold
    } from '@expo-google-fonts/montserrat' ;

import {
      useFonts,
      Cinzel_400Regular,
      Cinzel_700Bold
    } from '@expo-google-fonts/cinzel' ;


export default function App() {
const [fontCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold
});

const [fontCarregada2] = useFonts({
  "CinzelRegular": Cinzel_400Regular,
  "CinzelBold": Cinzel_700Bold
});

if(!fontCarregada){
  return <h1>Naõa</h1>
}

if(!fontCarregada2){
  return<View />
}


  return (
    <SafeAreaView>
      <Cesta />
    </SafeAreaView>
  );
}

