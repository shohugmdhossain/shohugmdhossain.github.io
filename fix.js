document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"], [class*="scroll"], [class*="arrow"], [class*="nav"]').forEach(el => {
    const txt = (el.textContent || "").trim();
    const cls = el.className || "";
    if (
      (!el.closest("nav") && !el.closest("header") && !el.closest("footer")) &&
      !cls.includes("btn") &&
      !cls.includes("icon") &&
      (txt === "" || txt === "→" || txt === "←" || txt.length <= 2)
    ) {
      el.remove();
    }
  });
});
