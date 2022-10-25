import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const CreateAccount = () => (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} style={styles.imageLogo}></Image>
        </View>
        <View>
            <Text style={styles.loginTitle}>Create Account</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput placeholder="Username" style={styles.textInput}/>
            <TextInput placeholder="Password" style={styles.textInput}/>
            <TextInput placeholder="Email" style={styles.textInput}/>
        </View>
        <View style={styles.touchView}>
            <TouchableOpacity style={styles.touchStyle}>
                <Text style={styles.textSubmit}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 10}}>Aready have an account? <Text style={{color: '#0d16bd', fontWeight: 'bold'}}>Login</Text></Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    logo: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        height: 170,
        width: 170
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        color: '#b104fc'
    },
    inputView: {
        margin: 30,
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        borderColor: "#000000",
        margin: 10,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5
    },
    touchView: {
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center' 
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

export default CreateAccount;