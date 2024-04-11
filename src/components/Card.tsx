import { StyleSheet, Text } from "react-native";
import { FeedItem } from "../types/Feed";
import { Card } from 'galio-framework';


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    flex:1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle:{
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 width: 400,
 padding: 20
  }
});



const Cards = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
    <Card
  flex
  style={styles.card}
  title={username}
  avatar={avatar}
  image={image}
  imageStyle={{width:200}}
>
<Text>{content}</Text>

</Card>
  );
};

export default Cards