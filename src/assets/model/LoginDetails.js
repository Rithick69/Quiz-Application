export default class LoginDetails{
    constructor(){
       this._email = '';
       this._password = '';
    }
    get email(){
        return this._email;
    }
    set email(value){
        return this._email = value;
    }
    get password(){
        return this._password;
    }
    set password(value){
        return this._password = value;
    }
}