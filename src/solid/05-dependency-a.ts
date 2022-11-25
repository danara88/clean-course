import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  /**
   * Beneficio de usar la inyeccion de dependencias:
   * Estamos trabajando con el backend y nos entrega este JSON simulado.
   * Pero que tal si un día no pide regresar a nuestra implementación pasada ??
   * Facilmente podemos cambiar el source en este archivo
   */
  /**
   * Con el nuevo arreglo implementando abstracciones respetamos los principios:
   * 1. Open-Close principle: Ya que puedo seguir exapndiendo mis provedores sin tener que modificar código
   * dentro de mis clases.
   * 2. Liskov Substitution Principle: Ya que mi servicio acepta subtipos del tipo T
   * 3. Dependency Inversion Principle: Estamos usando inyeccion de dependencias y abstracciones
   */

  // const provider = new LocalDataBaseService();

  // const provider = new JsonDataBaseService();

  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
