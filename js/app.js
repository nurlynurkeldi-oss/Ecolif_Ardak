/* EcoLif_Ardak — логика сайта */
(function () {
  "use strict";

  var WA_NUMBER = "77071938373"; // 8 707 193 83 73

  var PRODUCTS = [
    {
      id: "rose-perfume",
      img: "products/p01.jpg",
      emoji: "🌹",
      cat: "fragrance",
      name: "YERSAYTD — Роза парфюмериясы, 50 мл",
      name_ru: "YERSAYTD — Розовая парфюмерная вода, 50 мл",
      desc: {
        kk: "Нежні роза иісі — сулулықтыңың классикасы. Иісі узақ сақталадады, күні боқы серқік сезім береді. 50 мл.",
        ru: "Нежный розовый аромат — классика красоты. Долго держится, дарит ощущение свежести весь день. 50 мл."
      }
    },
    {
      id: "baicao-tea",
      img: "products/p02.jpg",
      emoji: "🍵",
      cat: "health",
      name: "YERSAYTD — Баоцао талшықты шай",
      name_ru: "YERSAYTD — Травяной чай «Баоцао»",
      desc: {
        kk: "Кіп түрлі пайдалы ёсімшідіктерден талшықты шай: ақзақже жеѓілдіқ береді, салмақты бақылауқа кёмектеседі. Күніне бір пакет.",
        ru: "Чай из сотен растенийных компонентов с пищевыми волокнами: дарит лёгкость, помогает контролировать вес. 1 пакетик в день."
      }
    },
    {
      id: "bath-powder",
      img: "products/p03.jpg",
      emoji: "🛁",
      cat: "body",
      name: "YERSAYTD — Фанфэн тогуцао ванна тозақы",
      name_ru: "YERSAYTD — Травяная ванна «Фанфэн тогуцао»",
      desc: {
        kk: "Дарілі ёсімшідіктерден ванна тозақы: жылы суққа шашырасын — буындарыққыз серқіп, жуінеқіз тыныштайды.",
        ru: "Смесь лечебных трав: снимает усталость, согревает мышцы и суставы, успокаивает нервы."
      }
    },
    {
      id: "ginger",
      img: "products/p04.jpg",
      emoji: "🧴",
      cat: "body",
      name: "YERSAYTD — Ginger емульсиясы «GOLD REJUVENATION», 500 мл",
      name_ru: "YERSAYTD — Эмульсия с имбирём «GOLD REJUVENATION», 500 мл",
      desc: {
        kk: "Имбирі (GINGER) мен тері жастауыш эмульсия: теріні терен серқітеді, ярқылы береді, жас кезіндегі сезім бередеді. 500 мл.",
        ru: "Эмульсия с имбирём для обновления кожи: питает, освежает, дарит молодое сияние. 500 мл."
      }
    },
    {
      id: "emulsion",
      img: "products/p05.jpg",
      emoji: "🧴",
      cat: "face",
      name: "YERSAYTD — Морщинеге қарсы эмульсия, 100 мл",
      name_ru: "YERSAYTD — Эмульсия против морщин, 100 мл",
      desc: {
        kk: "Теріні терен эмульсия: теріні терен илқаландырады, тартпалайды, жас кезіндегі жарқылықды кайтарады.",
        ru: "Глубоко увлажняет, подтягивает, возвращает коже молодое сияние. 100 мл."
      }
    },
    {
      id: "gold-perfume",
      img: "products/p06.jpg",
      emoji: "✨",
      cat: "fragrance",
      name: "YERSAYTD — Алтын парфюм «Синьюн Цию», 50 мл",
      name_ru: "YERSAYTD — Золотой парфюм «Синьюнцью», 50 мл",
      desc: {
        kk: "Жылтыр алтын аромат — ерекше сэттер мен күнделіқті эдеміліқ учин. Иісі турақты, узақ сақталадады.",
        ru: "Стойкий золотистый аромат — для особых случаев и повседневной элегантности. 50 мл."
      }
    },
    {
      id: "latte",
      img: "products/p07.jpg",
      emoji: "☕",
      cat: "health",
      name: "YERSAYTD — Латте кофе, 20×10 г",
      name_ru: "YERSAYTD — Латте-кофе растворимый, 20×10 г",
      desc: {
        kk: "Жумсақ сүтті дамымен латте қоспасы: қайнатпай, қасықмен араластырып ішесіз. 20 пакет, 200 г.",
        ru: "Латте с нежным молочным вкусом: просто размешайте и пейте. 20 пакетиков, 200 г."
      }
    },
    {
      id: "cleanser-honey",
      img: "products/p08.jpg",
      emoji: "🫂",
      cat: "face",
      name: "YERSAYTD — Медті бет жуқгыш",
      name_ru: "YERSAYTD — Медовый гель для умывания",
      desc: {
        kk: "Мед пен жумсақ тазалқгыш: бетті жумсақ тазалайды, қурқатпайды, тазалық пен серқік сезім береді.",
        ru: "Мягко очищает, не сушит, дарит свежесть и чистоту."
      }
    },
    {
      id: "cleansing-balm",
      img: "products/p09.jpg",
      emoji: "🧼",
      cat: "face",
      name: "YERSAYTD — Женьшеньді сиромас бальзам, 100 г",
      name_ru: "YERSAYTD — Бальзам с женьшенем и юдзу, 100 г",
      desc: {
        kk: "Женьшень мен юдзу цитрусын қосқан бальзам: макияжды жеѓіл алып, теріні терен тазалайды. Тін қизару шықармайды.",
        ru: "Легко снимает макияж, глубоко очищает поры, не ирритирует кожу. 100 г."
      }
    },
    {
      id: "collagen-mask",
      img: "products/p10.jpg",
      emoji: "💧",
      cat: "face",
      name: "YERSAYTD — Коллагенді сулы маска",
      name_ru: "YERSAYTD — Гидро-коллагеновая маска",
      desc: {
        kk: "Коллагенді «сулы» маска: тартпалайды, серқітеді, жарқылы береді — 10 минутта жас келін эффектіс.",
        ru: "Подтягивает, освежает, дарит сияние — эффект за 10 минут."
      }
    },
    {
      id: "clay-mask",
      img: "products/p11.jpg",
      emoji: "🪨",
      cat: "face",
      name: "YERSAYTD — Еқі асерлі негізқі маска",
      name_ru: "YERSAYTD — Двойная очищающая маска",
      desc: {
        kk: "Теріні терен тазалайқыш: порыны тартпалайды, тері серқійді. Аптасына 1–2 рет — уідеқ SPA.",
        ru: "Глубоко очищает, суживает поры. 1–2 раза в неделю — домашний SPA."
      }
    },
    {
      id: "rose-jam",
      img: "products/p12.jpg",
      emoji: "🌸",
      cat: "health",
      name: "YERSAYTD — Роза балды джемі, 240 г",
      name_ru: "YERSAYTD — Розовый медовый джем, 240 г",
      desc: {
        kk: "Жанқа ёнім! Жуікенізді тыныштандыратын, тэтті уіққа септіқін роза балды джемі. Кешеке бір Ҝасық — тыныштық пен тэтті уіққы.",
        ru: "Новинка! Успокаивает нервы и помогает сладко уснуть. Чайная ложка перед сном — спокойствие и сон. 240 г."
      }
    },
    {
      id: "shapewear",
      img: "products/p13.jpg",
      emoji: "👖",
      cat: "body",
      name: "YERSAYTD — Жоқары белді формалау леггинсі",
      name_ru: "YERSAYTD — Ультравысокие скульптурные леггинсы",
      desc: {
        kk: "«Отқіріп, ёсемдес!» — жоқары белді формалау леггинсі: бел мен ішті тегісейді, сәүлетін ёсемдейді. Тон, інқайлы, бүқіл күнге.",
        ru: "«Гори — и стань красивее»: высокий пояс, плоский живот, красивая линия фигуры. Тонкие, удобные, на весь день."
      }
    },
  ];

  var LANG_KEY = "ecolif-lang";
  var STORE_KEY = "ecolif_reviews_v2"; // жаңа негізгі пікірлер қосылса бұл нөмірді өсіру керек (v3...)
  var adminMode = false;
  try { adminMode = new URLSearchParams(window.location.search).get("admin") === "1"; } catch (e) {}
  var lang = "kk";
  var activeCat = "all";
  var io = null;

  function t(key) {
    return (window.I18N[lang] && window.I18N[lang][key]) || (window.I18N.kk[key]) || key;
  }

  function waLink(message) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function setLang(l) {
    if (!window.I18N[l]) l = "kk";
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    applyLang();
  }

  function applyLang() {
    var dict = window.I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict.doc_title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.doc_desc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.getElementById("langKk").classList.toggle("active", lang === "kk");
    document.getElementById("langRu").classList.toggle("active", lang === "ru");

    // WhatsApp-ссылкалар
    document.getElementById("heroWa").href = waLink(dict.wa_default);
    document.getElementById("waFab").href = waLink(dict.wa_default);
    document.getElementById("contactWa").href = waLink(dict.wa_default);

    var an = document.getElementById("adminNote");
    if (an) an.hidden = !adminMode;

    renderProducts();
    renderReviews();
  }

  function productCard(p) {
    var card = document.createElement("article");
    card.className = "product-card";

    var media = document.createElement("div");
    media.className = "p-media";

    var ph = document.createElement("div");
    ph.className = "p-placeholder";
    ph.innerHTML = '<span class="p-emoji">' + p.emoji + '</span><span class="p-brand">YERSAYTD</span>';

    var img = document.createElement("img");
    img.src = "images/" + p.img;
    img.alt = p.name;
    img.loading = "lazy";
    img.onerror = function () { img.remove(); }; // сурет жоқ — фоны көрінеді
    media.appendChild(ph);
    media.appendChild(img);

    var body = document.createElement("div");
    body.className = "p-body";

    var h3 = document.createElement("h3");
    h3.textContent = (lang === "ru" && p.name_ru) ? p.name_ru : p.name;

    var pDesc = document.createElement("p");
    pDesc.textContent = p.desc[lang];

    var price = document.createElement("div");
    price.className = "p-price";
    price.textContent = t("price_note");

    var btn = document.createElement("a");
    btn.className = "btn btn-primary btn-order";
    btn.href = waLink(dict().wa_product.replace("{name}", (lang === "ru" && p.name_ru) ? p.name_ru : p.name));
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = t("order");

    body.appendChild(h3);
    body.appendChild(pDesc);
    body.appendChild(price);
    body.appendChild(btn);

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function dict() { return window.I18N[lang]; }

  function renderProducts() {
    var grid = document.getElementById("productGrid");
    grid.innerHTML = "";
    PRODUCTS.forEach(function (p) {
      if (activeCat !== "all" && p.cat !== activeCat) return;
      grid.appendChild(productCard(p));
    });
    if (!grid.children.length) {
      grid.innerHTML = '<p class="empty">—</p>';
    }
    if (io) {
      document.querySelectorAll("#productGrid .product-card").forEach(function (el) {
        if (!el.classList.contains("observed")) {
          el.classList.add("observed");
          io.observe(el);
        }
      });
    }
  }

  function reviewCard(rv, meta) {
    meta = meta || {};
    var card = document.createElement("article");
    card.className = "review-card";

    var media = document.createElement("div");
    media.className = "r-media";

    var ph = document.createElement("div");
    ph.className = "r-ph";
    ph.innerHTML = '<span>' + (rv.name || "?").charAt(0).toUpperCase() + '</span>';
    media.appendChild(ph);

    if (rv.photo) {
      var img = document.createElement("img");
      img.src = rv.photo;
      img.alt = rv.name;
      img.loading = "lazy";
      img.onerror = function () { img.remove(); };
      media.appendChild(img);
    }

    var body = document.createElement("div");
    body.className = "r-body";

    var stars = document.createElement("div");
    stars.className = "r-stars";
    stars.textContent = "\u2605".repeat(rv.rating || 5) + "\u2606".repeat(Math.max(0, 5 - (rv.rating || 5)));

    var h3 = document.createElement("h3");
    h3.textContent = rv.name;

    var p = document.createElement("p");
    p.textContent = typeof rv.text === "object" ? (rv.text[lang] || rv.text.kk) : rv.text;

    var date = document.createElement("div");
    date.className = "r-date" + (rv.mine ? " r-date-mine" : "");
    if (rv.mine) {
      date.textContent = t("rf_my_review");
    } else {
      date.textContent = typeof rv.date === "object" ? (rv.date[lang] || rv.date.kk) : rv.date;
    }

    if (rv.mine) {
      var badge = document.createElement("div");
      badge.className = "r-badge";
      badge.textContent = t("rf_my_review");
      media.appendChild(badge);
    }

    body.appendChild(stars);
    body.appendChild(h3);
    body.appendChild(p);
    body.appendChild(date);

    // Өшіру түймесі: қонақ — тек өз пікірін, админ — кез келгенін
    if (meta.isLocal || (adminMode && !meta.isLocal)) {
      var del = document.createElement("button");
      del.type = "button";
      del.className = "r-del";
      del.innerHTML = "&#10005;";
      del.setAttribute("aria-label", t("rf_delete"));
      del.title = t("rf_delete");
      del.addEventListener("click", function () {
        if (!window.confirm(t("rf_delete_confirm"))) return;
        if (meta.isLocal) {
          try { localStorage.removeItem("ecolif_my_review"); } catch (e) {}
        } else {
          var arr = getPublishedReviews();
          arr.splice(meta.index, 1);
          try { localStorage.setItem(STORE_KEY, JSON.stringify(arr)); } catch (e) {}
        }
        renderReviews();
      });
      card.appendChild(del);
    }

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function getPublishedReviews() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) {}
    var seed = JSON.parse(JSON.stringify(window.REVIEWS || []));
    try { localStorage.setItem(STORE_KEY, JSON.stringify(seed)); } catch (e) {}
    return seed;
  }

  function getLocalReview() {
    try {
      var raw = localStorage.getItem("ecolif_my_review");
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (d) d.mine = true;
      return d || null;
    } catch (e) { return null; }
  }

  function renderReviews() {
    var grid = document.getElementById("reviewsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    var published = getPublishedReviews().slice();
    var local = getLocalReview();
    var list = [];
    if (local) list.push({ rv: local, index: -1, isLocal: true });
    published.forEach(function (rv, i) { list.push({ rv: rv, index: i, isLocal: false }); });
    list.forEach(function (item) {
      grid.appendChild(reviewCard(item.rv, { isLocal: !!item.isLocal, index: item.index }));
    });
    if (io) {
      document.querySelectorAll("#reviewsGrid .review-card").forEach(function (el) {
        if (!el.classList.contains("observed")) {
          el.classList.add("observed");
          io.observe(el);
        }
      });
    }
  }

  // ---------- Пікір формасы ----------
  var rfRating = 5;
  var rfPhotoData = null;

  function paintStars() {
    document.querySelectorAll("#rfStars .rf-star").forEach(function (s) {
      s.classList.toggle("active", parseInt(s.getAttribute("data-v"), 10) <= rfRating);
    });
  }

  function initReviewForm() {
    var form = document.getElementById("reviewForm");
    if (!form) return;

    document.querySelectorAll("#rfStars .rf-star").forEach(function (s) {
      s.addEventListener("click", function () {
        rfRating = parseInt(s.getAttribute("data-v"), 10);
        paintStars();
      });
    });

    var fileInput = document.getElementById("rfPhotoFile");
    var preview = document.getElementById("rfPreview");
    if (fileInput) {
      fileInput.addEventListener("change", function () {
        var f = fileInput.files && fileInput.files[0];
        if (!f) return;
        var reader = new FileReader();
        reader.onload = function () {
          var img = new Image();
          img.onload = function () {
            var max = 640;
            var w = img.width, h = img.height;
            var k = Math.min(1, max / Math.max(w, h));
            w = Math.round(w * k); h = Math.round(h * k);
            var cv = document.createElement("canvas");
            cv.width = w; cv.height = h;
            cv.getContext("2d").drawImage(img, 0, 0, w, h);
            rfPhotoData = cv.toDataURL("image/jpeg", 0.72);
            preview.src = rfPhotoData;
            preview.classList.add("show");
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(f);
      });
    }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = document.getElementById("rfName").value.trim();
      var text = document.getElementById("rfText").value.trim();
      if (!name || !text) return;

      var d = { name: name, rating: rfRating, text: text, photo: rfPhotoData, ts: Date.now() };
      try { localStorage.setItem("ecolif_my_review", JSON.stringify(d)); } catch (e) {}

      var dict = window.I18N[lang];
      var msg = dict.rf_wa_msg
        .replace("{name}", name)
        .replace("{stars}", "\u2605".repeat(rfRating))
        .replace("{text}", text)
        .replace("{photo}", rfPhotoData ? dict.rf_wa_photo_yes : dict.rf_wa_photo_no);
      window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");

      form.reset();
      rfPhotoData = null;
      preview.classList.remove("show");
      rfRating = 5;
      paintStars();
      renderReviews();

      var note = form.querySelector(".rf-note");
      if (note) {
        note.textContent = dict.rf_thanks || t("rf_thanks");
        note.classList.add("ok");
        setTimeout(function () {
          note.textContent = t("rf_note");
          note.classList.remove("ok");
        }, 5000);
      }
    });

    paintStars();
  }

  function init() {
    // тілді сақталған күйінен жүктеу
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && window.I18N[saved]) lang = saved;
    } catch (e) {}

    document.getElementById("langKk").addEventListener("click", function () { setLang("kk"); });
    document.getElementById("langRu").addEventListener("click", function () { setLang("ru"); });

    document.getElementById("chips").addEventListener("click", function (ev) {
      var chip = ev.target.closest(".chip");
      if (!chip) return;
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      activeCat = chip.getAttribute("data-cat");
      renderProducts();
    });

    initReviewForm();

    // жеңіл пайда болу анимациясы
    if ("IntersectionObserver" in window) {
      document.documentElement.classList.add("anim");
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll(".section-head, .contacts-card, .about-card").forEach(function (el) {
        io.observe(el);
      });
      // карточкалар renderProducts ішінде бақылауға алынады
    }

    applyLang();
  }

  /* Kaspi: копировать номер */
  function bindCopyKaspi() {
    var btn = document.getElementById("copyKaspi");
    if (!btn) return;
    var NUM = "87071938373";
    function done() {
      var d = window.I18N[lang] || window.I18N.kk;
      btn.textContent = d.pay_copied;
      setTimeout(function () { btn.textContent = d.pay_copy; }, 1800);
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = NUM;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
    btn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(NUM).then(done, fallback);
      } else {
        fallback();
      }
    });
  }
  /* Kaspi payment link: https://pay.kaspi.kz/pay/... (Kaspi app-тан алынады) */
  var KASPI_LINK = "https://pay.kaspi.kz/pay/";
  function bindKaspiLink() {
    var kln = document.getElementById("kaspiLinkBtn");
    if (!kln) return;
    if (KASPI_LINK === "https://pay.kaspi.kz/pay/") {
      kln.setAttribute("hidden", "");
      return;
    }
    kln.href = KASPI_LINK;
    kln.removeAttribute("hidden");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); bindCopyKaspi(); bindKaspiLink(); });
  } else {
    init();
    bindCopyKaspi();
    bindKaspiLink();
  }
})();
