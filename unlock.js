const params = new URLSearchParams(window.location.search);
const url = params.get("url");

function verificar() {
  if (!url) {
    alert("Link inválido");
    return;
  }

  document.getElementById("verificar").style.display = "none";
  document.getElementById("baixar").style.display = "block";
}

function abrir() {
  window.location.href = decodeURIComponent(url);
}
