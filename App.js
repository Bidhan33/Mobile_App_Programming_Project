import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handlePress = () => {
    Alert.alert('Hey', 'You typed: ' + message);
  };

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtract = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };
  const handleClearInput = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter first number"
        value={num1}
        onChangeText={(text) => setNum1(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Enter second number"
        value={num2}
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleSum} />
        <Button title="Subtract" onPress={handleSubtract} />
        <Button title="Clear" onPress={handleClearInput} />
      </View>

      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}

      '
      <Text style={styles.demoText}>This is a Calculator 📱</Text>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  resultText: {
    fontSize: 20,
    color: 'blue',
    margin: 10,
  },
  demoText: {
    color: 'red',
    fontSize: 20,
    marginVertical: 20,
  },
});
