import {Client,Account,ID} from 'appwrite'
import conf from '../conf/conf';
export class AuthService{
    client=new Client();
    account
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const user=await this.account.create(ID.unique(),email,password,name);
            if(user){
                this.login({email,password});
            }
            else{
                return user
            }
        } catch (error) {
            console.log("An error has occured in creating accouunt",error);
            }

    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("An error has occured in login",error)
        }
    }
    async logout(){
        
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("An  error has occured in logout",error);
        }
    }
    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("in getuser",error)
        }
    }

}
const authService=new AuthService();
export default authService;