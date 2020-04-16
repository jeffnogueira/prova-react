import Usuario from './usuario';

export default class Imovel {
    idImovel: number;
    descricao: String;
    email: String;
    logradouro: String;
    numero: number;
    complemento: String;
    bairro: String;
    cidade: String;
    cep: String;
    uf: String;
    situacaoImovel: String;
    idUsuario: number;
    usuario: Usuario;

    constructor() {
        this.idImovel = 0;
        this.descricao = '';
        this.email = '';
        this.logradouro = '';
        this.numero = 0;
        this.complemento = '';
        this.bairro = '';
        this.cidade = '';
        this.uf = '';
        this.cep = '';
        this.situacaoImovel = '';
        this.idUsuario = 0;
        this.usuario = new Usuario();
    }
  }