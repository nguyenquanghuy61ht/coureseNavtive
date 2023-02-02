import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


const App = () => {
  const [courseGoal, setCourseGoal] = useState([])
  const [showModal,setShowModal]=useState(false)
  const addGoalHandler = (enterGoalText) => {
    setCourseGoal(currentCourseGoal => [...currentCourseGoal, { text: enterGoalText, id: Math.random().toString() }]);
    setShowModal(false)
  }
  const cancelHandler = ()=>{
    setShowModal(false)
  }
  const openModalHandler =()=>{
    setShowModal(true)
  }
  const deleteGoalHandeler=(id)=>{
    setCourseGoal((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=>goal.id!==id)
    });
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button color='blue' title='Add New Goal' onPress={openModalHandler} />
        <GoalInput visible={showModal} onCancel={cancelHandler} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoal} renderItem={itemData => {
            return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandeler} />
          }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>

      </View>
    </>
    
  )
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    padding:10
  },
  goalsContainer: {
    flex: 3
  },
});

export default App;