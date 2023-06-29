import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Image, Button } from 'react-native';

const AgeScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [ageGroup, setAgeGroup] = useState('');
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    if (name) {
      fetch(`https://api.agify.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
          setAge(data.age);
          determineAgeGroup(data.age);
        })
        .catch(error => {
          console.log(error);
          setAge(null);
          setAgeGroup('');
        });
    }
  }, [name]);

  const determineAgeGroup = age => {
    if (age <= 25) {
      setAgeGroup('joven');
      setImageSource(require('../assets/joven.jpeg'));
    } else if (age <= 60) {
      setAgeGroup('adulto');
      setImageSource(require('../assets/adulto.jpeg'));
    } else {
      setAgeGroup('anciano');
      setImageSource(require('../assets/anciano.jpeg'));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Ingrese su nombre"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button
        title="Determinar edad"
        onPress={() => setName(name)}
      />
      {age && (
        <View style={{ marginTop: 40 }}>
          <Text>{`Edad: ${age}`}</Text>
          <Text>{`Grupo de edad: ${ageGroup}`}</Text>
          <Image source={imageSource} style={{ width: 200, height: 200, marginTop: 20 }} />
        </View>
      )}
    </View>
  );
};

export default AgeScreen;
