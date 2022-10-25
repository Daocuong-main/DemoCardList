import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const WelcomeBack = () => (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} style={styles.imageLogo}></Image>
        </View>
        <View style={styles.titleView}>
            <Text style={styles.loginTitle}>Welcome Back</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput placeholder="Email" style={styles.textInput}/>
            <TextInput placeholder="Password" style={styles.textInput}/>
            <View style={styles.forgotText}>
                <Text>Forgot your password?</Text>
            </View>
        </View>
        <View style={styles.touchView}>
            <TouchableOpacity style={styles.touchStyle}>
                <Text style={styles.textSubmit}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    logo: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        height: 170,
        width: 170,
    },
    titleView: {
        flex: 0.3
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        color: '#b104fc'
    },
    inputView: {
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        borderColor: "#000000",
        marginBottom: 20,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5
    },
    forgotText: {
        marginTop: -15,
        alignItems: 'flex-end'
    },
    touchView: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        alignItems: 'center',
    },
    touchStyle: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#0d16bd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d16bd'
    },
    textSubmit: { 
        fontSize: 15, 
        fontWeight: 'bold',
        color: 'white'
    }
})

export default WelcomeBack;