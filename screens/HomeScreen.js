import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';

class HomeScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    // this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { security } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageStack}>
          <View style={styles.image2Stack}>
            <Image
              source={require('../assets/images/static/logoo.png')}
              resizeMode='contain'
              style={styles.image1}
            ></Image>
            <Image
              source={require('../assets/images/static/re.png')}
              resizeMode='contain'
              style={styles.imagex}
            />
          </View>
          <View style={styles.rect}>
            <View style={styles.image4StackStack}>
              <View style={styles.image4Stack}>
                <Image
                  source={require('../assets/images/avatar.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image>
                <Text style={styles.useremaEmailCom}>{security.email}</Text>
                <Text style={styles.useremaEmailCom1}>{security.fullname}</Text>
                <Text style={styles.useremaId}>ID: {security.id}</Text>
              </View>
            </View>
          </View>
        </View>
        <StatusBar></StatusBar>
        <TouchableOpacity style={styles.rect2} onPress={this.toggleModal}>
          <View style={styles.image7Row}>
            <Image
              source={require('../assets/images/static/smartphone.png')}
              resizeMode='contain'
              style={styles.image7}
            ></Image>
            <View style={styles.addABookingColumn}>
              <Text style={styles.addABooking}>Add an item</Text>
              <Text style={styles.loremIpsum}>
                A little description about the thing..
              </Text>
            </View>
            <Icon name='md-arrow-dropright' style={styles.icon}></Icon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect2} onPress={this.toggleModal}>
          <View style={styles.image7Row}>
            <Image
              source={require('../assets/images/static/tracking.png')}
              resizeMode='contain'
              style={styles.image7}
            ></Image>
            <View style={styles.addABookingColumn}>
              <Text style={styles.addABooking}>Track Oder</Text>
              <Text style={styles.loremIpsum}>
                A little description about the thing..
              </Text>
            </View>
            <Icon name='md-arrow-dropright' style={styles.icon}></Icon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect2} onPress={this.toggleModal}>
          <View style={styles.image7Row}>
            <Image
              source={require('../assets/images/static/tracking.png')}
              resizeMode='contain'
              style={styles.image7}
            ></Image>
            <View style={styles.addABookingColumn}>
              <Text style={styles.addABooking}>Track Oder</Text>
              <Text style={styles.loremIpsum}>
                A little description about the thing..
              </Text>
            </View>
            <Icon name='md-arrow-dropright' style={styles.icon}></Icon>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12
            }}
          ></View>
        </Modal>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const mapStateToProps = (state) => {
  return { security: state.security.user };
};
export default connect(mapStateToProps, {})(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    // marginTop: 40
  },
  image: {
    top: 0,
    left: 0,
    width: 524,
    height: 445,
    position: 'absolute'
  },
  image_imageStyle: {},
  image2: {
    top: 90,
    left: 265,
    width: 77,
    height: 54,
    position: 'absolute',
    transform: [
      {
        rotate: '-8.00deg'
      }
    ]
  },
  image1: {
    top: 0,
    left: 0,
    width: 300,
    height: 200,
    position: 'absolute'
  },
  imagex: {
    top: 130,
    left: 250,
    width: 90,
    height: 90,
    position: 'absolute'
  },
  image2Stack: {
    width: 342,
    height: 209,
    marginTop: 99,
    marginLeft: 90
  },
  rect: {
    top: 348,
    left: 132,
    width: 265,
    height: 123,
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    overflow: 'visible'
  },
  image4: {
    top: 10,
    left: 0,
    width: 120,
    height: 113,
    position: 'absolute'
  },
  image4_imageStyle: {},
  image5: {
    width: 76,
    height: 47,
    marginTop: 25,
    marginLeft: 22
  },
  useremaEmailCom: {
    top: 22,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  useremaEmailCom1: {
    top: 45,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  useremaId: {
    top: 77,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  image4Stack: {
    top: 0,
    left: 0,
    width: 245,
    height: 113,
    position: 'absolute'
  },
  image6: {
    top: 67,
    left: 218,
    width: 41,
    height: 46,
    position: 'absolute'
  },
  image4StackStack: {
    width: 259,
    height: 113,
    marginTop: 5
  },
  imageStack: {
    width: 524,
    height: 471,
    marginTop: -120,
    marginLeft: -69
  },
  rect2: {
    width: 314,
    height: 78,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    marginTop: 32,
    marginLeft: 40
  },
  image7: {
    width: 72,
    height: 71
  },
  addABooking: {
    width: 100,
    height: 20,
    color: '#1D446F',
    fontFamily: 'comicneuebold'
  },
  loremIpsum: {
    width: 150,
    height: 90,
    color: '#1D446F',
    marginTop: 3,
    fontFamily: 'comicneueregular'
  },
  addABookingColumn: {
    width: 150,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 25
  },
  icon: {
    color: '#1D446F',
    fontSize: 54,
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 20
  },
  image7Row: {
    height: 71,
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 25,
    marginRight: 11
  },
  rect5: {
    width: 139,
    height: 78,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    flexDirection: 'row',
    marginTop: 1,
    left: 20
  },
  image9: {
    width: 62,
    height: 64
  },
  checkParcel: {
    width: 49,
    height: 50,
    color: '#1D446F',
    marginLeft: 10,
    marginTop: 18,
    fontFamily: 'comicneuebold'
  },
  image9Row: {
    height: 64,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 10,
    marginTop: 7
  },
  rect4: {
    width: 145,
    height: 78,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    flexDirection: 'row',
    marginLeft: 50
  },
  image8: {
    width: 62,
    height: 64
  },
  checkHistory: {
    width: 49,
    height: 50,
    color: '#1D446F',
    marginLeft: 10,
    marginTop: 20,
    fontFamily: 'comicneuebold'
  },
  image8Row: {
    height: 64,
    flexDirection: 'row',
    flex: 1,
    marginRight: 19,
    marginLeft: 11,
    marginTop: 6
  },
  rect5Row: {
    height: 79,
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 23,
    marginRight: 22
  }
});
