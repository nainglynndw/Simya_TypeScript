import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { grey, red, white } from "../Colors/Colors";

interface Styles {
  button: ViewStyle;
  btnText: TextStyle;
}
const Button = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.btnText}>Search</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create<Styles>({
  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: red,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: grey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    borderRadius: 3,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: white,
  },
});
