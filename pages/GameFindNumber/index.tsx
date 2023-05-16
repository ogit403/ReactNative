import {
    Text,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";

import image from "../../assets/image/bg.png";
import styles from "./style";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";

let bgs = [styles.one, styles.two,  styles.three, styles.four, styles.five];
for (let i = 1; i <= 10; i++) {
  bgs = bgs.concat(bgs);
}

const suffle = (array: any[]) => array.sort( () => .5 - Math.random() );
const initial = suffle(Array.from({ length: 50 }, (_, index: number) => index + 1));
const inititalBg = suffle(bgs);

interface Background {
    backgroundColor: string;
    color: string;
}

const GameFindNumber = () => {
    const [items, setItems] = useState<number[]>(initial);
    const [bg, setBg] = useState<Background[]>(inititalBg);
    const [start, setStart] = useState(false);
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = useState(false);
    const [highScore, setHighScore] = useState(0);

    const onChoice = (value: number) => {
        if (value === 1) {
            setStart(true);
        }

        if (current === value) {
            setCurrent(current + 1);
        } else {
            if (value > highScore) {
                setHighScore(Number(current) - 1);
            }

            setStart(false)
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
        setStart(false);
        setCurrent(1);
        setItems([...initial])
        setBg([...inititalBg])
    }

    const handleTimeOut = (value: boolean) => {
        if (value) {
            if (current - 1 > highScore) {
                setHighScore(Number(current) - 1);
            }
    
            setStart(false);
            setOpen(true);
        }
    }

    return (
        <>
            <StatusBar hidden />
            <ImageBackground style={styles.container} source={image}>
                <SafeAreaView>
                    <Header highScore={highScore} handleTimeOut={handleTimeOut} start={start} />
                    <Content bg={bg} items={items} score={current - 1} onChoice={onChoice} />
                    <Modal open={open} handleClose={handleClose} score={current - 1} />
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default GameFindNumber;
