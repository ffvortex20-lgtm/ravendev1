const params = new URLSearchParams(window.location.search);
const url = params.get("url");
const plataforma = params.get("p");

const verificar = document.getElementById("verificar");
const baixar = document.getElementById("baixar");
const titulo = document.getElementById("titulo");

if (!url || !plataforma) {
  alert("Link inválido");
  location.href = "index.html";
}

const nomes = {
  youtube: "YouTube",
  tiktok: "TikTok",
  kwai: "Kwai",
  instagram: "Instagram",
  whatsapp_grupo: "WhatsApp Grupo",
  whatsapp_canal: "WhatsApp Canal"
};

titulo.innerText = `🔒 ${nomes[plataforma]}`;

let tempo = 5;
verificar.disabled = true;
verificar.innerText = `Aguarde ${tempo}s`;

const timer = setInterval(() => {
  tempo--;
  verificar.innerText = `Aguarde ${tempo}s`;

  if (tempo <= 0) {
    clearInterval(timer);
    verificar.innerText = "Verificar";
    verificar.disabled = false;
  }
}, 1000);

// Anti bot simples
document.addEventListener("visibilitychange", () => {
  if (document.hidden) location.reload();
});

verificar.onclick = () => {
  verificar.style.display = "none";
  baixar.style.display = "block";
};

baixar.onclick = () => {
  window.location.href = decodeURIComponent(url);
};
