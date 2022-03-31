import { StyleSheet, TextInput, ViewStyle, TextInputProps } from "react-native";
import React from "react";
import { grey, white, black } from "../Colors/Colors";

interface Styles {
  input: ViewStyle;
}

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      onChangeText={props.onChangeText}
    />
  );
};

export default React.memo(Input);

const styles = StyleSheet.create<Styles>({
  input: {
    flex: 1,
    margin: 10,
    backgroundColor: white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
