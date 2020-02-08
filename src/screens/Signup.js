import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Signup extends Component {
    static navigationOptions = {
        headerTransparent: true,
        headerStyle: { borderBottomWidth: 0}
        };
      
    render() {
       
        return (

            <View style={{ flex: 1, justifyContent: 'flex-end' }} >
                <View style={{ ...StyleSheet.absoluteFill }} >
                    <Image
                        source={require('../assets/loginbg.png')}
                        style={{ flex: 1, height: height, width: width }}
                    />
                </View>

                <View style={{ justifyContent: 'center' }}>

                    <View style={{ ...styles.face }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                source={require('../assets/face.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.twitter }}>                        
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                source={require('../assets/twitter.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.or }}>
                        <Image
                            source={require('../assets/or.png')}
                        />                        
                    </View>

                    <View style={{ ...styles.signup }}>                        
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                source={require('../assets/signup.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 25 }}>
                        <Text>Alreyd have in account</Text>
                    </View>


                </View>
            </View>
        );
    }
}
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    face: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 1

    },
    twitter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1,
        marginVertical: -5
    },
    or: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 17
    }
    ,
    signup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: -7
    }
});
