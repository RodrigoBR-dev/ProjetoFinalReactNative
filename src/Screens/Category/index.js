import React, { useState , useEffect} from 'react';
import { FlatList, View , Text, TouchableOpacity} from 'react-native';

import Header from '../../components/Header'; //add header com input de busca
import Produto from "../../model/produto";
import apiProduto from '../../service/apiProduto';
import Card from '../../components/Card';
import styles from './styles';

const Category = () => {
    const [category, setCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([])
 
    const searchCategory = async () =>{
      const response = await apiProduto.searchCategory();
      setCategory(response.data)
    } 
    
    const handleProducts = async (categoria) => {
      setCategorySelected(true)
      const resposta = await apiProduto.buscarTodosProduto();
      setProducts(resposta.data.map((produto) => new Produto(produto)));
      console.log(products.filter((produto) => (produto.categoria  == categoria )))
     
    };

    useEffect(() => {
        searchCategory();        
    },[]);

  return (
    
    <View >
      <Header isDetailsPage/>
      {categorySelected?
       <FlatList
       data={products}
       keyExtractor={ (item,index) => String(index) }
       renderItem={({item}) => {
        // console.log(item) 
        return(
          <Card
          name={item.nome}
          price={item.preco}
          image={item.url}
          description={item.descricao}
          />
          )
       }}
       />
       :
        <FlatList
        data={category}
        keyExtractor={ (item,index) => String(index) }
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleProducts(item.categoria) } style={styles.container}>
              <View style={styles.card}>
                <Text style={styles.title}>{item.nome}</Text>
              </View>
          </TouchableOpacity>
          )}
        />
        }
        
    </View>
  )
}

export default Category;