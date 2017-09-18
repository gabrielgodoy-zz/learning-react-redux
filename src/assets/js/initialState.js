// Uma imagem de como a store inicializa
// Um arquivo centralizado para declarar o estado inicial  da store para todos os reducers lerem
// Cada reducer lida com um pedaço da store declarado aqui

export default {
  authors: [],
  courses: [],
  ajaxCallsInProgress: 0,
};
