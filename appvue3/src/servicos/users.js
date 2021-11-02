import { http } from '../servicos/httpconfig';

export default {
 
  listar:() => {
    return http.get('Register')
  },

  salvar:(userprofile) => {
    return http.post('Register', userprofile);
  },
  atualizar:(userprofile)=> {
    return http.put(`Register/${userprofile.id}`, userprofile)

  },
  delete:(userprofile)=> {
    return http.delete(`Register/${userprofile}`)
  }
  // listar: () => {
  //  console.log('entrou listar')
  //     http.get('Users').then(response => {
  //      let req = response.data.user 
  //     //  console.log(req)
  //       return req
  //     })
    
  // }
}