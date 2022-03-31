import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
} from "react-native";
import React from "react";

import { black, blue, pink, red } from "../Colors/Colors";

interface Data {
  data: any;
  searchName: string;
}
interface ListData {
  id: string;
  name: string;
  bananas: number;
  rank: string;
}

interface Styles {
  table: ViewStyle;
  header: ViewStyle;
  titleCell: ViewStyle;
  headerText: TextStyle;
  row: ViewStyle;
  searchRow: ViewStyle;
  searchName: TextStyle;
}

interface Title {
  title: string;
  color: string;
}

const ListTable = (props: Data) => {
  const Heading = (props: Title) => {
    return (
      <View style={[styles.titleCell]}>
        <Text style={[styles.headerText, { color: props.color }]}>
          {props.title}
        </Text>
      </View>
    );
  };

  const renderItem = ({ item, index }: { item: ListData; index: number }) => {
    return (
      <View
        style={
          props.searchName === item.name.toLowerCase()
            ? styles.searchRow
            : styles.row
        }
      >
        <Heading
          title={item.name}
          color={props.searchName === item.name.toLowerCase() ? red : black}
        />
        <Heading
          title={item.rank}
          color={props.searchName === item.name.toLowerCase() ? red : black}
        />
        <Heading
          title={item.bananas.toString()}
          color={props.searchName === item.name.toLowerCase() ? red : black}
        />
        <Heading
          title={props.searchName === item.name.toLowerCase() ? "Yes" : "No"}
          color={props.searchName === item.name.toLowerCase() ? red : black}
        />
      </View>
    );
  };

  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <Heading title="Name" color={black} />
        <Heading title="Rank" color={black} />
        <Heading title="Number of bananas" color={black} />
        <Heading title="isSearchedUser?" color={black} />
      </View>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default React.memo(ListTable);

const styles = StyleSheet.create<Styles>({
  table: {
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderRightWidth: 0,
    borderRadius: 3,
  },
  header: {
    width: "100%",
    backgroundColor: blue,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  titleCell: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    borderRightWidth: 1,
  },
  headerText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
  },
  searchRow: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    backgroundColor: pink,
  },
  searchName: {},
});
