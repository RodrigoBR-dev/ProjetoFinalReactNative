import React, { useState , useEffect} from 'react';
import { FlatList, View } from 'react-native';

import Product from '../../model/produto'
import apiProduto from '../../service/apiProduto';
import CardCategory from '../../components/cardCategory/index';
// import { Container } from './styles';

const Category = () => {
    const [category, setCategory] = useState('');
    const [products,setProducts] = useState([]);

    const searchCategory = async () =>{
      const response = await apiProduto.buscarTodosProduto();
      setProducts(response.data.map( product => new Product(product)));
    }

    const renderCategory = ({ item }) => (
        <CardCategory nome={item.categoria}/>
      );


    useEffect(() => {
        searchCategory();

    });

  return (
    <View >
        <FlatList
        renderItem={products}
        keyExtractor={ item => item.nome}
        renderItem={renderCategory}
        />
    </View>
  )
}

export default Category;