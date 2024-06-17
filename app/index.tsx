import Onboarding from 'react-native-onboarding-swiper';

import { StatusBar } from 'expo-status-bar';
import {Image, Platform, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {useTheme} from "@react-navigation/native";

export default function ModalScreen() {
const theme =useTheme()
  return (
 <>
   <Onboarding
       pages={[
         {
           backgroundColor: theme.colors.background,
image: <Image source={require('../assets/images/onboard-1.png')} />,
           title: 'Numerous free trial courses',
           subtitle: 'Free courses for you to \n' +
               'find your way to learning',
         }]}
   />
 </>
  );
}


