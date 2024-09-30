import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleVerify = () => {
    const userGuess = parseInt(inputValue);
    const randomNumber = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
      Alert.alert('Erro', 'Por favor, insira um número válido entre 0 e 10.');
      return;
    }

    if (userGuess === randomNumber) {
      Alert.alert('Resultado', 'Você acertou!');
    } else {
      Alert.alert('Resultado', `Você errou! O número era ${randomNumber}.`);
    }

    // Limpar o input após a verificação
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Digite um número de 0 a 10"
      />
      <Button title="Verificar" onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
