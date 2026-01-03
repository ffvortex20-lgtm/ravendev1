const input = document.getElementById("link");
const btn = document.getElementById("enviar");

input.addEventListener("input", () => {
  btn.style.display = input.value.trim() ? "block" : "none";
});

function gerar() {
  const link = input.value.trim();
  if (!link.startsWith("http")) {
    alert("Link inválido");
    return;
  }

  const encoded = encodeURIComponent(link);
  const base = location.origin + location.pathname.replace("index.html","");
  const final = `${base}unlock.html?url=${encoded}`;

  document.getElementById("resultado").innerHTML =
    `<strong>Link gerado:</strong><br>
     <a href="${final}" target="_blank">${final}</a>`;
}
