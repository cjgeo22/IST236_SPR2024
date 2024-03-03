import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

//importing the movie item component
import MovieItem from './components/MovieItem.js'

export default function App() {
  const [movieItem, setMovieItem] = useState([
    //data for each movie
    {
      name: "The Truman Show",
      image: require("./assets/images/thetrumanshow.jpg"),
      rating: "9",
    },
    {
      name: "The Butterfly Effect",
      image: require("./assets/images/thebutterflyeffect.jpg"),
      rating: "10",
    },
    {
      name: "Fight Club",
      image: require("./assets/images/fightclub.jpg"),
      rating: "8.5",
    },
    {
      name: "Catch Me If You Can",
      image: require("./assets/images/catchmeifyoucan.jpg"),
      rating: "9.5",
    },
    {
      name: "Ferris Bueller's Day Off",
      image: require("./assets/images/ferrisbuellersdayoff.jpg"),
      rating: "10",
    },
  ]);


  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 5 Movies</Text>
      </View>
      {/* disclaimer container explaing that rating != placement */}
      {/* and also that i sometimes have bad taste in movies */}
      <View style={styles.disclaimerContainer}>
        <Text style={styles.disclaimer}>These movies are rated on how well they achieved what they're trying to be.</Text>
        <Text style={styles.disclaimer}>Just because its the good at what it does doesn't mean its my favourite,</Text>
        <Text style={styles.disclaimer}>and just because it's my favourite doesn't mean it's good at what it does.</Text>
        <Text style={styles.disclaimer}>That's why the ratings don't equal placement.</Text>
      </View>

      {/* setting up scroll view */}
      <View style={styles.listContainer}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        // little bounce animation
        alwaysBounceVertical={false}
        >
          {/* get data from movie item */}
          {movieItem.map((itemData) => (
          <MovieItem 
          name={itemData.name} 
          image={itemData.image} 
          rating={itemData.rating}
          />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
}

// styles for the app.js parts
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#462462',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#434031",
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 5,
  },
  disclaimerContainer: {
    flex: 1,
    backgroundColor: "#585441",
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 5,
  },
  title: {
    fontSize: 40,
    color: "#fff",
  },
  disclaimer: {
    fontSize: 10,
    color: "#fff",
  },
  listContainer: {
    flex: 8,
    width: "80%"
  }
});