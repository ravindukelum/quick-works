import React, { useEffect } from "react";
import { Image,ImageBackground,Text, SafeAreaView, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";

export default function QrCodePage({ }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground style={styles.bgimg} source={require('../assets/backgroundimg.png')} >
            <Image style={{width:300,height:300,alignSelf:"center",marginTop:"50%"}} source={require('../assets/qrcode.png')} />
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
  bottumScreen: {
    
    bottom: 0,
    width: width,
    height: height / 3,
    backgroundColor: '#3330E4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
});
