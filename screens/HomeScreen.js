import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [formData, setFormData] = useState('');
  const [name, setName] = useState('');

  const handleFormData = (text) => {
    setFormData(text);
  };

  const handleSubmit = () => {
    setName(formData);
    setFormData("");
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        { !name ? "Welcome to Digia, your digital diary." : `Hello, ${name}!` }
      </Text>
      <Text style={styles.subtitle}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={handleFormData}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EF',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3A47',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#2C3A47',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#2C3A47',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#2C3A47',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#2C3A47',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});

export default HomeScreen;
