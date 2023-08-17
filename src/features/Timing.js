import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';

const styles = StyleSheet.create({
  timebuttonwrapper: {
    flex: 1,
    alignItems: 'center',
  },
});

function Timing({onChangeTime}) {
  return (
    <>
      <View style={styles.timebuttonwrapper}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timebuttonwrapper}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timebuttonwrapper}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
}

export default Timing;
