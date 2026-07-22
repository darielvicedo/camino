import "./scss/main.scss";

import renderHeader from "./header";

document.querySelector<HTMLBodyElement>("body")!.innerHTML = /*html*/ `
<header class="shadow-sm"></header>

<main></main>

<footer></footer>
`;

document.querySelector<HTMLHeadingElement>("header")!.innerHTML = renderHeader();