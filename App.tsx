import { StyleSheet, View, StatusBar, ViewStyle, Text } from "react-native";
import React from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Icon from "./Components/Icon";
import { black, grey } from "./Colors/Colors";
import GetData from "./Hooks/GetData";
import ListTable from "./Components/ListTable";

interface Styles {
  container: ViewStyle;
  headContainer: ViewStyle;
}

export default function App() {
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [searchName, setSearchName] = React.useState("");
  let SearchImage = require("./assets/images/search.png");

  const search = (name: string) => {
    const gg: any = GetData(name);
    if (gg.length === 0)
      return alert(
        "This user name does not exist! Please specify an existing user name!"
      );
    setData(() => [].concat(gg));
    setSearchName(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Icon source={SearchImage} />
        <Input
          placeholder="User Name"
          onChangeText={(a: string) => setName(a.toLowerCase())}
        />
        <Button
          onPress={() => {
            search(name);
          }}
        />
      </View>
      {data && data.length > 0 ? (
        <ListTable data={data} searchName={searchName} />
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>No Search Data</Text>
        </View>
      )}
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
  },
  headContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: grey,
    borderRadius: 3,
    borderColor: black,
  },
});
