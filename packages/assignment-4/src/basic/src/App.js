import { ProductSelector } from "./components/ProductSelector";
import { ShoppingCart } from "./components/ShoppingCart";
import { Component } from "./core/component";

export class App extends Component {
  constructor() {
    super();
    this.render();
  }
  createElement() {
    const div = document.createElement("div");
    div.className = "bg-gray-100 p-8";
    return div;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.className =
      "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8";

    this.shoppingCart = new ShoppingCart({ items: {} });
    this.productSelector = new ProductSelector({
      onAdd: (product) => this.shoppingCart.addItem(product),
    });

    containerDiv.appendChild(this.shoppingCart.element);
    containerDiv.appendChild(this.productSelector.element);
    this.element.appendChild(containerDiv);
  }
}
