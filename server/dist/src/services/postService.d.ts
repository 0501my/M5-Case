declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (post: any) => Promise<any>;
    updatePost: (idPost: any, newPost: any) => Promise<any>;
    removePost: (idPost: any) => Promise<any>;
    findById: (idPost: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;