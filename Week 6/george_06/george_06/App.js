import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesScreen from "./screens/RecipesScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    clothe: require("./assets/fonts/Clothe.ttf"),
    crispyBread: require("./assets/fonts/CrispyBread.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipe, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Water Soup",
      text: "Ingredients:\n - Water\n - Ice \n \n Instructions: \n 1. Bring water to a rolling boil, then turn off heat. \n 2. Add ice cubes to taste. \n 3. Enjoy!",
    },
    {
      id: 2,
      title: "Air",
      text: "Ingredients: \n - \n - \n \n Instructions: \n 1. \n 2. \n 3. Enjoy!",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler} />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipe={currentRecipe}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});