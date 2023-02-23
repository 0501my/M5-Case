"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const post_1 = require("../models/post");
class PostService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from post join job_detail jd on post.idPost = jd.postId join job j on jd.jobId = j.jobId`;
            let posts = await this.postRepository.query(sql);
            if (!posts) {
                return 'No posts found';
            }
            return posts;
        };
        this.save = async (post) => {
            return this.postRepository.save(post);
        };
        this.updatePost = async (idPost, newPost) => {
            let posts = await this.postRepository.findOneBy({ idPost: idPost });
            if (!posts) {
                return null;
            }
            return await this.postRepository.update({ idPost: idPost }, newPost);
        };
        this.removePost = async (idPost) => {
            let posts = await this.postRepository.findOneBy({ idPost: idPost });
            if (!posts) {
                return null;
            }
            return this.postRepository.delete({ idPost: idPost });
        };
        this.findById = async (idPost) => {
            let posts = await this.postRepository.findOneBy({ idPost: idPost });
            if (!posts) {
                return null;
            }
            return posts;
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map