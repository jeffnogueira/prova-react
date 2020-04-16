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

function CadastroImovel({ navigation }) {

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

  const auth = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  function salvar() {
    var imovel = new Imovel();
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
    imovel.idUsuario = auth.usuario.idUsuario
    imovel.usuario = auth.usuario
    
    dispatch({type: 'CADASTRAR_IMOVEL_REQUEST', imovel});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.form}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Descricao do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o Email do Dono do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o logradouro do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={logradouro}
              onChangeText={(text) => setLogradouro(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o numero do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={numero}
              onChangeText={(text) => setNumero(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o complemento do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={complemento}
              onChangeText={(text) => setComplemento(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o bairro do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o cidade do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={cidade}
              onChangeText={(text) => setCidade(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o cep do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={cep}
              onChangeText={(text) => setCep(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o uf do Imovel"
              autoCapitalize="none"
              autoCorrect={false}
              value={uf}
              onChangeText={(text) => setUf(text)}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Digite o situacao do Imovel"
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

export default CadastroImovel;
