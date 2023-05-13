import { useState } from 'react'
import { View } from 'react-native'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'

const apiUrl = 'http://www.omdbapi.com/?apiKey=8b10866a&t='

const LandingPage = () => {
    const [movieResult, setMovieResult] = useState()

    const handleSearch = async (searchString) => {
        console.log(searchString)
        const result = await fetch(`http://www.omdbapi.com/?t=${searchString}&apiKey=8b10866a&t=`).then((data) => data.json())
        console.log(result)
    }

    return (
        <View style={{flex: 1}}>
            <Banner />
            <SearchField onSubmit={handleSearch}/>
        </View>
    )
}

export default LandingPage