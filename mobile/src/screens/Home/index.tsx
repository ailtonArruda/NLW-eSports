import { View, Image } from 'react-native';

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

import logo from '../../assets/logo-nlw-esports.png';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <Heading 
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <GameCard 
        data={GAMES[0]}
      />

    </View>
  );
}