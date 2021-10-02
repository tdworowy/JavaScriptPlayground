function html(strings, ...values) {
  let escape = values.map((v) =>
    String(v)
      .replace("&", "&amp;")
      .replace("<", "&lt;")
      .replace(">", "&gt;")
      .replace('"', "&quot;")
      .replace("'", "&#39;")
  );
  let result = strings[0];
  for (let i = 0; i < escape.length; i++) {
    result += escape + strings[i + 1];
  }
  return result;
}

let operator = "<";
console.log(html`<b>x ${operator} y </b>`);

let kind = "game";
let name_ = "D&D";
console.log(html`<div class=${kind}>${name_}</div>`);

console.log(html`<>`);
