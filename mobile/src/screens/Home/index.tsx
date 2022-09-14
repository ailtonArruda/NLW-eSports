import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import logo from '../../assets/logo-nlw-esports.png';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}