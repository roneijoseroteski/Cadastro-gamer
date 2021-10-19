import { http } from '../servicos/httpconfig';

export default {
 
  listar:() => {
    return http.get('Users')
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