import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createAppNavigator, createSwitchNavigtaor } from 'react-navigation';

export default class knowmore extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'purple',
            color: 'white',
            marginTop: 5,
          }}>
          PCOD/PCOS
        </Text>
        <Text style={styles.text}>Polycystic Ovarian Disease</Text>
        <Text style={styles.text}>Polycystic Ovarian Syndrome</Text>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'purple',
            color: 'white',
            marginTop: 5,
          }}>
          OVERVIEW
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'seafoam',
          }}>
          A hormonal disorder causing enlarged ovaries with small cysts on the
          outer edges. The cause of polycystic ovary syndrome isn't well
          understood, but may involve a combination of genetic and environmental
          factors. Symptoms include menstrual irregularity, excess hair growth,
          acne and obesity. Treatments include birth control pills to regularise
          periods, medication called metformin to prevent diabetes, statins to
          control high cholesterol, hormones to increase fertility and
          procedures to remove excess hair.
        </Text>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'purple',
            color: 'white',
            marginTop: 5,
          }}>
          SYMPTOMS
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'seafoam',
          }}>
          Menstrual:-- abnormal menstruation, absence of menstruation, heavy
          menstruation, irregular menstruation, short and light menstruation, or
          spotting.
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'seafoam',
          }}></Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'seafoam',
          }}>
          Weight:-- obesity, overweight, or weight gain.
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'seafoam',
          }}>
          Also common:-- infertility, acne, dark patches of skin in folds and
          creases, depression, inappropriate male features, loss of scalp hair,
          oily skin, or unwanted hair.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'seafoam',
  },
});
