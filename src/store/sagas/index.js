import {all, takeLatest, take} from 'redux-saga/effects';

// Importar os métodos
import {login, manterUsuario} from './auth';
import {manterImovel, editarImovel, excluirImovel} from './imovel';
import {apresentarMensagem} from './mensagem';

// Importar os types
import {imovelTypes} from '../ducks/imovel'
import {AuthTypes} from '../ducks/auth';
import {MensagemTypes} from '../ducks/mensagem';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, login),
    takeLatest(AuthTypes.CADASTRAR_USUARIO_REQUEST, manterUsuario),
    takeLatest(MensagemTypes.SET_MENSAGEM, apresentarMensagem),
    takeLatest(imovelTypes.CADASTRAR_IMOVEL_REQUEST, manterImovel),
    takeLatest(imovelTypes.EDITAR_IMOVEL_REQUEST, editarImovel),
    takeLatest(imovelTypes.DELETAR_IMOVEL_REQUEST, excluirImovel)
  ]);
}
