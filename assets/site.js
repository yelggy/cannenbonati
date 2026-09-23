(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".has-sub > .submenu-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var parent = btn.parentElement;
      var open = parent.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".has-sub.is-open").forEach(function (li) {
      if (!li.contains(e.target)) li.classList.remove("is-open");
    });
  });

  // Simple lightbox for gallery anchors
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".gallery-grid a[href]")
  );
  if (!links.length) return;

  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML =
    '<button type="button" class="lightbox__close" aria-label="Schliessen">&times;</button><img alt="">';
  document.body.appendChild(lb);
  var img = lb.querySelector("img");
  var closeBtn = lb.querySelector(".lightbox__close");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("is-open");
    img.removeAttribute("src");
    document.body.style.overflow = "";
  }

  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var thumb = a.querySelector("img");
      open(a.getAttribute("href"), thumb ? thumb.alt : "");
    });
  });
  closeBtn.addEventListener("click", close);
  lb.addEventListener("click", function (e) {
    if (e.target === lb) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb.classList.contains("is-open")) close();
  });
})();
