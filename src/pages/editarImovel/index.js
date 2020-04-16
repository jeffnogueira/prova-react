import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import styles from './styles';
import Imovel from '../../model/imovel.js';

function EditarImovel({ navigation }) {

  const objeto = navigation.getParam('item', 'NO-ITEM');
  const auth = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const [idImovel, setIdImovel] = useState('');
  const [descricao, setDescricao] = useState('');
  const [email, setEmail] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [situacaoImovel, setSituacaoImovel] = useState('');

  useEffect(() => {
    inicializar();
  }, []);
  
  /*useEffect(() => {
    navigation.navigate('CadastrarImovel');
  }, salvar());*/

  async function inicializar() {
    
    setIdImovel(objeto.idImovel);
    setDescricao(objeto.descricao);
    setEmail(objeto.email);
    setLogradouro(objeto.logradouro);
    setNumero(objeto.numero);
    setComplemento(objeto.complemento);
    setBairro(objeto.bairro);
    setCidade(objeto.cidade);
    setCep(objeto.cep);
    setUf(objeto.uf);
    setSituacaoImovel(objeto.situacaoImovel);

  }

  function salvar() {
    var imovel = new Imovel();
    imovel.idImovel = idImovel
    imovel.descricao = descricao
    imovel.email = email
    imovel.logradouro = logradouro
    imovel.numero = numero
    imovel.complemento = complemento
    imovel.bairro = bairro
    imovel.cidade = cidade
    imovel.cep = cep
    imovel.uf = uf
    imovel.situacaoImovel = situacaoImovel
    
    dispatch({type: 'EDITAR_IMOVEL_REQUEST', imovel});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.form}>
          <View style={styles.form}>
            <Text style={{color:'white'}}>Descrição</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Logradouro</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={logradouro}
              onChangeText={(text) => setLogradouro(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Número</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={numero}
              onChangeText={(text) => setNumero(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Complemento</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={complemento}
              onChangeText={(text) => setComplemento(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Bairro</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Cidade</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={cidade}
              onChangeText={(text) => setCidade(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>CEP</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={cep}
              onChangeText={(text) => setCep(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>UF</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={uf}
              onChangeText={(text) => setUf(text)}
            />
          </View>

          <View style={styles.form}>
            <Text style={{color:'white'}}>Situação</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={situacaoImovel}
              onChangeText={(text) => setSituacaoImovel(text)}
            />
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => salvar()}>
              {auth.loading && <ActivityIndicator size="large" color="white" />}
              {!auth.loading && <Text style={styles.buttonText}>Salvar</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditarImovel;
