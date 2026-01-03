const input = document.getElementById("link");
const btn = document.getElementById("gerar");
const platform = document.getElementById("platform");

function validar() {
  btn.style.display =
    input.value.trim() && platform.value ? "block" : "none";
}

input.addEventListener("input", validar);
platform.addEventListener("change", validar);

function gerarLink() {
  const link = input.value.trim();
  const plat = platform.value;

  if (!link.startsWith("http")) {
    alert("Link inválido");
    return;
  }

  const encoded = encodeURIComponent(link);
  const base =
    location.origin + location.pathname.replace("index.html", "");

  const final =
    `${base}unlock.html?url=${encoded}&p=${plat}`;

  document.getElementById("resultado").innerHTML = `
    <strong>Link RavenSub:</strong><br>
    <a href="${final}" target="_blank">${final}</a>
  `;
}

