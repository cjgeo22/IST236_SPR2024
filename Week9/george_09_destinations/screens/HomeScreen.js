import { View, Text, FlatList } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";
import Title from "../components/Title";

function HomeScreen(props) {
//the render function that makes the destinations under country appear
    function renderCountryItem(itemData) {

        function pressHandler() {
            props.navigation.navigate("DestinationsOverviewScreen", {
                countryId: itemData.item.id,
            });
        }

        //data from the grid tile component
        return (
            <CountryGridTile
                name = {itemData.item.name}
                color = {itemData.item.color}
                onPress = {pressHandler}
            />   
        );
    }

//sets up the grid flatlist
    return (
        <View>
            <FlatList
                data={COUNTRIES}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem = {renderCountryItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;