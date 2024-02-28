import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(

    {
        container:{
            flex          : 1,
            paddingTop    : 20,
            alignItems    : "center",
            justifyContent: "center"
        },
        img:{
            width : 250,
            height: 250
        },
        textFrase:{
            fontSize  : 25,
            color     : "#DD7B22",
            fontWeight: "bold",
            margin    : 30,
            fontStyle :"italic",
            textAlign : "center"
        },
        button:{
            width       : 230,
            height      : 50,
            borderWidth : 2,
            borderColor : "#DD7B22",
            borderRadius: 20
        },
        btnArea:{
            flex          : 1,
            flexDirection : "row",
            justifyContent: "center",
            alignItems    : "center"
        },
        btnText:{
            fontSize  : 20,
            fontWeight: "bold",
            color     :"#DD7B22"

        }
    }
)

