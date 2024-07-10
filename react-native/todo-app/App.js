import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";
const WORKING_KEY = "@isWorking";

export default function App() {
  const inputRef = useRef(null);

  const [working, setWorking] = useState(true);
  const [toDos, setToDos] = useState({});
  const [text, setText] = useState("");

  // Work, Travel 메뉴 이동
  const work = async () => {
    setWorking(true);
    await AsyncStorage.setItem(WORKING_KEY, "true");
  };

  const travle = async () => {
    setWorking(false);
    await AsyncStorage.setItem(WORKING_KEY, "false");
  };

  const isWorking = async () => {
    const isWorking = (await AsyncStorage.getItem(WORKING_KEY)) === "true";
    setWorking(isWorking);
  };

  // todo 목록 작성
  const onChangeText = (e) => setText(e);

  const saveToDos = async (toSave) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      console.log(error);
    }
  };

  const addToDo = async () => {
    if (text === "") return;

    const newToDos = { ...toDos, [Date.now()]: { text, working, done: false } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel", style: "destructive" },
      {
        text: "Sure",
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          await saveToDos(newToDos);
        },
      },
    ]);
  };

  const completeToDo = async (key) => {
    const newToDos = { ...toDos };
    newToDos[key].done = !newToDos[key].done;
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  const editToDo = async (key) => {
    const newToDos = { ...toDos };
    setText(newToDos[key].text);
    if (inputRef.current) inputRef.current.focus();
    delete newToDos[key];
    setToDos(newToDos);
  };

  const loadToDos = async () => {
    const jsonPayload = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(jsonPayload));
  };

  useEffect(() => {
    loadToDos();
    isWorking();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <Pressable onPress={travle}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </Pressable>
      </View>
      <TextInput
        ref={inputRef}
        value={text}
        returnKeyType="done"
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map(
          (key) =>
            toDos[key].working === working && (
              <View key={key} style={styles.toDo}>
                <View style={styles.toDoTextBox}>
                  <TouchableOpacity onPress={() => completeToDo(key)}>
                    {toDos[key].done ? (
                      <MaterialCommunityIcons
                        name="checkbox-marked-outline"
                        size={20}
                        color="white"
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="checkbox-blank-outline"
                        size={20}
                        color="white"
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={
                      toDos[key].done ? styles.toDoTextDone : styles.toDoText
                    }
                  >
                    {toDos[key].text}
                  </Text>
                  <TouchableOpacity onPress={() => editToDo(key)}>
                    <MaterialCommunityIcons
                      name="lead-pencil"
                      size={20}
                      color={theme.grey}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <Fontisto name="trash" size={18} color={theme.grey} />
                </TouchableOpacity>
              </View>
            )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.bg,
  },
  header: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
  },
  input: {
    fontSize: 18,
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  toDo: {
    borderRadius: 15,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: theme.toDoBg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoTextBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  toDoTextDone: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 5,
    color: theme.grey,
    fontWeight: "500",
    textDecorationLine: "line-through",
  },
  toDoText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 5,
    color: "white",
    fontWeight: "500",
  },
});
