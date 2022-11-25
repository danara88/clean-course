import {
  JsonDataBaseService,
  LocalDataBaseService,
  PostProvider,
} from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // Esto no es correcto. Es una dependencia oculta
    // const jsonDB = new JsonDataBaseService();

    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
