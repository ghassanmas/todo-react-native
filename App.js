/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Keyboard,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Todo from './Todo';
class App extends React.Component {
  state = {
    text: '',
    tasks: [],
    done: false,
  };

  onPress = () => {
    if (this.state.text === '') {
      return;
    }
    this.setState(
      ({tasks, text}) => {
        Keyboard.dismiss();
        return {
          tasks: [...tasks, {text, complete: false}],
          text: '',
        };
      },
      () => {
        console.log(this.state.tasks);
      },
    );
  };
  toggleList = () => {
    this.setState(({done}) => {
      return {done: !done};
    });
  };

  onSelectTask = index => {
    console.log(index);
    this.setState(prevState => {
      const {tasks} = prevState;
      tasks[index].complete = !tasks[index].complete;
      return {
        tasks,
      };
    });
  };

  render() {
    return (
      <>
        <View style={styles.main}>
          <View style={styles.form}>
            <TextInput
              value={this.state.text}
              onChangeText={text => this.setState({text})}
              style={styles.normal}
            />
            <Button
              style={styles.normal}
              onPress={this.onPress}
              title="Add h"
            />
          </View>
          <View style={[styles.list]}>
            <FlatList
              data={this.state.tasks}
              title="Todo List"
              renderItem={({item, index}) => (
                <Todo
                  done={this.state.done}
                  onPress={this.onSelectTask}
                  index={index}
                  item={item}
                />
              )}
            />
          </View>
          <Text style={styles.normal} onPress={this.toggleList}>
            {this.state.done ? 'Not Done List' : 'Done List'}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 20,
  },
  list: {
    flex: 5,
    flexDirection: 'column',
  },
  main: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    marginLeft: 10,
    fontSize: 30,
  },

  body: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    color: Colors.black,
  },
  normal: {
    flex: 1,
  },
});

export default App;
