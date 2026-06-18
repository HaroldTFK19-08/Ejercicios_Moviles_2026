import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Lista from './components/lista';
const users = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
  },
  {
    id: '2',
    name: 'Ana Gómez',
    email: 'ana@gmail.com',
  },
  {
    id: '3',
    name: 'Pedro Torres',
    email: 'pedro@gmail.com',
  },
  {
    id: '4',
    name: 'Laura Díaz',
    email: 'laura@gmail.com',
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lista de Usuarios
      </Text>
      <FlatList
        data={users}

        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Lista user={item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:40,
    marginBottom: 20,
    textAlign: 'center',
  },
  separator: {
    height: 10,
  },
});