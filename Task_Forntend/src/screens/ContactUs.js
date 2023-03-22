/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles/contactStyles';
import {COLORS, SIZES} from '../constants';
import {Button, TextInput} from '../components';
import {setAlert, setQuery} from '../store/Slices/contactSlice';
import {sendQuery} from '../store/APIs/contactUsApi';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const ContactUs = () => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact);
  const [input, setInput] = React.useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  // validate all inputs
  const validate = () => {
    let isValid = true;
    if (input.name === '') {
      isValid = false;
      dispatch(
        setAlert({
          message: 'Please enter your name',
          success: false,
        }),
      );
    } else if (input.mobile === '') {
      isValid = false;
      dispatch(
        setAlert({
          message: 'Please enter your mobile',
          success: false,
        }),
      );
    } else if (input.mobile.length !== 10) {
      isValid = false;
      dispatch(
        setAlert({
          message: 'Please enter a valid mobile number',
          success: false,
        }),
      );
    } else if (input.email === '') {
      isValid = false;
      dispatch(
        setAlert({
          message: 'Please enter your email',
          success: false,
        }),
      );
    } else if (input.message === '') {
      isValid = false;
      dispatch(
        setAlert({
          message: 'Please leave your message',
          success: false,
        }),
      );
    }

    if (!isValid) {
      setTimeout(() => {
        dispatch(
          setAlert({
            message: '',
            success: true,
          }),
        );
      }, 3000);
    } else {
      submitQuery();
    }
  };

  // handle submit query after validation of inputs
  const submitQuery = async () => {
    dispatch(setQuery(input));
    const res = await dispatch(sendQuery());
    if (res.meta.requestStatus === 'rejected') {
      dispatch(setAlert({message: res.payload.message, success: false}));
    } else {
      dispatch(setAlert({success: true, message: res.payload.message}));
    }
    setTimeout(() => {
      dispatch(
        setAlert({
          message: '',
          success: true,
        }),
      );
    }, 3000);
  };

  // handle to set input value
  const handleInput = (key, value) => {
    setInput({...input, [key]: value});
  };

  // handle redirecting to external urls
  const handleLinking = React.useCallback(async url => {
    await Linking.openURL(url);
  }, []);

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={'height'}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={styles.headContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.subTitle}>
              To learn more about how we can collaborate with you to deliver
              reliable and effective products and services, building a
              long-lasting partnership based on mutual success.
            </Text>
            <View style={styles.socialContainer}>
              <Icon
                name="facebook"
                size={SIZES.s18}
                style={styles.socialIcons}
                onPress={() => handleLinking('https://www.facebook.com/')}
              />
              <Icon
                name="linkedin"
                size={SIZES.s18}
                style={styles.socialIcons}
                onPress={() =>
                  handleLinking(
                    'https://www.linkedin.com/company/redpositive-service-opc-pvt-ltd/about/',
                  )
                }
              />
              <Icon
                name="globe"
                size={SIZES.s18}
                style={styles.socialIcons}
                onPress={() => handleLinking('https://www.redpositive.in/')}
              />
            </View>
          </View>
          <Image
            style={styles.contactImage}
            source={require('../assets/images/contact.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label={'Name'}
            value={input.name}
            onChangeText={text => handleInput('name', text)}
            keyboardType={'default'}
            style={styles.textInput}
          />
          <TextInput
            label={'Mobile'}
            value={input.mobile}
            onChangeText={text => handleInput('mobile', text)}
            keyboardType={'numeric'}
            style={styles.textInput}
          />
          <TextInput
            label={'Email'}
            value={input.email}
            onChangeText={text => handleInput('email', text)}
            keyboardType={'email-address'}
            style={styles.textInput}
          />
          <TextInput
            label={'Message'}
            value={input.message}
            onChangeText={text => handleInput('message', text)}
            keyboardType={'default'}
            multipleLine={true}
            inputContainerStyle={styles.inputContainer}
          />
        </View>
      </ScrollView>
      <Button onPress={validate} style={styles.button}>
        {contact.isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color={COLORS.white} />
            <Text style={styles.buttonText}> Submitting...</Text>
          </View>
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </Button>
    </KeyboardAvoidingView>
  );
};

export default ContactUs;
