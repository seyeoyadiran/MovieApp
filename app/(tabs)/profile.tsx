import { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import { images } from "../../constants/images";

const favoriteMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16"
  },
  {
    id: 2,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    vote_average: 8.6,
    release_date: "2014-11-07"
  }
];

const currentlyWatching: Movie = {
  id: 3,
  title: "The Dark Knight",
  poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  vote_average: 9.0,
  release_date: "2008-07-18"
};

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <ScrollView className="flex-1 bg-primary px-5 py-10">
      {/* Profile Header */}
      <View className="items-center mb-6">
        <Image
          source={images.bg}
          className="w-24 h-24 rounded-full mb-3"
        />
        <Text className="text-white text-xl font-bold">John Doe</Text>
        <Text className="text-gray-400 text-sm">@johndoe</Text>

        <View className="flex-row mt-4 space-x-3">
          <TouchableOpacity
            onPress={() => setIsFollowing(!isFollowing)}
            className={`px-5 py-2 rounded-xl ${
              isFollowing ? "bg-gray-600" : "bg-blue-500"
            }`}
          >
            <Text className="text-white font-semibold">
              {isFollowing ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-500 px-5 py-2 rounded-xl">
            <Text className="text-white font-semibold">Message Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Me */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-white mb-2">About Me</Text>
        <Text className="text-white">
          A movie enthusiast who loves sci-fi thrillers and mind-bending plots.
          Currently binge-watching Nolan’s best works. 🎬
        </Text>
      </View>

      {/* Currently Watching */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-white mb-2">Currently Watching</Text>
        <MovieCard {...currentlyWatching} />
      </View>

      {/* Favorite Movies */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-white mb-3">Favorite Movies</Text>
      </View>
      <View>
      <FlatList
          data={favoriteMovies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
        </View>
    </ScrollView>
  );
}
