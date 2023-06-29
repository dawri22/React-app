import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const WordPressScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts?per_page=3');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title.rendered}</Text>
        <Text style={{ fontSize: 14 }}>{item.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No se encontraron publicaciones.</Text>
      )}
    </View>
  );
};

export default WordPressScreen;
