import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';

const movies = [
  {
    title: 'Liga de la justicia',
    url: 'https://i.pinimg.com/236x/e9/5e/ec/e95eec98bf697cd4bb6a6434a912f137.jpg',
    description: 'Liga de la Justicia (originalmente en inglés, Justice League)4​ es una película estadounidense de superhéroes de 2017, basada en las historietas de DC Comics acerca de la Liga de la Justicia, convirtiéndose en la primera película de este equipo y la quinta producción del Universo extendido de DC',
  },
  {
    title: 'Katyn',
    url: 'https://i.pinimg.com/originals/44/95/63/449563f7f9a9de5393e1bc249269dbe3.jpg',
    description: 'Katyń es una película polaca de 2007 acerca de la masacre de Katin de 1940, dirigida por Andrzej Wajda y basada en el libro Post Mortem: The Story of Katyn de Andrzej Mularczyk. Fue nominada al Óscar a la mejor película de habla no inglesa en la convocatoria de 2007.',
  },
  {
    title: '1917',
    url: 'https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581004466_album_normal.jpg',
    description: 'Durante la Primera Guerra Mundial, dos jóvenes soldados británicos reciben una orden, aparentemente, imposible de ejecutar: en una carrera contra el reloj, deben infiltrarse en territorio enemigo para entregar un mensaje que podría salvar a miles de compañeros.',
  },
];

const MovieItem = ({ movie }) => (
  <View style={{ marginBottom: 20 }}>
    <Image source={{uri:movie.url}} style={{ width: 200, height: 300 }} />
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{movie.title}</Text>
    <Text>{movie.description}</Text>
  </View>
);

const App = () => (
  <View style={{ flex: 1, padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
      Lista de Películas
    </Text>
    <ScrollView>
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </ScrollView>
  </View>
);

export default App;