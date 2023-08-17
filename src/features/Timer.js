import React, {useState} from 'react';
import {StyleSheet, Text, View, Vibration} from 'react-native';
import {Countdown} from '../components/countdown';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
import {ProgressBar} from 'react-native-paper';
import Timing from './Timing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 50,
  },
  text: {
    // color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  topic: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  progressbar: {
    padding: 14,
    paddingHorizontal: 30,
    paddingTop: spacing.xxl,
  },
  timingbuttonwrapper: {
    flex: 0.4,
    paddingTop: 30,
    flexDirection: 'row',
  },
  CearButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingTop: 0,
  },
});

const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  const [IsStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = reset => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!IsStarted}
          onProgress={setProgress} //(progress) => setProgress(progress)
          onEnd={onEnd}
        />
      </View>
      <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.text}>Focusing On: </Text>
        <Text style={styles.topic}>{focusSubject}</Text>
      </View>
      <View style={styles.progressbar}>
        <ProgressBar
          style={{
            height: 10,
            borderRadius: 5,
            borderWidth: 0.85,
            borderColor: '#5A5A5A',
          }}
          progress={progress}
          color="black"
        />
      </View>
      <View style={styles.timingbuttonwrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!IsStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.CearButtonWrapper}>
        <RoundedButton title="Clear" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

export default Timer;
