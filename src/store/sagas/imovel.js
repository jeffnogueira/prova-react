import {call, put, select} from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';
import {ToastActionsCreators} from 'react-native-redux-toast';
import {
  getAll,
  insert,
  getSearch,
  update,
  excluir,
} from '../../services/imovelService';

import ImovelActions from '../ducks/imovel';

/* função para apresentar o erro */

function* apresentarMensagem(tipo, imovel, mensagem) {
  if (tipo === 1) {
    yield put(ImovelActions.retornoInFailure(imovel));
    yield put(ToastActionsCreators.displayError(mensagem));
  } else {
    yield put(ImovelActions.retornoInSuccess(imovel));
    yield put(ToastActionsCreators.displayInfo(mensagem));
  }
}

/* Função para pesquisar o usuário a partir do IdeUsuario */

function* pesquisarImovelPorIdentificacaoDoUsuario(ideUsuario) {
  const retorno = yield getAll(ideUsuario)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}
/* Função para incluir um usuário */

function* incluir(imovel) {
  const retorno = yield insert(imovel)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

function* editar(imovel) {
  const retorno = yield update(imovel)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

function* deleteImovel(idImovel) {
  const retorno = yield excluir(idImovel)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

/* Função para cadastrar um usuário */
export function* manterImovel(action) {
  try {
    const {isConnected} = yield NetInfo.fetch();
    if (isConnected) {
      var mensagemErro = yield consistirDadosImovel(2, action.imovel);
      if (mensagemErro !== '') {
        yield apresentarMensagem(1, action.imovel, mensagemErro);
        return;
      }
      ToastActionsCreators.displayInfo('Incluindo Imovel');
      var retorno = yield incluir(action.imovel);
      if (retorno.tipo === 1) {
        yield apresentarMensagem(
          2,
          retorno.imovel,
          'Inclusão efetuada com sucesso',
        );
        return;
      } else {
        yield apresentarMensagem(1, action.imovel, retorno.mensagem);
        return;
      }
    } else {
      yield apresentarMensagem(1, action.imovel, 'Sem conexão com internet');
    }
  } catch (err) {
    yield apresentarMensagem(1, action.imovel, err.message);
    return;
  }
}

export function* editarImovel(action) {
  try {
    const {isConnected} = yield NetInfo.fetch();
    if (isConnected) {
      var mensagemErro = yield consistirDadosImovel(2, action.imovel);
      if (mensagemErro !== '') {
        yield apresentarMensagem(1, action.imovel, mensagemErro);
        return;
      }
      ToastActionsCreators.displayInfo('Atualizando Imovel');
      var retorno = yield editar(action.imovel);
      if (retorno.tipo === 1) {
        yield apresentarMensagem(
          2,
          retorno.imovel,
          'Atualização efetuada com sucesso',
        );
        return;
      } else {
        yield apresentarMensagem(1, action.imovel, retorno.mensagem);
        return;
      }
    } else {
      yield apresentarMensagem(1, action.imovel, 'Sem conexão com internet');
    }
  } catch (err) {
    yield apresentarMensagem(1, action.imovel, err.message);
    return;
  }
}

export function* excluirImovel(action) {
  try {
    const {isConnected} = yield NetInfo.fetch();
    if (isConnected) {
      ToastActionsCreators.displayInfo('Excluindo Imovel');
      var retorno = yield deleteImovel(action.idImovel);
      if (retorno.tipo === 1) {
        yield apresentarMensagem(
          2,
          retorno.imovel,
          'Exclusão efetuada com sucesso',
        );
        return;
      } else {
        yield apresentarMensagem(1, action.imovel, retorno.mensagem);
        return;
      }
    } else {
      yield apresentarMensagem(1, action.imovel, 'Sem conexão com internet');
    }
  } catch (err) {
    yield apresentarMensagem(1, action.imovel, err.message);
    return;
  }
}

function consistirDadosImovel(origem, imovel) {
  if (origem === 2) {
      if (imovel.descricao === '') {
          return 'Favor informar a descrição do Imovel.';
      }
      if (imovel.email === '') {
          return 'Favor informar o EMail do Imovel.';
      }
      if (imovel.logradouro === '') {
          return 'Favor informar o logradouro do Imovel.';
      }
      if (imovel.numero === '') {
          return 'Favor informar o numero do Imovel.';
      }
      if (imovel.bairro === '') {
          return 'Favor informar o bairro do Imovel.';
      }
      if (imovel.cidade === '') {
          return 'Favor informar a cidade do Imovel.';
      }
      if (imovel.cep === '') {
          return 'Favor informar o cep do Imovel.';
      }
      if (imovel.uf === '') {
          return 'Favor informar o UF do Imovel.';
      }
      if (imovel.IdUsuario === '') {
          return 'Favor informar o usuario do Imovel.';
      }
      if (imovel.situacaoImovel === '') {
          return 'Favor informar a situação do Imovel.';
      }
  }
  return '';
}

