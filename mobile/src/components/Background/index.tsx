import { ImageBackground } from "react-native";
import { styles } from "./styles";
import backgroundImg from "../../assets/background-galaxy.png"


interface Porps {
    children: React.ReactNode;
}

export default function Background({ children}: Porps) {
    return (
        <ImageBackground 
            source={backgroundImg}
            defaultSource={backgroundImg} // speed up image loading
            style={styles.container}
        >
            { children }
        </ImageBackground>
    );
}