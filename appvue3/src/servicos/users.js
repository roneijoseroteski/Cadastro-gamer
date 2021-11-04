import { http } from './httpconfig';
export default {
  listar: () => {
    return http.get('Register');
  },
  salvar: (userprofile) => {
    return http.post('Register', userprofile);
  },
  atualizar: (userprofile)=> {
    return http.put(`Register/${userprofile.id}`, userprofile);
  },
  delete: (userprofile) => {
    return http.delete(`Register/${userprofile}`);
  },
};