import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

const DATA = [
  { id: 1, name: 'Alder', species: 'Alnus' },
  {
    id: 2,
    name: 'Black alder',
    species: 'Alnus glutinosa, Ilex verticillata'
  },
  { id: 3, name: 'Common alder', species: 'Alnus glutinosa' },
  { id: 4, name: 'False alder', species: 'Ilex verticillata' },
  { id: 5, name: 'Gray alder', species: 'Alnus incana' }
];

class AdminHomeScreen extends Component {
  renderUser = (plant) => {
    return (
      <TouchableOpacity
        style={styles.rect3}
        onPress={() => {
          this.props.navigation.navigate('UserDetailed');
        }}
      >
        <View style={styles.rect6Row}>
          <View style={styles.potatoEralyBrightColumn}>
            <Text style={styles.potatoEralyBright}>User ID: #OR46585</Text>
            <Text style={styles.mangoAppleOrange}>078264246</Text>
            <Text style={styles.fungens}>Active</Text>
          </View>
          <View style={{ flexDirection: 'row', top: 50 }}>
            <TouchableOpacity
              onPress={() => this.toggleModal(booking.item)}
              style={{ right: 10 }}
            >
              <Icon
                name='md-create'
                style={{ color: '#064070', fontSize: 24 }}
              ></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onDeleteBooking(booking.item.id)}
            >
              <Icon
                name='md-trash'
                style={{ color: 'red', fontSize: 24 }}
              ></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect2Stack}>
          <FlatList
            data={DATA}
            contentContainerStyle={{
              paddingBottom: 100
            }}
            renderItem={this.renderUser}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.image3Stack}>
          <View style={styles.rect}>
            <View style={styles.otherColumnRow}>
              <View style={styles.otherColumn}>
                <Text style={styles.other}>User Management</Text>
                <Text style={styles.pestsDiseases}>
                  Registered users in the system
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                left: 20,
                backgroundColor: '#5BB59B',
                borderRadius: 12,
                width: '50%',
                height: 30,
                padding: 5,
                flexDirection: 'row',
                bottom: 10
              }}
            >
              <Text style={{ color: 'white' }}>Create a new user</Text>
              <Icon
                name='md-create'
                style={{ color: 'white', fontSize: 10, left: 10, top: 5 }}
              ></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AdminHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  rect2: {
    top: 0,
    left: 0,
    width: 230,
    height: 453,
    position: 'absolute',
    backgroundColor: '#5BB59B',
    borderRadius: 27
  },
  rect3: {
    top: 15,
    left: 120,
    width: 323,
    height: 99,
    backgroundColor: 'white',

    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    marginTop: 20,
    shadowRadius: 10
  },
  rect6: {
    width: 97,
    height: 76,
    borderRadius: 12
  },
  plantImage: {
    borderRadius: 12,
    width: 97,
    height: 80
  },
  potatoEralyBright: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    bottom: 7
  },
  mangoAppleOrange: {
    fontFamily: 'comicneueregular',
    color: '#195F57',
    bottom: 3,
    marginLeft: 1
  },
  fungens: {
    fontFamily: 'comicneueregular',
    color: '#195F57',
    marginTop: 14,
    marginLeft: 2
  },
  potatoEralyBrightColumn: {
    width: 137,
    marginLeft: 17,
    marginTop: 10,
    marginBottom: 2
  },
  image4: {
    width: 29,
    height: 58,
    marginLeft: 17,
    marginTop: 10
  },
  rect6Row: {
    height: 76,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 13,
    marginRight: 13
  },
  rect4: {
    top: 143,
    left: 135,
    width: 308,
    height: 99,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  rect5: {
    top: 268,
    left: 135,
    width: 308,
    height: 99,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  rect2Stack: {
    width: 450,
    height: 500,
    marginTop: 230,
    marginLeft: -85
  },
  image3: {
    top: 0,
    left: 17,
    width: 490,
    height: 287,
    position: 'absolute'
  },
  rect: {
    top: 100,
    width: 293,
    height: 114,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
    left: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  other: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    width: 300,
    fontSize: 18,
    marginTop: -1,
    right: 25
  },
  pestsDiseases: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    marginTop: 5,
    width: 400,
    right: 25
  },
  otherColumn: {
    width: 107,
    marginBottom: 21
  },
  image2: {
    width: 71,
    height: 63,
    marginLeft: 47,
    marginTop: 1
  },
  otherColumnRow: {
    height: 64,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 44,
    marginRight: 24
  },
  loremIpsum: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    marginTop: 4,
    marginLeft: 20
  },
  image3Stack: {
    width: 507,
    height: 287,
    marginTop: -754,
    marginLeft: 53
  }
});
