import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, Pressable } from "react-native";
import { connect } from "react-redux";
import { CounterIncrement, CounterDecrement, CounterClear, CounterSet, HelloAction } from "./action";

class Main extends Component {

    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(number) {
        const count = parseInt(number);
        this.props.CounterSet(count);
    }

    render() {
        console.log(this.props);
        const { container, countViewStyle, welcome } = styles;
        const { helloText, pressedButton } = this.props.hello;
        return (
            <View style={container}>
                <Text style={styles.welcome}>Redux in ReactNative </Text>
                <TextInput
                    style={{ width: 60, height: 60, borderWidth: 1, padding: 20 }}
                    onChangeText={this.onChangeText}
                    value={this.props.count.toString()}
                />
                <View style={countViewStyle}>
                    <Pressable onPress={this.props.CounterIncrement}>
                        <Text style={styles.welcome_txt}>+</Text>
                    </Pressable>
                    <Text style={welcome}>
                        {this.props.count}
                    </Text>
                    <Pressable onPress={this.props.CounterDecrement}>
                        <Text style={styles.welcome_txt} >-</Text>
                    </Pressable>
                </View>
                <Button onPress={this.props.CounterClear} title="Clear" />
                {/*<Text style={styles.text_props}> {this.props.hello.helloText} </Text> */}
                <Text style={styles.text_props}> {helloText} </Text>
                <Text style={styles.text_line}> Did you press the button ? {pressedButton.toString()} </Text>
                <Pressable  onPress={this.props.HelloAction} >
                    <Text style={styles.text_btn}>Click Button</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize:25,
        fontWeight:'bold',
        textDecorationLine: 'underline',
        textAlign: "center",
        margin: 10,
        marginLeft: 25,
        marginRight: 25
    },
    countViewStyle: {
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    },
    welcome_txt: {
        fontSize: 30,
    },
    text_props:{
        marginTop: 20
    },
    text_btn:{
        color: "blue",
        textDecorationLine: 'underline',
    },
    text_line:{
        fontSize: 18,
        marginTop:10
    }
});

function mapStateToprops(state) {
    return {
        count: state.counter,
        hello: state.hello
    }
}

export default connect(mapStateToprops, { CounterIncrement, CounterDecrement, CounterClear, CounterSet, HelloAction })(Main);