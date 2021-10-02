customElements.define(
  "inline-circle",
  class InlineCircle extends HTMLElement {
    connectedCallback() {
      this.style.display = "inline-block";
      this.style.borderRadius = "50%";
      this.style.border = "solid black 1px";
      this.style.transform = "translateY(10%)";
      if (!this.style.backgroundColor) {
        this.style.backgroundColor = "blue";
      }
      if (!this.style.width) {
        this.style.width = "1.0em";
      }
      if (!this.style.height) {
        this.style.height = "1.0em";
      }
    }
    static get observedAttributes() {
      return ["diameter", "color"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "diameter":
          this.style.width = newValue;
          this.style.height = newValue;
          break;
        case "color":
          this.style.backgroundColor = newValue;
          break;
      }
    }
    get diameter() {
      return this.getAttribute("diameter");
    }
    set diameter(diameter) {
      this.setAttribute("diameter", diameter);
    }
    get color() {
      return this.getAttribute("color");
    }
    set color(color) {
      this.setAttribute("color", color);
    }
  }
);
