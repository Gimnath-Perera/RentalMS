import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class UserDetailedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageStack}>
          {/* <Image
            source={require('../assets/images/example_plant.jpg')}
            resizeMode='contain'
            style={styles.image}
          ></Image> */}
          <View style={styles.rect}>
            <View style={styles.amarylissPotatoColumnRow}>
              <View style={styles.amarylissPotatoColumn}>
                <Text style={styles.amarylissPotato}>Account ID: #OR78265</Text>
                <View style={styles.image3Row}>
                  {/* <Image
                    source={require('../assets/images/check.png')}
                    resizeMode='contain'
                    style={styles.image3}
                  ></Image> */}
                  <Text style={styles.maimoSweden}>Description: -</Text>
                </View>
              </View>
              {/* <Image
                source={require('../assets/images/green.png')}
                resizeMode='contain'
                style={styles.image2}
              ></Image> */}
            </View>
            <View style={styles.rect2}>
              <View style={styles.image4Row}>
                {/* <Image
                  source={require('../assets/images/summer.png')}
                  resizeMode='contain'
                  style={styles.image4}
                ></Image> */}
                <Text style={styles.needSunlight}>Full Name: </Text>
                {/* <Image
                  source={require('../assets/images/watering.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image> */}
                <Text style={styles.waterWeekly}>User name</Text>
              </View>
            </View>

            <View style={styles.rect2}>
              <View style={styles.image4Row}>
                {/* <Image
                  source={require('../assets/images/summer.png')}
                  resizeMode='contain'
                  style={styles.image4}
                ></Image> */}
                <Text style={styles.needSunlight}>Email: </Text>
                {/* <Image
                  source={require('../assets/images/watering.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image> */}
                <Text style={styles.waterWeekly}>test@gmail.com</Text>
              </View>
            </View>
            <View style={styles.rect2}>
              <View style={styles.image4Row}>
                {/* <Image
                  source={require('../assets/images/summer.png')}
                  resizeMode='contain'
                  style={styles.image4}
                ></Image> */}
                <Text style={styles.needSunlight}>Mobile: </Text>
                {/* <Image
                  source={require('../assets/images/watering.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image> */}
                <Text style={styles.waterWeekly}>+942729729</Text>
              </View>
            </View>
            <View style={styles.rect2}>
              <View style={styles.image4Row}>
                {/* <Image
                  source={require('../assets/images/summer.png')}
                  resizeMode='contain'
                  style={styles.image4}
                ></Image> */}
                <Text style={styles.needSunlight}>Status: </Text>
                {/* <Image
                  source={require('../assets/images/watering.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image> */}
                <Text style={styles.waterWeekly}>Active</Text>
              </View>
            </View>
            <View style={styles.rect3}>
              <Text style={styles.loremIpsum2}>Notes</Text>
              <Text style={styles.loremIpsum1}>
                Spot of come to ever hand as lady meet on. Delicate contempt
                received two yet advanced.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default UserDetailedScreen;
// comicneuebold
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    width: 482,
    height: 315,
    position: 'absolute',
    left: 0
  },
  rect: {
    top: 249,
    left: 77,
    width: 360,
    height: 469,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27
  },
  amarylissPotato: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    fontSize: 20,
    marginLeft: 2,
    width: 200
  },
  floatTxt: { top: 3, left: 4, color: 'white', fontFamily: 'comicneuebold' },
  floatBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    position: 'absolute',
    bottom: 20,
    right: 15,
    height: 45,
    backgroundColor: '#195F57',
    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 7,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  image3: {
    width: 21,
    height: 15,
    marginTop: 1
  },
  maimoSweden: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 3
  },
  image3Row: {
    height: 17,
    flexDirection: 'row',
    marginTop: 9,
    marginRight: 35
  },
  amarylissPotatoColumn: {
    width: 159
  },
  image2: {
    width: 59,
    height: 46,
    marginLeft: 111
  },
  amarylissPotatoColumnRow: {
    height: 54,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 16,
    marginRight: 15
  },
  rect2: {
    width: 326,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 18,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  image4: {
    width: 20,
    height: 20
  },
  needSunlight: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 7,
    marginTop: 2
  },
  image5: {
    width: 25,
    height: 20,
    marginLeft: 69
  },
  waterWeekly: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 2,
    marginTop: 2
  },
  image4Row: {
    height: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 20,
    marginLeft: 12,
    marginTop: 15
  },
  rect3: {
    width: 326,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 30,
    marginLeft: 18,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  loremIpsum1: {
    fontFamily: 'comicneueregular',
    color: '#121212',
    width: 315,
    height: 176,
    textAlign: 'justify',
    marginTop: 30,
    marginLeft: 6
  },
  loremIpsum2: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    textAlign: 'justify',
    fontSize: 15,
    top: 10,
    marginLeft: 6
  },
  imageStack: {
    width: 482,
    height: 718,
    marginTop: -16,
    marginLeft: -61
  }
});
