import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, Linking } from 'react-native';

const UniversityScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (country) {
      fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`)
        .then(response => response.json())
        .then(data => setUniversities(data))
        .catch(error => {
          console.log(error);
          setUniversities([]);
        });
    }
  }, [country]);

  const openWebsite = url => {
    Linking.openURL(url);
  };

  const renderUniversityItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openWebsite(item.web_pages[0])}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Domain: {item.domains[0]}</Text>
          <Text>Website: {item.web_pages[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Ingrese el nombre del país"
        onChangeText={text => setCountry(text)}
        value={country}
      />
      <Button
        title="Buscar universidades"
        onPress={() => setCountry(country)}
      />

      {universities.length > 0 ? (
        <FlatList
          data={universities}
          renderItem={renderUniversityItem}
          keyExtractor={item => item.name}
        />
      ) : (
        <Text>No se encontraron universidades</Text>
      )}
    </View>
  );
};

export default UniversityScreen;
