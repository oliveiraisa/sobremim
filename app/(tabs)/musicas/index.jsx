import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Musicas() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Músicas</Text>

      <View style={styles.musicItem}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/viimfQi_pUw/maxresdefault.jpg' }}
          style={styles.image}
        />
        <Text style={styles.musicText}>- Ocean Eyes - Billie Eilish</Text>
      </View>

      <View style={styles.musicItem}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/o3-lzz60iTQ/maxresdefault.jpg' }}
          style={styles.image}
        />
        <Text style={styles.musicText}>- Lisboa - Anavitória</Text>
      </View>

      <View style={styles.musicItem}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/QB7Be10XZSE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAs3Cwb-UKfVsLvKUNz3fZAxIj1Xg' }}
          style={styles.image}
        />
        <Text style={styles.musicText}>- A Gente Junto - Anavitória</Text>
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
  musicItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  musicText: {
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