import viteLogo from "./assets/vite.svg";

export default function renderHeader(): string {
  return /*html*/ `
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="${viteLogo}" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                El Camino de San Carlos
            </a>
        </div>
    </nav>
`;
}
