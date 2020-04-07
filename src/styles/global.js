import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        padding: 10,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})


export const images = {
    '1' : require('../../assets/rating-1.png'),
    '2' : require('../../assets/rating-2.png'),
    '3' : require('../../assets/rating-3.png'),
    '4' : require('../../assets/rating-4.png'),
    '5' : require('../../assets/rating-5.png'),
}
