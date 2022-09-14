import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';
import { Heading } from '../../components/Heading';

import logo from '../../assets/logo-nlw-esports.png';


export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <Heading 
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />
    </View>
  );
}