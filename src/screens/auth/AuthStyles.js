import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    body:{
        flex:1.5,
        width: "100%",
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    logo:{
        width: 200,
        height: 50,
        resizeMode: 'stretch',
        marginBottom: 30
    },
    wrapperForm:{
        width: "100%",
    },  
    input:{
        height:50,
        borderWidth: 2,
        borderColor: "#ececec",
        width: "100%",
        backgroundColor: "#ececec82",
        marginBottom: 15,
        paddingHorizontal: 10,
        color: "#000",
        borderRadius: 7,
        shadowColor: "gray",
    },  
    btnSubmit:{
        height:50,
        borderWidth: 1,
        borderColor: "#1da1f2",
        width: "100%",
        marginBottom: 15,
        borderRadius: 7,
        shadowColor: "gray",
        alignItems: "center",
        justifyContent: 'center'
    },
    btnSubmitText:{
        color: "#1da1f2"
    },
    wrapperOr:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 25
    },  
    line:{
        height: 1.5,
        backgroundColor: "#c6c6c7",
        width: "45%"
    },
    txtOr:{
        color: "#c6c6c7",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    },
    wrapperLoginFB:{
        width: "100%",
        justifyContent: 'center',
        marginTop: 25,
        flexDirection: 'row'
    },
    logoFb:{
        width: 18,
        height: 18,
        resizeMode: 'cover'
    },
    txtLoginFB:{
        color: "#385898",
        marginLeft: 5,
        fontWeight: '700'
    },
    footer:{
        flex: 0.1,
        width: "100%",
        borderTopColor: "#ececec",
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    }
 
}) 