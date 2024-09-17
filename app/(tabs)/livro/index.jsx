import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Livros() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Livros</Text>

      <View style={styles.bookItem}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/61IY5VQI69L._AC_UF1000,1000_QL80_.jpg' }} 
          style={styles.image}
        />
        <Text style={styles.bookText}>Girls like girls - Hayley Kiyoko</Text>
      </View>

      <View style={styles.bookItem}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/81+oFeH2jFL._AC_UF1000,1000_QL80_.jpg' }} 
          style={styles.image}
        />
        <Text style={styles.bookText}>Lembre-se de nós - Alyson Derrick</Text>
      </View>

      <View style={styles.bookItem}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/41UK08-ZnkL._SY580_.jpg' }} 
          style={styles.image}
        />
        <Text style={styles.bookText}>Conectadas - Clara Alves</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bookItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  bookText: {
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'flex-start', 
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});