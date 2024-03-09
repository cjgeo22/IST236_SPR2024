import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import { DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";


function DestinationsOverviewScreen(props) {

    const countryId = props.route.params.countryId;

    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId);
        props.navigation.setOptions({
            title: country ? country.name : null
        });
    }, [countryId, props.navigation]);

    const displayedDestinations = DESTINATIONS.filter(
        (destinationItem) => {
            return destinationItem.countryId === countryId;
        });

    function renderDestinationItem(itemData) {
        const destinationItemProps = {
            name: itemData.item.name,
            visitCost: itemData.item.visitCost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            imageUrl: itemData.item.imageUrl,
            desc: itemData.item.desc,
            listIndex: itemData.index,
        }
        return <DestinationItem {...destinationItemProps}/>
    }
        
    return (
        <View style = {styles.container}>
            <FlatList 
                data = {displayedDestinations}
                keyExtractor={(item) => item.id}
                renderItem={renderDestinationItem} 
            />
        </View>
    );
}

export default DestinationsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
});