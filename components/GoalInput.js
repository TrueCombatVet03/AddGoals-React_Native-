import {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    
    function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require ('../assets/images/target.png')}/>
                <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>    
                        <Button title='Cancel' onPress={props.onCancel} color='#a01e96' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#48bbca' />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 16,
        backgroundColor: 'rgba(31, 69, 143, 0.8)',
    },
    image: {
        width: 100,
        height:100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#b06bec',
        backgroundColor: '#90ace0',
        width: '100%',
        padding: 10,
        color: '#faf5f5',
        borderRadius: 6,
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection:'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});