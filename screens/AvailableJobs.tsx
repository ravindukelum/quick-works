import React, { useState } from "react";
import { SafeAreaView, Image, ImageBackground, View, Text, TextInput, Pressable, StyleSheet, Dimensions } from "react-native";

export default function AvailableJobs({ }) {
    const [isBringingGoods, setIsBringingGoods] = useState(false);

    const toggleBringingGoods = () => {
        setIsBringingGoods(!isBringingGoods);
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ImageBackground style={styles.bgimg} source={require('../assets/backgroundimg.png')} >
                    <View style={styles.mainView}>

                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={{ fontSize: 30, color: "white" }}>Available Jobs</Text>
                            </View>
                            <View style={styles.column}>
                                <Image style = {styles.logo} source = {require('../assets/plumber.png')} />
                            </View>
                        </View>
                    </View>


                    <View style={styles.row2}>
                        <View style={styles.column}>
                            <Text style={{ color: "white", fontSize: 20 }}>Gutter to clean</Text>
                        </View>
                        <View style={styles.column}>
                            <Pressable style={styles.Button}>
                                <Text style={{ color: "white", fontSize: 15 }}>View Job</Text>
                            </Pressable>
                        </View>
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
        backgroundColor: '#3330E4',
        borderRadius: 20,
        padding: 20,
        marginTop: "30%",
        marginLeft: "1%",
        height: 191,
        alignItems: "center",
        justifyContent: "space-between",
    },
    row: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    toggleButton: {
        backgroundColor: "#FFC436",
        padding: 10,
        borderRadius: 10,
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    row2: {
        backgroundColor: "#3330E4",
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10%",
        marginLeft: "1%",
        borderRadius: 20,
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 150,
        height: 150,
        marginBottom: 20,
      },
    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },

    Button: {
        backgroundColor: "#FFC436",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        height: 53,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
    },
});
