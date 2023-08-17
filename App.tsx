import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

function App(): JSX.Element {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {!currentSubject ? (
            <>
              <Focus addSubject={setCurrentSubject} />
              <FocusHistory history={history} />
            </>
          ) : (
            <Timer
              focusSubject={currentSubject}
              onTimerEnd={(subject: string) => {
                setHistory([...history, subject]);
              }}
              clearSubject={() => setCurrentSubject('')}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView> //the safe area appllies it's own padding so that all the contents we show is in the safe area.
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
