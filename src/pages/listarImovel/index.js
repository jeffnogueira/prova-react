import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getAll } from '../../services/imovelService';
import { Card, CardTitle, CardContent } from 'react-native-cards';
import styles from './styles';

function ListarImovel({ navigation }) {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [imoveis, setImoveis] = useState('');
  
  useEffect(() => {
    listarImoveis();
  }, []);
  
  useEffect(() => {
    listarImoveis();
  }, excluir());
  
  function excluir(idImovel) {
    dispatch({type: 'DELETAR_IMOVEL_REQUEST', idImovel})
  }

  async function listarImoveis() {
    await getAll(auth.usuario.idUsuario)
      .then(result => {
        setImoveis(result);
      }).catch(erro => {
        const test = []
        setImoveis(test)
      })
  }
  if (imoveis.length < 1) {
    return (
      <View>
        <Text>Nenhum Imovel Cadastrado</Text>
      </View>
    );
  }
  else {
    return (
      <View>
        <ScrollView>
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
                <TouchableOpacity style={styles.buttonDelete} onPress={() => excluir(item.idImovel)}>
                  <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('EditarImovel', { item })}>
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    )
  }
}

export default ListarImovel;