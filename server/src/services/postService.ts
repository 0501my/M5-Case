import {AppDataSource} from "../data-source";
import {Post} from "../models/post";

class PostService{
    private postRepository
    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }
    getAll = async () => {
        let sql = `select * from post join job_detail jd on post.idPost = jd.postId join job j on jd.jobId = j.jobId`;
        let posts = await this.postRepository.query(sql);
        if (!posts) {
            return 'No posts found'
        }
        return posts;
    }
    save = async (post) => {
        return   this.postRepository.save(post)
    }
    updatePost = async (idPost, newPost) => {
        let posts = await this.postRepository.findOneBy({idPost: idPost})
        if (!posts) {
            return null
        }
        return await this.postRepository.update({idPost: idPost}, newPost)
    }
    removePost = async (idPost) => {
        let posts = await this.postRepository.findOneBy({idPost : idPost});
        if(!posts){
            return null
        }
        return this.postRepository.delete({idPost : idPost});
    }
    findById = async (idPost)=> {
        let posts = await this.postRepository.findOneBy({idPost :idPost});
        if (!posts) {
            return null;
        }
        return posts
    }
}
export default new PostService();