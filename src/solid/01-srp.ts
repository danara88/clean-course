/**
 * Single Responsability Principle
 */
(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Módulo para centralizar la información en esta clase
  // Reponsabildad única enfocada al producto.
  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  // Módulo para notificar a los clientes
  // Responsabilida única enfocada al mailer
  class Mailer {
    private email: string = "daniel@gmail.com";

    sendEmail(emailList: string[] = [], template: string) {
      console.log("Enviando correo a los clientes", emailList, template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      private productService: ProductService,
      private mailer: Mailer
    ) {}

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["johnDoe@gmail.com"], "clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService: ProductService = new ProductService();
  const mailer: Mailer = new Mailer();

  // Probar con este tipo de inyección de dependencias hace mas facil el testing
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
