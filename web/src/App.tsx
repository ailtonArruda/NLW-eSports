import './styles/main.css';

import logo from './asets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo"/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent '>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner gameUrl='img_1.png' title='League of Legends' ads={5}/>
        <GameBanner gameUrl='img_2.png' title='Dota 2' ads={5}/>
        <GameBanner gameUrl='img_3.png' title='Counter-Strike: Global Offensive' ads={5}/>
        <GameBanner gameUrl='img_4.png' title='World of Warcraft' ads={5}/>
        <GameBanner gameUrl='img_5.png' title='Apex Legends' ads={5}/>
        <GameBanner gameUrl='img_6.png' title='Fortinite' ads={5}/>
      </div>

      <CreateAdBanner />      
    </div>
  )
}

export default App
