import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  historytext: {
    fontSize: 18.7,
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'verdana',
    paddingTop: 12,
  },
});

function FocusHistory({history}) {
  if (!history || !history.length)
    return <Text style={styles.historytext}>Nothing Focused yet!</Text>;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Things we have focused on!</Text>
        {history.map(item => (
          <Text key={item} style={styles.historytext}>
            {item}
          </Text>
        ))}
      </View>
    </>
  );
}

export default FocusHistory;
