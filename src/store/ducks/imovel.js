import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* types & actions creators */
const {Types, Creators} = createActions({
  retornoInFailure: ['imovel'],
  retornoInSuccess: ['imovel'],
  cadastrarImovelRequest: ['imovel'],
  editarImovelRequest: ['imovel'],
  deletarImovelRequest: ['id'],
});

export const imovelTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  imovel: null,
});

/* Reducers */

export const requestReducer = (state, {imovel}) => {
  return state.merge({
    loading: false,
    imovel: imovel,
  });
};

export const retornoInSuccessReducer = (state, {imovel}) => {
    return state.merge({
      loading: false,
      imovel: imovel,
    });
  };
  
  export const retornoInFailureReducer = (state, {imovel})  => {
    return state.merge({
      loading: false,
      imovel: null,
    });
  };


  export const cadastrarImovelRequestReducer = state =>
    state.merge({
        loading: true,
        imovel: null,
    });

  export const editarImovelRequestReducer = state =>
    state.merge({
        loading: true,
        imovel: null,
    });

    export const excluirImovelRequestReducer = state =>
      state.merge({
          loading: true,
      });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RETORNO_IN_SUCCESS]: retornoInSuccessReducer,
  [Types.RETORNO_IN_FAILURE]: retornoInFailureReducer,
  [Types.CADASTRAR_IMOVEL_REQUEST]: cadastrarImovelRequestReducer,
  [Types.EDITAR_IMOVEL_REQUEST]: editarImovelRequestReducer,
  [Types.DELETAR_IMOVEL_REQUEST]: excluirImovelRequestReducer,
});