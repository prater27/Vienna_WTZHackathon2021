import * as React from "react";
import { View, Image, Dimensions, StyleSheet, Platform } from "react-native";
import ScreenWrapper from "../ScreenWrapper";
import { Card, Title, Button, Paragraph, Avatar } from "react-native-paper";

function Reward({ uri }) {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Card>
      <Card.Content>
        <Title>Reward Name</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: uri }} />
      <Card.Actions>
        <Button>Get reward!</Button>
      </Card.Actions>
    </Card>
  );
}

function Rewards() {
  console.log();
  const numberOfElements = 7;

  const PHOTOS = [];
  for (let i = 0; i < numberOfElements; i++) {
    PHOTOS.push(`https://picsum.photos/seed/${i}/300/300`);
  }

  return (
    <ScreenWrapper contentContainerStyle={styles.content}>
      {PHOTOS.map((uri) => (
        <View key={uri}>
          <Reward uri={uri} />
        </View>
      ))}
    </ScreenWrapper>
  );
}

export { Rewards };

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
