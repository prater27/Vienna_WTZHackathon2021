import React from "react";
import {
  ScrollView,
  StatusBar,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
//import ScrollableTabView from "react-native-scrollable-tab-view";
import { LineChart } from "react-native-chart-kit";
import { data } from "../Helpers/MockData";

import { List, Card, Title } from "react-native-paper";

// in Expo - swipe left to see the following styling, or create your own
const chartConfig = {
  backgroundColor: "paper",
  backgroundGradientFrom: "grey",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(88, 88, 88, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

import { DataTable } from "react-native-paper";

function MyDataTableHeader() {
  return (
    <View
      style={{
        justify: "left",
      }}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title sortDirection="descending">Postion</DataTable.Title>
          <DataTable.Title numeric>Next reward</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  );
}

function MyDataTableData() {
  const baseNumberPosition = Math.floor(Math.random() * 10 + 1);
  const baseNumber = Math.floor(Math.random() * 10 + 1);

  return (
    <DataTable.Row>
      <DataTable.Cell numeric>{Math.round(baseNumber * 1.1)}</DataTable.Cell>
      <DataTable.Cell numeric>{`${baseNumberPosition} Km`}</DataTable.Cell>
    </DataTable.Row>
  );
}

function GeneralInformationTable() {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title sortDirection="descending">Distance</DataTable.Title>
        <DataTable.Title numeric>Next reward</DataTable.Title>
        <DataTable.Title numeric>Used Kcal</DataTable.Title>
        <DataTable.Title numeric>Saved CO2</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell numeric>562 Km</DataTable.Cell>
        <DataTable.Cell numeric>750 Km</DataTable.Cell>
        <DataTable.Cell numeric>59343 Kcal</DataTable.Cell>
        <DataTable.Cell numeric>752 Kg</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

function InstitutionPositions({ name }) {
  return (
    <View
      style={{
        textAlign: "left",
      }}
    >
      <Card>
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
        <MyDataTableHeader />
        <MyDataTableData />
      </Card>
    </View>
  );
}

function Profile() {
  const width = Dimensions.get("window").width;
  const height = 220;

  function renderTabBar() {
    return <StatusBar hidden />;
  }

  const labelStyle = {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
  };
  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  };

  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  const namesInstitutions = [
    "Stadt Wien",
    "Uni Wien",
    "Siemens",
    "Gymnasium Karl Popper",
  ];

  return (
    <ScrollView renderTabBar={renderTabBar}>
      <ScrollView
        key={Math.random()}
        style={{
          backgroundColor: chartConfig.backgroundColor,
        }}
      >
        {" "}
        <View style={{ flex: 1 }}>
          <Card>
            <Card.Content>
              <Title>Current Points: 752</Title>
            </Card.Content>
          </Card>
        </View>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
          style={graphStyle}
        />
      </ScrollView>
      <GeneralInformationTable />
      <List.Accordion
        title="Your Communities"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <View style={styles.content}>
          {namesInstitutions.map((name) => (
            <InstitutionPositions name={name} />
          ))}
        </View>
      </List.Accordion>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    // there is no 'grid' type in RN :(
    display: "grid",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: 8,
  },
});

export { Profile };
