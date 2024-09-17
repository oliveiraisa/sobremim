import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre mim</Text>
      <Text style={styles.centeredText}>Bem vindo(a) ao meu app</Text>
      <Text style={styles.centeredText}>Eu sou a Isabella, aluna da 3C</Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/livro">
          <Text style={styles.buttonText}>Livros</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href="/musicas">
          <Text style={styles.buttonText}>Músicas</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center', 
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});