import {API} from '../constants/paths';
import {get,del,post,put} from '../helper/helper'
import CookieService from './cookie.service'
class AuthService{

    login(payload){
        return post(API.SIGNIN,payload);
    }
    register(payload){
        return post(API.SIGNUP,payload);
    }
    logout(){
        CookieService.remove("token");
    }
}

export default new AuthService();