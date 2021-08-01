import React, { Component } from 'react'
import { Text, View, Button, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { Input, Center, NativeBaseProvider } from "native-base"
import AuthStyles from './AuthStyles';
import images from '../../assets/images';
import { Formik, Form } from 'formik';
import { LoginSchema } from '../../shares/validation/LoginSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading';


export default class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    _onLoginPress = async (values) => {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
        const user = { email: values.email, password: values.password };
        await AsyncStorage.setItem("user_login", JSON.stringify(user));
   
        this.props.navigation.replace('DrawerRouter');
    }

    render() {
        const { email, password } = this.state;
        const { navigation } = this.props;
        return (

            <NativeBaseProvider style={AuthStyles.container}>
                <Loading loading={this.state.isLoading} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={AuthStyles.body}>
                            <Image source={images.nameLogo} style={AuthStyles.logo} />
                            <Formik
                                initialValues={{ email: email, password: password }}
                                validationSchema={LoginSchema}
                                onSubmit={(values, actions) => this._onLoginPress(values)}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (


                                    <View style={AuthStyles.wrapperForm} >
                                        <Input
                                            _focus="false"
                                            placeholder="Phone number, email or username"
                                            type="email"
                                            name="email"
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            value={values.email}
                                            style={AuthStyles.input}
                                        />
                                        {errors.email && touched.email ? (
                                            <Text style={{ color: "red" }}>{errors.email}</Text>
                                        ) : null}
                                        <Input
                                            _focus="false"
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            value={values.password}
                                            style={AuthStyles.input}
                                        />
                                        {errors.password && touched.password ? (
                                            <Text style={{ color: "red" }}>{errors.password}</Text>
                                        ) : null}
                                        {/* <Button type="submit" onPress={handleSubmit} title="Submit" style={AuthStyles.btnSubmit} /> */}
                                        <TouchableOpacity onPress={handleSubmit} style={AuthStyles.btnSubmit}>
                                            <Text style={AuthStyles.btnSubmitText}>Log in</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>
                            <Text>Forget your login details? Get help signing in.</Text>
                            <View style={AuthStyles.wrapperOr}>
                                <View style={AuthStyles.line} />
                                <Text style={AuthStyles.txtOr}>OR</Text>
                                <View style={AuthStyles.line} />
                            </View>
                            <View style={AuthStyles.wrapperLoginFB}>
                                <Image source={images.facebook} style={AuthStyles.logoFb} />
                                <TouchableOpacity>
                                    <Text style={AuthStyles.txtLoginFB}>Log in with Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={AuthStyles.footer}>
                        <Text>Dont't have an account? </Text>
                        <TouchableOpacity>
                            <Text>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </NativeBaseProvider >

        )
    }
}
