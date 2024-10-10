import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import tw from 'twrnc';

import translations from '../assets/translation.json'; 
import { user } from '../data/userData';

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinDigits, setPinDigits] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const lang = user.language;

  const handlePinChange = (index, value) => {
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);
  };

  const handleLogin = () => {
    setLoading(true);
    // Simulate a network request for demonstration
    setTimeout(() => {
      navigation.navigate('Home'); // Navigate to the Home screen after login
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={tw`flex-1 justify-center px-6 bg-slate-100`}>
      {/* Title */}
      <Text style={tw`text-3xl font-bold text-center text-black mb-8`}>
        Login
      </Text>

      {/* Mobile Number Input */}
      <TextInput
        style={tw`border border-gray-400 rounded-lg py-4 px-6 mb-6 text-lg`}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />

      {/* PIN Input Row */}
      <View style={tw`flex-row justify-center mb-6`}>
        {pinDigits.map((digit, index) => (
          <TextInput
            key={index}
            style={tw`border border-gray-400 rounded-lg py-2 px-3 text-center mx-1 w-14 h-14 text-lg`} // Make the boxes larger and centered
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handlePinChange(index, value)}
            selectionColor="#000"
          />
        ))}
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleLogin}
        style={tw`bg-blue-500 py-4 rounded-xl mb-6 mx-10`}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={tw`text-white text-center text-lg`}>Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Navigation to Signup */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={tw`border border-green-500 py-4 rounded-xl mb-6 mx-10`}>
        <Text style={tw`text-green-500 text-center text-lg`}>Go to Signup</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
