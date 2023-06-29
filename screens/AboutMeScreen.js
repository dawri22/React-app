import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/dawrin.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Dawrin Peguero Alvarez</Text>
      <Text style={styles.description}>Soy un apasionado por la tecnología y el desarrollo de software. He completado cursos y proyectos personales para mejorar mis habilidades en el área y estoy ansioso por contribuir a un equipo de desarrollo de software de alto rendimiento.</Text>
      <Text style={styles.contact}>Datos de contacto:</Text>
      <Text style={styles.contactInfo}>Correo electrónico: dawrinpegueroalvarez@hotmail.com</Text>
      <Text style={styles.contactInfo}>Teléfono: 829-518-7976</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  contact: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutMeScreen;
