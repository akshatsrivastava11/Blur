import conf from '../conf/conf'
import {Client,ID,Databases,Storage,Query} from 'appwrite'
export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
        }
    // setting up posts
    // 1.creating poosts
    async createPost({title,content}){
       try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(),
            {
                title,
                content
            }
        )
       } catch (error) {
        console.log(error);
       }
    }
    // 2.updating posts
    async updatePost({title,status,featuredimg,content,userid},slug){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    status,
                    featuredimg,
                    content,
                    userid,

                }
            )
        } catch (error) {
            console.log("Error in updatepost",error)
        }
    }
    // 3.deleting posts
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("error in deletepost",error);
        }
    }
    // 4.getting single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error in getPost",error);
        }
    }
    async listPost([]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
            )
        } catch (error) {
            console.log(error);
        }
    }
    // setting up files
    // 1.create file
    async createFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error in create file",error)
        }
    }
    // 2.get file
    async getFilePreview(file_id){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                file_id
            )
        } catch (error) {
            console.log("error in getfilepreview",error)
        }
    }
    // 3.delete file
    async deleteFile(file_id){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                file_id
            )
        } catch (error) {
            console.log("Error in deletwfile",error)
        }
    }

}
export const service=new Service();
