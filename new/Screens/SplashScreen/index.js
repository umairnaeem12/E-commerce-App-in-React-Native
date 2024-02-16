import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AnimatedSplash from "react-native-animated-splash-screen";

const Splash = () => {
    return (
        <View style={styles.main}>
            <AnimatedSplash
                translucent={true}
                isLoaded={this.state.isLoaded}
                logoImage={require("./assets/logo.png")}
                backgroundColor={"#262626"}
                logoHeight={150}
                logoWidth={150}
            >
                <App />
            </AnimatedSplash>
        </View>
    )
}

export default Splash