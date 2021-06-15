import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Item from './components/Item';

export default function App() {
  const [item, setItem] = useState('');
  const [itemItems, setItemItems] = useState([]);


  const handleAddItem = () => {
    Keyboard.dismiss();
    setItemItems([...itemItems, item]);
    setItem('');
  }

  const completeItem = (index) => {
    let itemsCopy = [...itemItems];
    itemsCopy.splice(index, 1);
    setItemItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Shopping List */}
      <View style={styles.listWrapper}>
        <Text style={styles.sectionTitle}>Duplicart</Text>

        <View style={styles.items}>
          {/* This is where the shopping list will go */}
          {
            itemItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeItem(index)}>
                  <Item text={item} />
                </TouchableOpacity>
              )
            })
          }

        </View>

      </View>


      {/* Create a new item */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItemWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add to shopping list'} value={item} onChangeText={text => setItem(text)} />

        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeItemWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText: {

  },
});
