
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, ImageComponent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import PregSvg from "./pregico.svg"
import Svg, {
    Use,
    Image,
} from 'react-native-svg';
const LoginPage = () => {
    return (
        <View style={styles.container}>
            {/* Header Quadrilateral */}
            <LinearGradient style={styles.header} colors={['#C16DDB', "#C16DDB", 'transparent']}>
                <View style={styles.quadrilateral} />
                <Text style={styles.logo}>Sign In</Text>
            </LinearGradient>
            {/* Login Form */}
            <View style={styles.form}>
                <View style={{ display: "flex", width: "100%", flexDirection: "row", }}>
                    <Icon name='user' size={25} color={"#603A67"} style={{ paddingRight: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#616C6E"
                    />
                </View>
                <View style={{ display: "flex", width: "100%", flexDirection: "row", }}>
                    <Icon name='key' size={25} color={"#603A67"} style={{ paddingRight: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#616C6E"
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <Text> Do not have a account?
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text onMagicTap={() => { }} style={styles.forgotPasswordText}>{" "}Register</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text>PregSafe</Text>
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C6B2D9',
    },
    header: {
        alignItems: 'center',
        backgroundColor: "transparent",
        borderBottomRightRadius: 70,
        marginRight: 10,
        height: 150,
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#616C6E',
        marginBottom: 20,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#9D6D62',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        backgroundColor: 'rgba(52, 130, 142, 0.72)',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#1a73e8',
        fontSize: 14,
    },
    footer: {
        backgroundColor: "#603A67",
        minHeight: 110,
    }
});

export default LoginPage;
