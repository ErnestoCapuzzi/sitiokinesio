// ===== CONFIG =====
const WHATSAPP_NUMBER = "54911XXXXXXXXXX"; // Reemplazar
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola! Quiero reservar un turno en Espacio Kinesio.\n\n" +
  "Datos:\n" +
  "- Dolor/consulta:\n" +
  "- Hace cuánto:\n" +
  "- Objetivo:\n" +
  "- Preferencia: consultorio o a domicilio:\n"
);

function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
}

function setCtas() {
  const link = waLink();
  ["ctaTop","ctaHero","ctaCard","ctaMid","ctaBottom","ctaSticky","ctaStickyMirror"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

function setupFaq() {
  const qs = document.querySelectorAll(".faq__q");
  qs.forEach(btn => {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      qs.forEach(b => {
        b.setAttribute("aria-expanded", "false");
        const icon = b.querySelector(".faq__icon");
        if (icon) icon.textContent = "+";
        const ans = b.nextElementSibling;
        if (ans) ans.hidden = true;
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        const icon = btn.querySelector(".faq__icon");
        if (icon) icon.textContent = "−";
        const ans = btn.nextElementSibling;
        if (ans) ans.hidden = false;
      }
    });
  });
}

function setYear(){
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

setCtas();
setupFaq();
setYear();
