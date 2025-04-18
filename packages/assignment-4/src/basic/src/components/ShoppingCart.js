import { Component } from "../core/component";
import { ShoppingCartService } from "../services/shoppingCartService";

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
    this.render();
  }

  createElement() {
    const div = document.createElement("div");
    div.className = "shopping-cart";
    return div;
  }

  mount() {
    this.addEventDelegate("click", ".quantity-change", (e) => {
      const productId = e.target.dataset.productId;
      const change = parseInt(e.target.dataset.change);
      const newItems = ShoppingCartService.updateQuantity(
        this.state.items,
        productId,
        change
      );
      this.setState({ items: newItems });
    });

    this.addEventDelegate("click", ".remove-item", (e) => {
      const productId = e.target.dataset.productId;
      const newItems = ShoppingCartService.removeItem(
        this.state.items,
        productId
      );
      this.setState({ items: newItems });
    });
  }

  addItem(product) {
    const newItems = ShoppingCartService.addItem(this.state.items, product);
    this.setState({ items: newItems });
  }

  render() {
    const cartItemsHtml = Object.entries(this.state.items)
      .map(
        ([id, item]) =>
          `<div>
        ${item.name} - ${item.price}원 x ${item.quantity}
        <button class="quantity-change" data-change="-1" data-product-id="${id}">-</button>
        <button class="quantity-change" data-change="1" data-product-id="${id}">+</button>
        <button class="remove-item" data-product-id="${id}">삭제</button>
      </div>`
      )
      .join("");

    const total = ShoppingCartService.getTotal(this.state.items);

    this.element.innerHTML = `
      <h1 class="text-2xl font-bold mb-4">장바구니</h1>
      <div id="cart-items">${cartItemsHtml}</div>
      <div id="cart-total" class="text-xl font-bold my-4">총액: ${total}원</div>
    `;
  }
}
