import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    size20Bold: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom:10,
    },
    bold: {
        fontWeight: '600'
    },
    padding10: {
        padding: 10,
    },
    margin20: {
        margin: 20,
    },
    marginB: {
        paddingBottom: 30,
    },
    size16Center: {
        fontSize: 16,
        justifyContent: 'center',
    },
    size25Bold: {
        fontSize: 25,
        fontWeight: '600'
    },
    flexAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        left: -7,
        marginBottom:10,
    }, flexJustify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: -7,
        marginBottom:10,
    }, hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }, green: {
        color: 'green',
    }
})

export default styles;