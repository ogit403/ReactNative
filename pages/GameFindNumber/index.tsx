import {
    Text,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from "react-native";
import React from "react";

import image from "./../../assets/image/bg.png";
import styles from "./style";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";

const GameFindNumber = () => {
    return (
        <>
            <StatusBar hidden />
            <ImageBackground style={styles.container} source={image}>
                <SafeAreaView>
                    <Header />
                    <Content />
                    <Modal />
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default GameFindNumber;
