
import React, { useEffect } from "react";
import { Image, ImageBackground, Text, SafeAreaView, TouchableOpacity, View, StyleSheet, Dimensions, Pressable } from "react-native";

export default function Approved({ }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ImageBackground style={styles.bgimg} source={require('../assets/backgroundimg.png')} >

                    <View style={styles.mainView}>
                        <Text style={{ color: "white", fontSize: 20 }}>Gutter to clean</Text>
                        <Text style={{ color: "white", fontSize: 12 }}>clean the gutters</Text>

                        <Pressable style={styles.buttonpress}>
                            <Text style={{ color: "white", fontSize: 15 }}>Start Job</Text>
                        </Pressable>

                    </View>

                </ImageBackground>
            </SafeAreaView>

        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bgimg: {
        flex: 1,
        width: width,
        height: height,
    },

    mainView: {
        width: "98%",
        height: 189,
        backgroundColor: '#3330E4',
        borderRadius: 20,
        padding: 20,
        marginTop: "50%",
        marginLeft: "1%",
        alignItems: "flex-start", 
        justifyContent: "space-evenly",
    },
    buttonpress: { 
        backgroundColor: "#FFC436", 
        padding: 10, 
        borderRadius: 26.5, 
        marginTop: 10,
        height: 53, 
        width: "95%", 
        justifyContent: "center",  
        alignItems: "center",  
    },
});
