import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../utils/colors";
import { validateEmail } from "../utils/validation";
import firebase from "../utils/firebase";

export default function LoginForm({ navigateList, navigateSignUp }) {
  const [formData, setFormData] = useState(defaultValue);
  const [formError, setFormError] = useState({});

  const login = () => {
    let error = {};
    console.log("LOGIN IN");
    if (!formData.email || !formData.password) {
      if (!formData.email) error.email = true;
      if (!formData.password) error.password = true;
    } else if (!validateEmail(formData.email)) {
      error.email = true;
    } else if (formData.password.length < 6) {
      error.password = true;
    } else {
      console.log("OK");
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((res) => {
          console.log(res);
          navigateList();
        })
        .catch((err) => {
          console.log(err);
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    console.log(error);
    setFormError(error);
  };

  return (
    <>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <View>
            <Text style={styles.textStyle}> Email Address</Text>
          </View>
          <TextInput
            placeholder="Email"
            style={[styles.input, formError.email && styles.errorInput]}
            onChange={(e) =>
              setFormData({ ...formData, email: e.nativeEvent.text })
            }
          />
          <View>
            <Text style={styles.textStyle}>Password</Text>
          </View>
          <TextInput
            placeholder="Password"
            style={[styles.input, formError.password && styles.errorInput]}
            secureTextEntry={true}
            onChange={(e) =>
              setFormData({ ...formData, password: e.nativeEvent.text })
            }
          />
          <TouchableOpacity style={styles.buttonLogin} onPress={login}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={navigateSignUp}
          >
            <Text style={styles.texSignup}>New arround here? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    width: "85%",
    borderRadius: 5,
    height: 370,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
  },
  viewInput: {
    flexDirection: "column",
    top: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    borderColor: "#d4d4d4",
    width: "95%",
    marginHorizontal: 5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
    paddingBottom: 10,
  },
  buttonStyle: {
    width: 50,
  },
  buttonLogin: {
    backgroundColor: colors.PRIMARY_ORANGE,
    padding: 5,
    borderRadius: 10,
    width: "30%",
    marginLeft: 10,
    top: 25,
  },
  textLogin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  buttonSignup: {
    padding: 5,
    borderRadius: 10,
    width: "60%",
    marginLeft: 10,
    top: 100,
  },
  textSignup: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  errorInput: {
    borderColor: "#940c0c",
  },
});

function defaultValue() {
  return {
    email: {},
    password: {},
  };
}
