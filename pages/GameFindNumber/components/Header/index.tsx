import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import colors from "../../contains/color";
import Time from "../Time";

const Header = ({ start, handleTimeOut, highScore }: { start: boolean, highScore: null, handleTimeOut: (_value: boolean) => void }) => {
    return (
        <View style={styles.header}>
            <View style={styles.money}>
                <FontAwesome name="money" size={24} color={colors.one} />
                <Text style={styles.text}>{highScore}</Text>
            </View>
            <View style={styles.clock}>
                <FontAwesome name="clock-o" size={24} color={colors.one} />
                <Text style={styles.text}><Time handleTimeOut={handleTimeOut} start={start} /></Text>
            </View>
        </View>
    );
};

export default Header;
