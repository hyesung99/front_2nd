import { Component } from "../core/component";
import { ProductService } from "../services/productSelector";

export class ProductSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: ProductService.getInitialProductId(),
    };
    this.render();
  }

  createElement() {
    const div = document.createElement("div");
    div.className = "product-selector";
    return div;
  }

  mount() {
    this.addEventDelegate("click", "#add-to-cart", () => {
      const selectedProduct = ProductService.getProductById(
        this.state.selectedProduct
      );
      if (selectedProduct) {
        this.props.onAdd(selectedProduct);
      }
    });
    this.addEventDelegate("change", "#product-select", (event) => {
      this.setState({ selectedProduct: event.target.value });
    });
  }

  render() {
    const productOptions = ProductService.getProductOptions();
    this.element.innerHTML = `
      <select id="product-select" class="border rounded p-2 mr-2">
        ${productOptions
          .map(
            (p) =>
              `<option value="${p.id}" ${
                p.id === this.state.selectedProduct ? "selected" : ""
              }>${p.name} - ${p.price}원</option>`
          )
          .join("")}
      </select>
      <button id="add-to-cart" class="bg-blue-500 text-white px-4 py-2 rounded">추가</button>
    `;
  }
}
