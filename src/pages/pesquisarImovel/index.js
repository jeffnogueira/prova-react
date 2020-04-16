import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { getSearch } from '../../services/imovelService';
import { Card, CardTitle, CardContent } from 'react-native-cards';
import styles from './styles';

function ListarImovel({ navigation }) {

  const auth = useSelector((state) => state.auth);
  const [imoveis, setImoveis] = useState('');
  const [search, setSearch] = useState('');

  async function onSearch() {
    await getSearch(search)
      .then(result => {
        setImoveis(result);
      }).catch(erro => {
        const test = []
        setImoveis(test)
      })
  }
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisa"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => onSearch()}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      {imoveis.length == 0 && <Text>Nenhum Imovel Listado</Text>}
      {imoveis.length > 0 && <ScrollView>
        {imoveis.map((item, key) => {
          return (
            <Card key={item.idImovel}>
              <CardTitle subtitle={`Descrição: ${item.descricao}`} />
              <CardContent text={`Email: ${item.email}`}/>
              <CardContent text={`Logradouro: ${item.logradouro}`}/>
              <CardContent text={`Número: ${item.numero}`}/>
              <CardContent text={`Complemento: ${item.complemento}`}/>
              <CardContent text={`Bairro: ${item.bairro}`}/>
              <CardContent text={`Cidade: ${item.cidade}`}/>
              <CardContent text={`CEP: ${item.cep}`}/>
              <CardContent text={`UF: ${item.uf}`}/>
              <CardContent text={`Situação: ${item.situacaoImovel}`}/>
            </Card>
          );
        })}
      </ScrollView>}
    </View>
  )
}

export default ListarImovel;