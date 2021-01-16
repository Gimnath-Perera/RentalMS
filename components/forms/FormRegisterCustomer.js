import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Picker
} from 'react-native';
import { Item, Icon, Input } from 'native-base';

import { userSignUp } from '../../store/actions';

class FormRegisterCustomer extends Component {
  state = {
    fullname: '',
    password: '',
    email: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.customer !== prevProps.customer) {
      alert('Account created successfully');

      this.props.navigation.navigate('LoginCustomer');
    }
  }

  onSubmit = () => {
    const { fullname, email, password } = this.state;
    if (fullname == '') {
      alert('Fullname is required');
    } else if (email == '') {
      alert('Email is required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert('Invalid email');
    } else if (password == '') {
      alert('Password is required');
    } else {
      const newUser = {
        username: email,
        fullName: fullname,
        password,
        confirmPassword: password,
        type: 'customer'
      };

      // console.log(newUser);
      this.props.userSignUp(newUser);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image1Stack}>
          <Image
            source={require('../../assets/images/blob.png')}
            resizeMode='contain'
            style={styles.image1}
          ></Image>

          <View style={styles.group}>
            <TouchableOpacity
              style={styles.materialButtonPrimary1}
              onPress={this.onSubmit}
            >
              <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          source={require('../../assets/images/blob.png')}
          resizeMode='contain'
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <View style={styles.image22Row}>
            <Image
              source={require('../../assets/images/static/freeshipping.png')}
              resizeMode='contain'
              style={styles.image22}
            ></Image>
            <Text style={styles.login}>SIGNUP</Text>
          </View>
        </ImageBackground>
        <StatusBar
          animated={true}
          backgroundColor='white'
          barStyle='dark-content'
          hidden={false}
        ></StatusBar>

        <View style={{ paddingBottom: 15, paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#1D446F', fontFamily: 'comicneuebold' }}>
            Fullname
          </Text>

          <Item>
            <Icon active name='md-person' />
            <Input
              placeholder='Enter your fullname'
              onChangeText={(value) => {
                this.setState({ fullname: value });
              }}
            />
          </Item>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#1D446F', fontFamily: 'comicneuebold' }}>
            Email
          </Text>

          <Item>
            <Icon active name='md-mail' />
            <Input
              placeholder='Enter your email'
              onChangeText={(value) => {
                this.setState({ email: value });
              }}
            />
          </Item>
          <Text></Text>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#1D446F', fontFamily: 'comicneuebold' }}>
            Passwords
          </Text>

          <Item>
            <Icon active name='md-key' />
            <Input
              placeholder='Enter your password'
              onChangeText={(value) => {
                this.setState({ password: value });
              }}
              secureTextEntry={true}
            />
          </Item>

          <Picker
            selectedValue={1}
            style={{
              height: 20,
              width: 165,
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              color: '#1D446F',
              right: 24,
              top: 20
            }}
            onValueChange={(itemValue, itemIndex) => {
              this.props.statusChangeBooking(id, itemValue);
            }}
          >
            <Picker.Item label='Admin' value={1} />
            <Picker.Item label='Leaser' value={2} />
            <Picker.Item label='Lessee' value={3} />
          </Picker>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { customer: state.customer };
};

export default connect(mapStateToProps, {
  userSignUp
})(FormRegisterCustomer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image1: {
    top: 90,
    left: 59,
    width: 309,
    height: 415,
    position: 'absolute',
    transform: [
      {
        rotate: '91.00deg'
      }
    ]
  },
  group: {
    top: 180,
    left: 0,
    width: 121,
    height: 40,
    position: 'absolute'
  },
  materialButtonPrimary1: {
    width: 121,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'rgba(74,144,226,1)',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontFamily: 'comicneuebold'
  },
  image1Stack: {
    width: 368,
    height: 432,
    marginTop: 423,
    marginLeft: 25
  },
  image2: {
    width: 496,
    height: 473,
    flexDirection: 'row',
    marginTop: -1040,
    marginLeft: -182
  },

  image22: {
    width: 200,
    height: 200,
    left: 15
  },
  login: {
    color: '#1D446F',
    fontSize: 40,
    marginLeft: 0,
    fontFamily: 'comicneuebold',
    marginTop: 170
  },
  image22Row: {
    height: 240,
    flexDirection: 'row',
    flex: 1,
    marginRight: 14,
    marginLeft: 160,
    marginTop: 200
  }
});
