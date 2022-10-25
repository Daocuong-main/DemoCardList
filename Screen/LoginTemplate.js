import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginTemplate = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} style={styles.imageLogo}></Image>
        </View>
        <View style={styles.titleView}>
            <Text style={styles.loginTitle}>Login Template</Text>
        </View>
        <View style={styles.contentView}>
            <Text style={styles.textContent}>The easiest way to start with your amazing application</Text>
        </View>
        <View style={styles.touchView}>
            <TouchableOpacity style={styles.touchLogin} onPress={()=>{navigation.navigate('WelcomeBack')}}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchSignUp} onPress={()=>{navigation.navigate('CreateAccount')}}>
                <Text style={styles.textSignUp}>SIGN UP</Text>
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
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        height: 170,
        width: 170
    },
    titleView: {
        marginTop: 10
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        color: '#b104fc'
    },
    contentView: { 
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 10,
        paddingBottom: 10
    },
    textContent: {
        fontSize: 18,
        textAlign: 'center'
    },
    touchView: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center'
    },
    touchLogin: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#0d16bd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d16bd',
        marginBottom: 20
    },
    touchSignUp: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    textLogin: { 
        fontSize: 15, 
        fontWeight: 'bold',
        color: 'white'
    },
    textSignUp: { 
        fontSize: 15, 
        fontWeight: 'bold',
        color: '#0d16bd'
    }
})

export default LoginTemplate;