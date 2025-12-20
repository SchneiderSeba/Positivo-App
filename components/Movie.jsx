import { View, Text, Image, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export const AnimatedCard = ({ index, movie, setAllMovies }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);

  return (

        <Animated.View style={{ opacity, margin: 10, padding: 10, borderRadius: 10, alignItems: 'center' }}>
            <Movie movie={movie} setAllMovies={setAllMovies} />
        </Animated.View>
  );
};

export const Movie = ({ movie }) => (

  <View style={{alignItems: 'center'}}>
    <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold', marginTop: 10}}>{movie.title}</Text>
    {movie.poster ? (
      <Image source={{uri: movie.poster}} style={{width: 300, height: 200, borderRadius: 10, margin: 10}} resizeMode="cover" />
    ) : (
      <Text style={{color: 'gray', marginTop: 10}}>Sin imagen</Text>
    )}
    {movie.rate >= 8 ?
      <Text style={{color: 'lightgreen'}}>{movie.rate}⭐</Text>
      :
      <Text style={{color: 'lightcoral'}}>{movie.rate}⭐</Text>
    }
    {/* Si quieres el botón Back solo una vez, ponlo fuera del map en App.js */}
  </View>

);
