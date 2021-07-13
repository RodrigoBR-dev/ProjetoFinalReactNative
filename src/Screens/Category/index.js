import React, { useState , useEffect} from 'react';
import { FlatList, View , Text} from 'react-native';

import apiProduto from '../../service/apiProduto';
import CardCategory from '../../components/cardCategory/index';
import styles from './styles';

const Category = () => {
    const [category, setCategory] = useState([]);
 
    const searchCategory = async () =>{
      const response = await apiProduto.searchCategory();
      setCategory(response.data)
      
    } 

    // const renderCategory = ({ item }) => (
    //     <CardCategory nome={item}/>
    //   );


    useEffect(() => {
        searchCategory();
    },[]);

  return (
    <View >
        <FlatList
        data={category}
        keyExtractor={ (item,index) => String(index) }
        renderItem={({item}) => (
          <View style={styles.container}>
              <View style={styles.card}>
                <Text style={styles.title}>{item.nome}</Text>
              </View>
          </View>
          )}
        />
    </View>
  )
}

export default Category;