import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

// View -> UIView
export default function App() {
  

  const [beers, setBeers] = useState([]);
  const [newBeer, setNewBeer] = useState('');

  const handleAddBeer = () => {
      if (newBeer.trim() !== '') {
        setBeers([...beers, newBeer]);
        setNewBeer('');
      }
  };
  

  const handleRemoveBeer = (index) => {
    const updateList = [...beers];
    updateList.splice(index, 1);
    setBeers(updateList);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => handleRemoveItem(index)}>
        <Text style={styles.removeItemText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (

    <View style={styles.container}>
      <View style ={styles.header}>
       <Text style={styles.boldText}>Wish List</Text>
      </View>
      <Text> Enter name of Beer: </Text>
      <TextInput 
       style={styles.input}
       placeholder='Enter Beer Name'
       value={newBeer}
       onChangeText={(text)=>setNewBeer(text)}
      />

      <TouchableOpacity 
       style={styles.addButton}
       onPress={handleAddBeer}>
        <Text 
        style={styles.addButtonText}>
        Add Beer</Text>
      </TouchableOpacity>
      <FlatList
       data={beers}
       renderItem={renderItem}
       keyExtractor={(item, index) => index.toString()}/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
  removeItemText: {
    color: 'red',
    fontSize: 14,
  },
});
