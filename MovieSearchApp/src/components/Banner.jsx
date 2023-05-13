import { StyleSheet, Text, View } from "react-native"

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>IMDB API MOVIE SEARCH</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: 'black',
        flex: 1,
        maxHeight: 300
    },
    bannerText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
    },
})

export default Banner