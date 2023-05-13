import { Image, StyleSheet, Text, View } from "react-native"

const Results = ({movie}) => {
    return (<View style={styles.card}>
        <Image style={styles.image} src={movie.Poster} />
    </View>)
}

const styles = StyleSheet.create({
    card: {padding: 20, margin: 20, borderColor: 'gray', borderWidth: 1, borderRadius: 5},
    image: {height: 100, width: 100},
    titleText: {},
    subtitleText: {},
    descriptionText: {}
})

export default Results