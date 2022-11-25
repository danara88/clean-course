// Hay que agregar la dependencia de axios ```yarn add axios```

import { HttpClient } from "./02-open-close-c";

/**
 * Es importante no tener una fuerte dependencia a codigo de tercero,
 * porque nosotros no controlamos ese codigo.
 */
// import axios from "axios";

export class TodoService {
  constructor(private httpClient: HttpClient) {}

  async getTodoItems() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private httpClient: HttpClient) {}

  async getPosts() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  async getPhotos() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
