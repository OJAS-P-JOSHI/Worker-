import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import AnimatedTextInput from "../components/AnimatedtextInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CustomerDetails = () => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [whatsappno, setWhatsappNo] = useState(0);
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Form Submitted with Name:", name);
    navigation.navigate("Home");
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image source={require("../assets/ai live.png")} style={styles.image} />
        <Text style={styles.head}>Fill your details to register</Text>
      </View>
      <View style={styles.formcontainer}>
        <AnimatedTextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <AnimatedTextInput
          placeholder="Select Your Education"
          value={education}
          onChangeText={setEducation}
        />
        <AnimatedTextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <AnimatedTextInput
          placeholder="Enter College Name"
          value={collegeName}
          onChangeText={setCollegeName}
        />
        <AnimatedTextInput
          placeholder="Enter your Whatsapp No."
          value={whatsappno}
          onChangeText={setWhatsappNo}
          keyboardType="numeric"
        />
        <View style={{ justifyContent: "center", alignItems: 'center', }}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "40%",
  },
  formcontainer: {
    margin: "5%",
    width: "90%",
    paddingBottom: 80,
    marginTop: "10%",
  },
  image: {
    width: "96%",
    height: "100%",
  },
  head: {
    marginBottom: "5%",
    color: "black",
    fontSize: 16,
  },

  submitButton: {
    width: '80%',
    backgroundColor: "#2F88A0", // Submit button background color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomerDetails;
