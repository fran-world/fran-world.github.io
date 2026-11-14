// Selector de idioma ES / EN.
// Recuerda tu elección y, la primera vez, usa el idioma del navegador.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en");

  function apply(l) {
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    var btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = l === "es" ? "EN" : "ES";
  }

  apply(lang);

  document.addEventListener("DOMContentLoaded", function () {
    apply(document.documentElement.lang);
    var btn = document.getElementById("lang-btn");
    if (btn) btn.addEventListener("click", function () {
      apply(document.documentElement.lang === "es" ? "en" : "es");
    });
  });
})();
