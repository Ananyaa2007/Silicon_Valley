import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>CYCSTOLE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'cadetblue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});