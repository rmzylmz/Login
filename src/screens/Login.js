import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
class Login extends Component {

    static navigationOptions = {
        headerTransparent: true,
        headerStyle: { borderBottomWidth: 0 }
    };

    constructor() {
        super();
        this.state = { hidePassword: true }
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {

        return (
            <View style={{ ...styles.container }}>
  
                <View style={{ ...StyleSheet.absoluteFill }} >
                    <Image
                        source={require('../assets/signupbg.png')}
                        style={styles.bgWrapper}
                    />
                </View>

                <View style={{ ...styles.containerlogin }}>

                    <View style={{ ...styles.login_name }}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textBox} />

                    </View>

                    <View style={{ ...styles.login_passaword }}>
                        <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} />
                        <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                            <Image source={(this.state.hidePassword) ? require('../assets/hide.png') : require('../assets/view.png')} style={styles.btnImage} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.signup }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                source={require('../assets/signup.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',justifyContent: 'center',marginBottom:10,marginTop:-18 }}>
                        <Image
                            source={require('../assets/or.png')}
                        />                        
                    </View>

                    <View style={{ alignItems:'center',justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                source={require('../assets/face-twitter.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems:'center',justifyContent: 'center',padding:20 }}>
                         <Text>RamazanRamazanRamazanRamazanRamazanRamazanRamazanRamazanRamazanRamazan</Text>
                    </View>
                </View>
            </View>

        )
    }
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'

    },
    signup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
     
    bgWrapper: {
        height: hp('100%'), // 100% of height device screen
        width: wp('100%')   // 100% of width device screen
    },

    containerlogin: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',

    },

    login_name: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 35,
        borderRadius: 5,
    },
    login_passaword: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 35,
        backgroundColor: 'white',
    },

    textBox:
    {
        fontSize: 18,
        alignSelf: 'stretch',
        height: 55,
        paddingRight: 45,
        paddingLeft: 8,
     
        paddingVertical: 0,
         
    },

    visibilityBtn:
    {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5
    },

    btnImage:
    {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    }
});