import { StyleSheet, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ffffff'
    },
    imageAndCamera: {
        width: '40%',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        overflow: 'hidden',
    },
    otherView: {
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    input: {
        width: '100%',
        borderRadius: 6,
        height: 55,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#ccc',
        paddingHorizontal: 10
    },
    inputTitle:{
        fontWeight: '600',
        marginTop: 25,
        marginBottom: 10,
    },
    datePickerTouch: {
        width: '100%',
        borderRadius: 6,
        height: 55,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#ccc',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    datePickerText: {
        color: '#000'
    },
    scroll: {
        width: '100%',
    },
    buttonAndText: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#ccc',
        height: '95%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    updateButton: {
        width: '95%',
        height: 55,
        backgroundColor: '#24BD87',
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    updateText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#ffffff'
    },
    countryCodePicker: {
        alignSelf: 'center',
        position: 'absolute'
      },
      togglerContainerStyle: {
        backgroundColor: '#baffc0',
        borderRadius: 10,
        padding: 5,
      },
      togglerLabelStyle: {
        fontSize: 20,
      },
      searchInputStyle: {
        borderColor: '#888888',
        borderWidth: 1,
        height: 36,
        borderRadius: 10,
        paddingHorizontal: 10,
      },
      pickerItemLabelStyle: {
        marginLeft: 10,
        marginVertical: 10,
        alignSelf: 'center',
      },
      pickerItemContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
      },
      phoneContainer: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 6,
        height: 55,
        alignSelf: 'center',
        borderColor: '#ccc',
        paddingHorizontal: 10
      },
      textInput: {
        paddingVertical: 0,
      },
});

export default styles;