import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState, useRef } from 'react';
import { getMovies, getMovieById } from '../lib/api-mobies';
import { AnimatedCard } from '../components/Movie';
import { Botton } from '../components/Botton';
import { Logo } from '../components/Logo';
import { Link, useRouter } from 'expo-router';


NativeWindStyleSheet.setOutput({
  default: 'native',
});

// const videoSource = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCyH6Q5RzhULl9HVcYCgWGbyJQRF/1kTLdGGjDRrdq6uZzcEoJN/public/new-back.mp4";

export default function App() {

  const [allMovies, setAllMovies] = useState([]);

  const scrollViewRef = useRef({ y: 0 });

  const router = useRouter();

 const handleGetMovies = async () => {
    try {
      const movies = await getMovies();
      setAllMovies(movies);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
      console.log('Fetched movies:', movies);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const movies = await getMovies();
  //       setAllMovies(movies);
  //       console.log('Fetched movies:', movies);
  //     } catch (error) {
  //       console.error('Failed to fetch movies:', error);
  //     }
  //   }
  //   fetchMovies();
  // }, [allMovies]);

  // const player = useVideoPlayer(require('../assets/arena-negra.jpg'), player => {
  //   player.loop = true;
  //   player.muted = true;
  // });

  // useEffect(() => {
  //   player.play();
  // }, [player]);

  return (
    <ImageBackground source={require('../assets/arena-negra.jpg')} style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar style="dark" />
          <Logo />
          <SafeAreaView style={{flex: 1}}>
          {/* <VideoView
            player={player}
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
            nativeControls={false}
            allowsFullscreen={true}
            allowsPictureInPicture={false}
          /> */}
            <View style={styles.content}>
              <Text style={styles.text}>Positivo Outfit</Text>
              {
                allMovies.length === 0 && (
                  <>
                    <Botton onPress={handleGetMovies}>Get Movies</Botton>
                    <Botton onPress={() => router.push('/orders')}>Orders</Botton>
                  </>
                )
              }
            </View>
            <ScrollView ref={scrollViewRef}>  
              {allMovies.map((movie, index) => (
                <AnimatedCard
                  key={movie.id}
                  index={index}
                  movie={movie}
                  setAllMovies={setAllMovies}
                />
              ))}
              {
              allMovies.length > 0 && (
                <Botton onPress={() => setAllMovies([])} style={{marginTop: 100}}>Back</Botton>
              )
            }
            </ScrollView>

          </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: require('../assets/arena-negra.jpg'),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
