import axios from 'axios';
import { AsyncStorage } from 'react-native';

const setJWTToken = async (token) => {
  if (token) {
    const _token = await AsyncStorage.getItem('token');
    console.log('_token=>', _token);
    axios.defaults.headers.common['Authorization'] = _token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setJWTToken;
