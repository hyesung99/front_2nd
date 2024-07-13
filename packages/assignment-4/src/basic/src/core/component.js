export class Component {
  eventListeners = [];
  element = null;
  props = {};
  state = {};

  constructor(props = {}, initialState = {}) {
    this.props = props;
    this.state = initialState;
    this.element = this.createElement();
    this.eventListeners = [];
    this.mount();
  }

  createElement() {
    return document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  mount() {}

  render() {}

  appendChild(child) {
    if (child instanceof Component) {
      this.element.appendChild(child.element);
    } else {
      this.element.appendChild(child);
    }
  }

  updateProps(newProps) {
    this.props = { ...this.props, ...newProps };
    this.render();
  }

  unmount() {
    Object.keys(this.eventListeners).forEach((eventType) => {
      this.element.removeEventListener(
        eventType,
        this.eventListeners[eventType]
      );
    });
  }

  addEventDelegate(eventType, selector, callback) {
    const listener = (event) => {
      if (event.target.matches(selector)) {
        callback(event);
      }
    };

    this.element.addEventListener(eventType, listener);

    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = [];
    }
    this.eventListeners[eventType].push(listener);
  }

  removeEventDelegate(eventType) {
    if (this.eventListeners[eventType]) {
      this.eventListeners[eventType].forEach((listener) => {
        this.element.removeEventListener(eventType, listener);
      });
      delete this.eventListeners[eventType];
    }
  }
}
