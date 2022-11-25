// import axios from "axios";

/**
 * Clase cliente HTTP (Clase adaptadora)
 *
 * Este clase tiene el objetivo de evitar usar dependencia de terceros
 * en muchos lados.
 *
 * El beneficio que obtenemos es una mejor organizacion y tenemos una
 * app mantenible.
 *
 */
export class HttpClient {
  // async get(url: string) {
  //   const { data } = await axios.get(url);
  //   return data;
  // }

  async get(url: string) {
    const resp = await fetch(url);

    const data = await resp.json();

    return { data };
  }
}
