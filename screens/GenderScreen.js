
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const GenderScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://api.genderize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
          if (data.gender === 'male') {
            setGender('male');
          } else if (data.gender === 'female') {
            setGender('female');
          } else {
            setGender('unknown');
          }
        })
        .catch(error => {
          console.log(error);
          setGender('unknown');
        });
    }
  }, [name]);

  const getColor = () => {
    if (gender === 'male') {
      return 'blue';
    } else if (gender === 'female') {
      return 'pink';
    } else {
      return 'gray';
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: getColor(), justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Ingrese su nombre"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button
        title="Predecir género"
        onPress={() => setName(name)}
      />
    </View>
  );
};

export default GenderScreen;