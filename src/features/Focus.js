import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.darkBrown,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  inputcontainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});

const Focus = ({addSubject}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          label="What you would like to focus on?"
          value={text}
          mode="outlined"
          onChangeText={text => setText(text)} //onChangeText
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(text)} />
        </View>
      </View>
    </View>
  );
};

export default Focus;
