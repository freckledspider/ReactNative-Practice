import { View } from 'react-native'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'

const LandingPage = () => {
    return (
        <View style={{flex: 1}}>
            <Banner />
            <SearchField />
        </View>
    )
}

export default LandingPage