import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState('')
  const goalInputHandler = (enterText) => {
    setEnterGoalText(enterText)
  };
  const addGoalHander = () => {
    props.onAddGoal(enterGoalText)
    setEnterGoalText('')
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageTitle}  source={require('../assets/images/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg')}/>
        <TextInput value={enterGoalText} style={styles.textInput} placeholder='your course goal !' onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          
          <View style={styles.button} >
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}  >
            <Button title="Add goal" onPress={addGoalHander} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding:20,
    backgroundColor:'#311B6C'

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    width: '100%',
    color:'#120438',
    marginRight: 8,
    padding: 16,
    borderRadius:6
  },
  buttonContainer:{
    flexDirection:'row',
     marginTop: 16,
  }
  ,
  button:{
    width:'30%',
    color:'white',
    margin:6
  },
  imageTitle:{
    width:100,
    height:100,
    margin:20,
    borderRadius:50
  }
})