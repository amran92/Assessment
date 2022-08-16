import React, { useState } from 'react';
import { ScrollView, View, Alert, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';




const DATA = [
  { title: 'lightseagreen', name: "This is lightseagreen color", color: '#90EE90' },
  { title: 'firebrick', name: "This is firebrick color", color: '#B22222' },
  { title: 'lightpink', name: "This is lightpink color", color: '#FFB6C1' },
  { title: 'maroon', name: "This is maroon color", color: '#800000' },
  { title: 'cornflowerblue', name: "This is cornflowerblue color", color: '#6495ED' },
  { title: 'lightcoral', name: "This is lightcoral color", color: '#F08080' },
  { title: 'orange', name: "This is orange color", color: '#FFA500' },
  { title: 'darksalmon', name: "This is darksalmon color", color: '#e9967a' },
];


const Testing = Math.floor(Math.random() * DATA.length)


const App = () => {
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [deleteItem, setDeleteItem] = useState(false)
  const [visible, setVisible] = useState(false)
  
  React.useEffect(() => {
    console.log("allItems", items)
    if (deleteItem && items.length > 0) {
      let allItems = items;
      let rtems = allItems.pop()
      setItems(allItems)
      setDeleteItem(false)
    }

  }, [deleteItem])


  const handleChange = () => {
 
    let index = Math.floor(Math.random() * DATA.length);
    console.log("Random Index", index)
    console.log("Selected Item", DATA[index])

    let allItems = items;
    allItems.push(DATA[index])
    setTotalItems(allItems.length)
    setItems(allItems)
  }


  const DeleteElement = () => {
    setDeleteItem(true)

  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.card}>
        {items.map((item, index) =>
          <TouchableOpacity onPress={() => Alert.alert(
            "Color",
            item?.name,
            [
              {
                text: "OK",
                onPress: () => {
                  setVisible(false);
                },
              },
            ],
            { cancelable: true }
          )} >
            <Text style={[styles.itemss, { backgroundColor: item?.color }]}>{item?.title}</Text>
          </TouchableOpacity>
        )}

      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 550, backgroundColor: 'white', padding: 15, position: 'absolute' }}>
        <Text style={{ width: '50%' }}>Current: {items.length} items</Text>
        <Text style={{ width: '50%' }}>Largest: {totalItems} items</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0 }}>
        <View style={{ backgroundColor: 'grey', width: '50%', justifyContent: 'center', alignItems: 'center', paddingVertical: 30 }}>
          <TouchableOpacity onPress={() => DeleteElement()}>
            <Text style={{ color: 'white' }}>Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: 'lightseagreen', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleChange()}>
            <Text style={{ color: 'white' }}>Push</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightseagreen'
  },
  card: {
    marginTop: 5,
    padding: 5,
  },
  title: {
    fontSize: 22,
  },
  itemss: {
    paddingLeft: 100,
    fontSize: 20
  }
});

export default App;