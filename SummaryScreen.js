import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import knowmore from './knowmore';
import { createAppNavigator, createSwitchNavigtaor } from 'react-navigation';

class SummaryScreen extends React.Component {

  goToKnowmore(){
    this.props.navigation.navigate('knowmore');
  }
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value', (data) => {
      var class_a = data.val();
      var present_students = [];
      var absent_students = [];
      for (var i in class_a) {
        if (class_a[i][today] === 'present') {
          present_students.push(class_a[i]);
        }
        if (class_a[i][today] === 'absent') {
          absent_students.push(class_a[i]);
        }
      }

      present_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      absent_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students: present_students,
        absent_students: absent_students,
      });
    });
  };

  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Chances Of Getting PCOS/PCOD: {this.state.present_students.length}0%
          </Text>
          <Text style={styles.text}>
            Chances Of NOT Getting PCOS/PCOD:{' '}
            {this.state.absent_students.length}0%
          </Text>
        </View>
       <TouchableOpacity
            style={{
              marginTop: 300,
              marginLeft: 120,
              borderWidth: 4,
              borderColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
              height: 80,
              backgroundColor: 'orange',
              borderRadius: 100,
            }}
            onPress={() => this.goToKnowmore()}>
            <Text
              style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>
              Know about PCOD/PCOS
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 20,
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
