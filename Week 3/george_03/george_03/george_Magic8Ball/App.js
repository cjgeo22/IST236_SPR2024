import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
//load in fonts
import { useFonts } from "expo-font";
import MysteryQuest from "./assets/fonts/MysteryQuest-Regular.ttf";
import { useState } from "react";

export default function App() {
  //use mysteryquest font
  const [fontsLoaded] = useFonts({
    MysteryQuest: MysteryQuest,
  });

  //set useState variables
  //make the modalscreen not visible by default
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [ballResponse, setBallResponse] = useState("");
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  //shuffle response array
  const shuffleResponses = (resp) => {
    //go from last response to first
    for (let i = resp.length - 1; i > 0; i--) {
      //get a rand index
      const j = Math.floor(Math.random() * (i + 1));
      //swap elements
      [resp[i], resp[j]] = [resp[j], resp[i]];
    }
  };

  shuffleResponses(responses);

  //pick response
  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];

  //function to start8ball
  function start8Ball() {
    //modal is visibal and ballResponse is set to the value of randomeResponse
    setModalIsVisible(true);
    setBallResponse(randomResponse);
  }

  //end8ball function gets rid of modal screen
  function end8Ball() {
    setModalIsVisible(false);
  }

  return (
    <>
{/* main screen */}
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>
            Enter a question for the Magic 8 Ball:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter question here..."
            color="black"
            onChangeText={setUserQuestion}
          />
        </View>
        <View style={styles.submitBtnContaner}>
          <Button title="Submit" color="black" onPress={start8Ball} />
        </View>
      </SafeAreaView>

{/* modal screen */}
      <Modal visible={modalIsVisible}>
        <SafeAreaView style={styles.modalRoot}>
          <View style={styles.mUserQuestionContainer}>
            <Text style={styles.mUserQuestionText}>
              User Question: {userQuestion}
            </Text>
          </View>
          <View style={styles.m8BallResponseContainer}>
            <Text style={styles.m8BallResponseText}>
              8 Ball Response: {ballResponse}
            </Text>
          </View>
          <View style={styles.mBtnCloseContainer}>
            <Button title="Close" color="black" onPress={end8Ball} />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

// root styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },

  modalRoot: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },

  // container styles
  promptContainer: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 100,
    marginTop: 200,
  },

  inputContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
    maxHeight: 75,
    marginBottom: 30,
  },

  submitBtnContaner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
    maxHeight: 50,
    width: 100,
    backgroundColor: "#ffffff",
  },

  mBtnCloseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 50,
    width: 100,
    backgroundColor: "#ffffff",
  },

  mUserQuestionContainer: {
    paddingBottom: 20,
  },

  m8BallResponseContainer: {
    paddingBottom: 40,
  },

  // text styles
  mUserQuestionText: {
    fontSize: 20,
    fontFamily: "MysteryQuest",
    color: "#fff",
  },

  m8BallResponseText: {
    fontSize: 20,
    fontFamily: "MysteryQuest",
    color: "#fff",
  },

  promptText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "MysteryQuest",
  },

  inputText: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "MysteryQuest",
  },
});
