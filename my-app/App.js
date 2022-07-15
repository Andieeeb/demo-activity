import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'close' style={styles.tileX}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'circle-outline' style={styles.tileO}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'close' style={styles.tileX}></Icon>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'circle-outline' style={styles.tileO}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'circle-outline' style={styles.tileO}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'close' style={styles.tileX}></Icon>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'close' style={styles.tileX}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'circle-outline' style={styles.tileO}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tile]}>
                <Icon name = 'circle-outline' style={styles.tileO}></Icon>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 5,
    width: 100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tileX: {
    color: 'red',
    fontSize: 80,
  },

  tileO: {
    color: 'green',
    fontSize: 80,
  },


});
