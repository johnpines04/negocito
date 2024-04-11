import { View, Text, StyleSheet, FlatList } from "react-native";
import { FeedItem } from "../types/Feed";
import Cards from "../components/Card";


const Home = () => {
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://source.unsplash.com/random",
      username: "dat_one_axolotl",
      content: "random post 1",
      image: "https://source.unsplash.com/random",
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://source.unsplash.com/random",
      username: "bluefolf",
      content: "random post 2",
      image: "https://source.unsplash.com/random",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Cards
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            content={item.content}
            image={item.image}
            likes={item.likes}
            reposts={item.reposts}
            comments={item.comments}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;