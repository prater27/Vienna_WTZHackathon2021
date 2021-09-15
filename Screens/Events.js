import * as React from "react";
import { View, Image, Dimensions, StyleSheet, Platform } from "react-native";
import ScreenWrapper from "../ScreenWrapper";
import { Card, Title, Button, Paragraph, Avatar } from "react-native-paper";
import { Searchbar } from "react-native-paper";

function Event({ uri }) {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Card>
      <Card.Content>
        <Title>Event</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: uri }} />
      <Card.Actions>
        <Button>Attend</Button>
      </Card.Actions>
    </Card>
  );
}

function Events() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const numberOfElements = 7;

  const PHOTOS = [];
  for (let i = 0; i < numberOfElements; i++) {
    PHOTOS.push(`https://picsum.photos/seed/${i}/300/300`);
  }

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScreenWrapper contentContainerStyle={styles.content}>
        {PHOTOS.map((uri) => (
          <View key={uri}>
            <Event uri={uri} />
          </View>
        ))}
      </ScreenWrapper>
    </View>
  );
}

export { Events };

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      content: {
        // there is no 'grid' type in RN :(
        display: "grid",
        gridRowGap: "8px",
        gridColumnGap: "8px",
        padding: 8,
      },
      item: {
        width: "100%",
        height: 150,
      },
    },
    default: {
      content: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 4,
      },
      item: {
        height: Dimensions.get("window").width / 2,
        width: "50%",
        padding: 4,
      },
    },
  }),
  photo: {
    flex: 1,
    resizeMode: "cover",
  },
});
