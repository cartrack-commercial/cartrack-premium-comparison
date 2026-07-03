/* @ds-bundle: {"format":3,"namespace":"CartrackInsuranceComplianceDesignSystem_6fdc1b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"DataField","sourcePath":"components/data-display/DataField.jsx"},{"name":"StatusPill","sourcePath":"components/data-display/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"381321c8562e","components/data-display/Card.jsx":"13b8f356b478","components/data-display/DataField.jsx":"d92f456fe66e","components/data-display/StatusPill.jsx":"038a15a89308","components/data-display/Tag.jsx":"b91ec938b8ff","components/feedback/Callout.jsx":"e882789a14d3","components/forms/Checkbox.jsx":"313269dbc705","components/forms/Input.jsx":"44a67694afb9","ui_kits/compliance-console/ChecklistScreen.jsx":"203adbda698b","ui_kits/compliance-console/DocumentScreen.jsx":"e9154c09fa6f","ui_kits/compliance-console/OverviewScreen.jsx":"13fd10962834","ui_kits/compliance-console/RegisterScreen.jsx":"0697ddb71b22","ui_kits/compliance-console/Shell.jsx":"7a78dc6a8621","ui_kits/compliance-console/app.jsx":"915628c37e31","ui_kits/compliance-console/data.js":"3f6a55ac2a2c","ui_kits/compliance-console/icons.js":"22d00fbf68a8","ui_kits/compliance-console/kit-common.jsx":"29b8eb9f9d9e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CartrackInsuranceComplianceDesignSystem_6fdc1b = window.CartrackInsuranceComplianceDesignSystem_6fdc1b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Button
 * Squared, authoritative action control. Accent (orange) is reserved
 * for the single primary action on a view.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-btn{
    --_bg:var(--ink-950);--_fg:#fff;--_bd:transparent;--_bgh:var(--ink-800);
    display:inline-flex;align-items:center;justify-content:center;gap:.5em;
    font-family:var(--font-sans);font-weight:var(--fw-semibold);
    border:var(--border-width) solid var(--_bd);border-radius:var(--radius-sm);
    background:var(--_bg);color:var(--_fg);cursor:pointer;white-space:nowrap;
    text-decoration:none;line-height:1;letter-spacing:.005em;
    transition:background var(--duration-fast) var(--ease-standard),
               border-color var(--duration-fast) var(--ease-standard),
               transform var(--duration-fast) var(--ease-standard);
  }
  .cti-btn:hover{background:var(--_bgh);}
  .cti-btn:active{transform:translateY(1px);}
  .cti-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus);}
  .cti-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none;}
  .cti-btn--accent{--_bg:var(--orange-500);--_fg:#fff;--_bgh:var(--orange-600);}
  .cti-btn--secondary{--_bg:var(--white);--_fg:var(--ink-900);--_bd:var(--ink-200);--_bgh:var(--ink-50);}
  .cti-btn--ghost{--_bg:transparent;--_fg:var(--ink-700);--_bgh:var(--ink-100);}
  .cti-btn--danger{--_bg:var(--red-600);--_fg:#fff;--_bgh:var(--red-700);}
  .cti-btn--sm{font-size:var(--text-sm);padding:0 12px;height:32px;}
  .cti-btn--md{font-size:var(--text-base);padding:0 16px;height:40px;}
  .cti-btn--lg{font-size:var(--text-md);padding:0 22px;height:48px;}
  .cti-btn--block{width:100%;}
  .cti-btn__icon{display:inline-flex;width:1.05em;height:1.05em;align-items:center;justify-content:center;}
  .cti-btn__icon svg{width:100%;height:100%;}
  `;
  const el = document.createElement("style");
  el.id = "cti-button-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
function Button({
  variant = "primary",
  size = "md",
  block = false,
  iconLeft,
  iconRight,
  as,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const variantClass = variant === "primary" ? "" : `cti-btn--${variant}`;
  const cls = ["cti-btn", `cti-btn--${size}`, variantClass, block ? "cti-btn--block" : "", className].filter(Boolean).join(" ");
  const Tag = as || "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "cti-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "cti-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Card
 * Structured surface panel. Optional header with eyebrow, title and
 * actions; optional accent rule on the left edge for emphasis.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-card{
    background:var(--color-surface);
    border:var(--border-width) solid var(--color-border);
    border-radius:var(--radius-md);box-shadow:var(--shadow-sm);
    overflow:hidden;
  }
  .cti-card--flat{box-shadow:none;}
  .cti-card--accent{border-left:var(--border-accent-width) solid var(--orange-500);}
  .cti-card__head{
    display:flex;align-items:flex-start;justify-content:space-between;gap:16px;
    padding:16px 18px;border-bottom:var(--border-width) solid var(--color-border-subtle);
  }
  .cti-card__eyebrow{
    font-family:var(--font-sans);font-size:var(--text-2xs);font-weight:var(--fw-semibold);
    letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--color-text-muted);
    margin:0 0 3px;
  }
  .cti-card__title{
    font-family:var(--font-display);font-weight:var(--fw-bold);font-size:var(--text-lg);
    letter-spacing:var(--tracking-tight);color:var(--color-text);margin:0;line-height:1.15;
  }
  .cti-card__actions{display:flex;align-items:center;gap:8px;flex:none;}
  .cti-card__body{padding:18px;}
  .cti-card__body--flush{padding:0;}
  `;
  const el = document.createElement("style");
  el.id = "cti-card-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
function Card({
  eyebrow,
  title,
  actions,
  accent = false,
  flat = false,
  flush = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["cti-card", accent ? "cti-card--accent" : "", flat ? "cti-card--flat" : "", className].filter(Boolean).join(" ");
  const hasHead = eyebrow || title || actions;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), hasHead && /*#__PURE__*/React.createElement("div", {
    className: "cti-card__head"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cti-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "cti-card__title"
  }, title)), actions && /*#__PURE__*/React.createElement("div", {
    className: "cti-card__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: "cti-card__body" + (flush ? " cti-card__body--flush" : "")
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/DataField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — DataField
 * Label / value pair for statutory metadata (FSP numbers, doc IDs, clause
 * refs, dates). Values default to the mono face with tabular figures.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-field{display:flex;flex-direction:column;gap:3px;}
  .cti-field--row{flex-direction:row;align-items:baseline;justify-content:space-between;gap:12px;}
  .cti-field__label{
    font-family:var(--font-sans);font-size:var(--text-2xs);font-weight:var(--fw-semibold);
    letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--color-text-muted);
  }
  .cti-field__value{
    font-family:var(--font-mono);font-size:var(--text-sm);font-weight:500;
    color:var(--color-text);font-variant-numeric:tabular-nums;
  }
  .cti-field__value--plain{font-family:var(--font-sans);font-weight:var(--fw-medium);font-size:var(--text-base);}
  `;
  const el = document.createElement("style");
  el.id = "cti-field-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
function DataField({
  label,
  value,
  row = false,
  plain = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["cti-field", row ? "cti-field--row" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cti-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "cti-field__value" + (plain ? " cti-field__value--plain" : "")
  }, value != null ? value : children));
}
Object.assign(__ds_scope, { DataField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/DataField.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — StatusPill
 * Compact compliance-state indicator. The vocabulary is fixed so audit
 * states read consistently across registers, memos and dashboards.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-status{
    display:inline-flex;align-items:center;gap:7px;
    font-family:var(--font-sans);font-weight:var(--fw-semibold);
    font-size:var(--text-xs);letter-spacing:.02em;
    padding:3px 10px 3px 9px;border-radius:var(--radius-pill);
    border:var(--border-width) solid transparent;white-space:nowrap;line-height:1.4;
  }
  .cti-status__dot{width:7px;height:7px;border-radius:var(--radius-pill);flex:none;}
  .cti-status--solid{color:#fff;border:none;}
  .cti-status--square{border-radius:var(--radius-sm);}
  `;
  const el = document.createElement("style");
  el.id = "cti-status-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
const MAP = {
  compliant: {
    label: "Compliant",
    fg: "var(--green-700)",
    bg: "var(--green-100)",
    dot: "var(--green-600)",
    solid: "var(--green-600)"
  },
  "review-due": {
    label: "Review Due",
    fg: "var(--amber-700)",
    bg: "var(--amber-100)",
    dot: "var(--amber-600)",
    solid: "var(--amber-600)"
  },
  "non-compliant": {
    label: "Non-Compliant",
    fg: "var(--red-700)",
    bg: "var(--red-100)",
    dot: "var(--red-600)",
    solid: "var(--red-600)"
  },
  "in-progress": {
    label: "In Progress",
    fg: "var(--blue-700)",
    bg: "var(--blue-100)",
    dot: "var(--blue-600)",
    solid: "var(--blue-600)"
  },
  draft: {
    label: "Draft",
    fg: "var(--ink-600)",
    bg: "var(--ink-100)",
    dot: "var(--ink-400)",
    solid: "var(--ink-600)"
  }
};
function StatusPill({
  status = "draft",
  label,
  solid = false,
  square = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  const cfg = MAP[status] || MAP.draft;
  const cls = ["cti-status", solid ? "cti-status--solid" : "", square ? "cti-status--square" : "", className].filter(Boolean).join(" ");
  const style = solid ? {
    background: cfg.solid
  } : {
    background: cfg.bg,
    color: cfg.fg
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), !solid && /*#__PURE__*/React.createElement("span", {
    className: "cti-status__dot",
    style: {
      background: cfg.dot
    }
  }), label || cfg.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Tag
 * Neutral category / clause-reference chip. Optional leading dot and a
 * dismiss affordance for filter contexts.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-tag{
    display:inline-flex;align-items:center;gap:6px;
    font-family:var(--font-sans);font-size:var(--text-xs);font-weight:var(--fw-medium);
    color:var(--ink-700);background:var(--ink-100);
    border:var(--border-width) solid var(--color-border-subtle);
    padding:3px 9px;border-radius:var(--radius-sm);line-height:1.4;white-space:nowrap;
  }
  .cti-tag--mono{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:.01em;}
  .cti-tag--accent{background:var(--orange-50);border-color:var(--orange-200);color:var(--orange-800);}
  .cti-tag__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:var(--ink-400);flex:none;}
  .cti-tag__x{
    cursor:pointer;border:0;background:none;padding:0;margin-left:1px;color:var(--ink-400);
    font-size:13px;line-height:1;display:inline-flex;
  }
  .cti-tag__x:hover{color:var(--ink-700);}
  `;
  const el = document.createElement("style");
  el.id = "cti-tag-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
function Tag({
  mono = false,
  accent = false,
  dot = false,
  onDismiss,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["cti-tag", mono ? "cti-tag--mono" : "", accent ? "cti-tag--accent" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cti-tag__dot"
  }), children, onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cti-tag__x",
    onClick: onDismiss,
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Callout
 * Authoritative notice block with a left rule. Tones map to compliance
 * intent: note, action (orange), caution, breach.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-callout{
    --_ac:var(--ink-500);--_bg:var(--ink-50);--_fg:var(--ink-800);
    display:flex;gap:12px;padding:13px 16px;
    background:var(--_bg);border:var(--border-width) solid var(--color-border-subtle);
    border-left:var(--border-accent-width) solid var(--_ac);border-radius:var(--radius-sm);
  }
  .cti-callout--action{--_ac:var(--orange-500);--_bg:var(--orange-50);--_fg:var(--orange-900);}
  .cti-callout--caution{--_ac:var(--amber-600);--_bg:var(--amber-100);--_fg:var(--amber-700);}
  .cti-callout--breach{--_ac:var(--red-600);--_bg:var(--red-100);--_fg:var(--red-700);}
  .cti-callout__body{flex:1;min-width:0;}
  .cti-callout__title{
    font-family:var(--font-sans);font-weight:var(--fw-bold);font-size:var(--text-sm);
    letter-spacing:.01em;color:var(--_fg);margin:0 0 2px;
  }
  .cti-callout__text{
    font-family:var(--font-sans);font-size:var(--text-sm);line-height:1.5;
    color:var(--ink-700);margin:0;
  }
  .cti-callout__icon{
    font-family:var(--font-mono);font-weight:600;font-size:13px;line-height:1.5;
    color:var(--_ac);flex:none;
  }
  `;
  const el = document.createElement("style");
  el.id = "cti-callout-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
const MARK = {
  note: "i",
  action: "›",
  caution: "!",
  breach: "✕"
};
function Callout({
  tone = "note",
  title,
  icon,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["cti-callout", tone !== "note" ? `cti-callout--${tone}` : "", className].filter(Boolean).join(" ");
  const mark = icon != null ? icon : MARK[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "note"
  }, rest), mark != null && /*#__PURE__*/React.createElement("span", {
    className: "cti-callout__icon"
  }, mark), /*#__PURE__*/React.createElement("div", {
    className: "cti-callout__body"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "cti-callout__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "cti-callout__text"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Checkbox
 * Squared checkbox for handover checklists and attestation items.
 * Supports a label and optional secondary description.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-check{display:flex;gap:10px;align-items:flex-start;cursor:pointer;font-family:var(--font-sans);}
  .cti-check input{position:absolute;opacity:0;width:0;height:0;}
  .cti-check__box{
    width:18px;height:18px;flex:none;margin-top:1px;
    border:var(--border-width-strong) solid var(--color-border-strong);
    border-radius:var(--radius-xs);background:var(--white);
    display:flex;align-items:center;justify-content:center;
    transition:background var(--duration-fast) var(--ease-standard),
               border-color var(--duration-fast) var(--ease-standard);
  }
  .cti-check__box svg{width:12px;height:12px;opacity:0;transform:scale(.6);transition:opacity var(--duration-fast),transform var(--duration-fast) var(--ease-out);}
  .cti-check:hover .cti-check__box{border-color:var(--orange-500);}
  .cti-check input:checked + .cti-check__box{background:var(--orange-500);border-color:var(--orange-500);}
  .cti-check input:checked + .cti-check__box svg{opacity:1;transform:scale(1);}
  .cti-check input:focus-visible + .cti-check__box{box-shadow:var(--shadow-focus);}
  .cti-check input:disabled ~ *{opacity:.5;}
  .cti-check__text{display:flex;flex-direction:column;gap:1px;}
  .cti-check__label{font-size:var(--text-base);font-weight:var(--fw-medium);color:var(--color-text);line-height:1.35;}
  .cti-check__desc{font-size:var(--text-xs);color:var(--color-text-muted);line-height:1.4;}
  `;
  const el = document.createElement("style");
  el.id = "cti-check-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  className = "",
  id,
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["cti-check", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cti-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 6.2L4.4 9 10.5 2.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "cti-check__text"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cti-check__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "cti-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cartrack Insurance — Input
 * Labelled text field for forms and document metadata capture. Optional
 * hint / error text and a mono variant for reference numbers.
 */

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .cti-input{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);}
  .cti-input__label{
    font-size:var(--text-sm);font-weight:var(--fw-semibold);color:var(--ink-800);
    display:flex;align-items:center;gap:5px;
  }
  .cti-input__req{color:var(--orange-600);font-weight:700;}
  .cti-input__field{
    font-family:var(--font-sans);font-size:var(--text-base);color:var(--color-text);
    background:var(--white);border:var(--border-width) solid var(--color-border-strong);
    border-radius:var(--radius-sm);padding:0 12px;height:40px;width:100%;
    transition:border-color var(--duration-fast) var(--ease-standard),
               box-shadow var(--duration-fast) var(--ease-standard);
  }
  .cti-input__field::placeholder{color:var(--ink-300);}
  .cti-input__field:hover{border-color:var(--ink-400);}
  .cti-input__field:focus{outline:none;border-color:var(--orange-500);box-shadow:var(--shadow-focus);}
  .cti-input__field--mono{font-family:var(--font-mono);font-size:var(--text-sm);letter-spacing:.01em;}
  .cti-input__field[aria-invalid="true"]{border-color:var(--red-600);}
  .cti-input__field[aria-invalid="true"]:focus{box-shadow:0 0 0 3px rgba(190,58,48,.25);}
  .cti-input__field:disabled{background:var(--ink-50);color:var(--ink-400);cursor:not-allowed;}
  textarea.cti-input__field{height:auto;padding:10px 12px;line-height:1.5;resize:vertical;}
  .cti-input__hint{font-size:var(--text-xs);color:var(--color-text-muted);}
  .cti-input__hint--error{color:var(--red-600);font-weight:var(--fw-medium);}
  `;
  const el = document.createElement("style");
  el.id = "cti-input-styles";
  el.textContent = css;
  document.head.appendChild(el);
}
let uid = 0;
function Input({
  label,
  hint,
  error,
  required = false,
  mono = false,
  multiline = false,
  id,
  className = "",
  ...rest
}) {
  ensureStyles();
  const fieldId = id || `cti-input-${++uid}`;
  const Field = multiline ? "textarea" : "input";
  const fieldCls = ["cti-input__field", mono ? "cti-input__field--mono" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["cti-input", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cti-input__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cti-input__req",
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    className: fieldCls,
    "aria-invalid": error ? "true" : undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "cti-input__hint" + (error ? " cti-input__hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/ChecklistScreen.jsx
try { (() => {
/* Handover checklist screen — grouped attestations with live progress. */
const {
  useState: useStateChk
} = React;
function ChecklistScreen() {
  const {
    Card,
    Button,
    Callout
  } = window.CartrackInsuranceComplianceDesignSystem_6fdc1b;
  const D = window.CTI_DATA;
  const [state, setState] = useStateChk(() => D.checklist.map(g => g.items.map(it => it.done)));
  const total = state.flat().length;
  const done = state.flat().filter(Boolean).length;
  const pct = Math.round(done / total * 100);
  const toggle = (gi, ii) => setState(s => s.map((g, x) => x === gi ? g.map((v, y) => y === ii ? !v : v) : g));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cti-eyebrow",
    style: {
      margin: "0 0 5px"
    }
  }, "For senior management execution"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, "Audit Handover Checklist")), /*#__PURE__*/React.createElement(Card, {
    flat: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-sm)"
    }
  }, done, " of ", total, " items complete"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-xl)",
      color: pct === 100 ? "var(--color-success)" : "var(--orange-600)"
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: "var(--ink-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: pct + "%",
      background: pct === 100 ? "var(--color-success)" : "var(--orange-500)",
      transition: "width var(--duration-slow) var(--ease-out)"
    }
  }))), pct === 100 && /*#__PURE__*/React.createElement(Callout, {
    tone: "action",
    title: "Ready for handover"
  }, "All items attested. Route the pack to senior management for execution and Key Individual sign-off."), D.checklist.map((g, gi) => /*#__PURE__*/React.createElement(Card, {
    key: g.group,
    flush: true,
    title: g.group,
    eyebrow: state[gi].filter(Boolean).length + " / " + g.items.length + " complete"
  }, /*#__PURE__*/React.createElement("div", null, g.items.map((it, ii) => /*#__PURE__*/React.createElement("div", {
    key: ii,
    style: {
      padding: "13px 18px",
      borderTop: ii === 0 ? "none" : "1px solid var(--color-border-subtle)",
      background: state[gi][ii] ? "var(--color-success-soft)" : "transparent",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: it.label,
    description: it.desc,
    checked: state[gi][ii],
    onChange: () => toggle(gi, ii)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Export checklist (PDF)"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    disabled: pct !== 100
  }, "Route to senior management")));
}
window.ChecklistScreen = ChecklistScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/ChecklistScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/DocumentScreen.jsx
try { (() => {
/* Document / memo detail — gap analysis, adapted clauses, KI sign-off. */
const {
  useState: useStateDoc
} = React;
function DocumentScreen({
  docId,
  onBack
}) {
  const {
    Card,
    StatusPill,
    Tag,
    Callout,
    Button,
    DataField,
    Checkbox
  } = window.CartrackInsuranceComplianceDesignSystem_6fdc1b;
  const D = window.CTI_DATA;
  const d = D.documents.find(x => x.id === docId) || D.documents[0];
  const [signed, setSigned] = useStateDoc(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: 0,
      background: "none",
      cursor: "pointer",
      color: "var(--ink-500)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      padding: 0,
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "rotate(180deg)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })), "Back to register"), /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, d.clause), /*#__PURE__*/React.createElement(Tag, null, d.type), /*#__PURE__*/React.createElement(StatusPill, {
    status: d.status
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      letterSpacing: "-0.01em",
      margin: "0 0 6px"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-muted)",
      fontSize: "var(--text-sm)",
      margin: 0,
      maxWidth: 560
    }
  }, d.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "pen-line",
      size: 15
    })
  }, "Edit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(DataField, {
    label: "Document ID",
    value: d.id
  }), /*#__PURE__*/React.createElement(DataField, {
    label: "Version",
    value: d.version
  }), /*#__PURE__*/React.createElement(DataField, {
    label: "Owner",
    value: d.owner,
    plain: true
  }), /*#__PURE__*/React.createElement(DataField, {
    label: "Last reviewed",
    value: d.reviewed
  }), /*#__PURE__*/React.createElement(DataField, {
    label: "FSP",
    value: "17266"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Step 1"
  }, "Gap Analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "breach",
    title: "Scope misalignment \u2014 \xA74 Identification of interests"
  }, "Current text references consumer tracking-unit sales channels. These fall outside FSP 17266's commercial advisory mandate and must be excluded."), /*#__PURE__*/React.createElement(Callout, {
    tone: "action",
    title: "Adaptation required \u2014 high-value commercial risk"
  }, "Insert a residual-risk matrix tailored to commercial advisory operations, mapped to FAIS GCoC \xA73."), /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "No change \u2014 \xA71\u20132 Definitions"
  }, "Definitions and application clauses remain consistent with statutory requirements."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Step 2"
  }, "Document Adaptation"), /*#__PURE__*/React.createElement(Card, {
    flat: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [{
    ref: "§4.1",
    title: "Identification of interests",
    body: "All conflicts arising in the course of commercial advisory engagements must be recorded in the COI register within five (5) business days and disclosed to the affected commercial client in writing."
  }, {
    ref: "§4.3",
    title: "Mitigation & avoidance",
    body: "Where a conflict cannot be avoided, the Key Individual must approve the mitigation measure prior to the rendering of any financial service to the commercial client."
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.ref,
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cti-mono",
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--orange-700)",
      fontWeight: 600,
      flex: "none",
      width: 42,
      paddingTop: 2
    }
  }, c.ref), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      marginBottom: 3
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.55,
      color: "var(--ink-700)"
    }
  }, c.body))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-950)",
      borderRadius: "var(--radius-md)",
      padding: "22px 24px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cti-eyebrow",
    style: {
      color: "var(--orange-500)",
      margin: "0 0 6px"
    }
  }, "Step 3 \xB7 Key Individual sign-off"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)",
      color: "#fff",
      margin: "0 0 8px"
    }
  }, "Approve for submission"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-300)",
      margin: 0,
      lineHeight: 1.5
    }
  }, "By signing, the Key Individual (Brendan) confirms this document reflects the commercial advisory mandate of FSP 17266 and is fit for statutory submission.")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 240,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: signed ? "var(--font-display)" : "var(--font-mono)",
      fontSize: signed ? 22 : 13,
      color: signed ? "#fff" : "var(--ink-500)",
      fontWeight: signed ? 700 : 400,
      fontStyle: signed ? "italic" : "normal",
      minHeight: 26
    }
  }, signed ? "B. —" : "Signature")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Brendan \xB7 Key Individual"), /*#__PURE__*/React.createElement("span", null, signed ? "2026-06-26" : "—")), /*#__PURE__*/React.createElement(Button, {
    variant: signed ? "secondary" : "accent",
    size: "md",
    block: true,
    onClick: () => setSigned(s => !s),
    iconLeft: signed ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    }) : null
  }, signed ? "Signed — undo" : "Approve & sign")))));
}
window.DocumentScreen = DocumentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/DocumentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/OverviewScreen.jsx
try { (() => {
/* Overview / compliance dashboard screen. */
function OverviewScreen({
  onOpenDoc,
  onNav
}) {
  const {
    Card,
    StatusPill,
    Callout,
    Button
  } = window.CartrackInsuranceComplianceDesignSystem_6fdc1b;
  const D = window.CTI_DATA;
  const reviewDue = D.documents.filter(d => d.status === "review-due");
  const breaches = D.documents.filter(d => d.status === "non-compliant");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cti-eyebrow",
    style: {
      margin: "0 0 5px"
    }
  }, "FSP 17266 \xB7 Commercial Advisory"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, "Compliance Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-muted)",
      fontSize: "var(--text-sm)",
      margin: "6px 0 0"
    }
  }, "Statutory posture for ", D.entity, " as at ", /*#__PURE__*/React.createElement("span", {
    className: "cti-mono"
  }, "2026-06-26"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Statutory docs compliant",
    value: "11",
    unit: "/ 16",
    tone: "ink",
    icon: "shield-check",
    trend: "69% of the commercial set"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Reviews due",
    value: "3",
    tone: "warning",
    icon: "clock",
    trend: "Within 30-day window"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open breaches",
    value: "1",
    tone: "danger",
    icon: "triangle-alert",
    trend: "Reportable \u2014 COI-2024-02"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Sign-offs pending KI",
    value: "4",
    tone: "accent",
    icon: "pen-line",
    trend: "Awaiting Brendan"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Requires senior management action",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      }),
      onClick: () => onNav("checklist")
    }, "Open checklist")
  }, "Priority Actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "breach",
    title: "Reportable breach \u2014 COI-2024-02"
  }, "Conflict of Interest Policy predates the current commercial advisory mandate. Adapt \xA74 and route to the Key Individual for signature."), /*#__PURE__*/React.createElement(Callout, {
    tone: "action",
    title: "Sign-off outstanding \u2014 RMP-2026-014 v2.3"
  }, "FAIS Risk Management Plan re-scored and ready for Key Individual approval."), /*#__PURE__*/React.createElement(Callout, {
    tone: "caution",
    title: "Review window closing \u2014 TCF-2026-005"
  }, "TCF Outcomes Framework still in draft; finalise within 14 days."))), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "Statutory Documents",
    eyebrow: "Commercial advisory set",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => onNav("register"),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 15
      })
    }, "View register")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, D.documents.slice(0, 5).map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: d.id,
    onClick: () => onOpenDoc(d.id),
    style: {
      cursor: "pointer",
      borderTop: i === 0 ? "none" : "1px solid var(--color-border-subtle)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--ink-25)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 18px",
      width: 130
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cti-mono",
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-muted)"
    }
  }, d.id)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 8px",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, d.title), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 18px",
      textAlign: "right",
      width: 150
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: d.status
  }))))))));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/RegisterScreen.jsx
try { (() => {
/* Statutory document register screen — searchable/filterable table. */
const {
  useState: useStateReg
} = React;
function RegisterScreen({
  onOpenDoc
}) {
  const {
    Card,
    StatusPill,
    Tag,
    Button
  } = window.CartrackInsuranceComplianceDesignSystem_6fdc1b;
  const D = window.CTI_DATA;
  const [filter, setFilter] = useStateReg("all");
  const FILTERS = [{
    key: "all",
    label: "All"
  }, {
    key: "review-due",
    label: "Review due"
  }, {
    key: "non-compliant",
    label: "Non-compliant"
  }, {
    key: "in-progress",
    label: "In progress"
  }, {
    key: "compliant",
    label: "Compliant"
  }];
  const rows = filter === "all" ? D.documents : D.documents.filter(d => d.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cti-eyebrow",
    style: {
      margin: "0 0 5px"
    }
  }, "FSP 17266 \xB7 ", rows.length, " documents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, "Document Register")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-400)",
      display: "inline-flex",
      marginRight: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 15
  })), FILTERS.map(f => {
    const on = filter === f.key;
    return /*#__PURE__*/React.createElement("button", {
      key: f.key,
      onClick: () => setFilter(f.key),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: 600,
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        border: "1px solid " + (on ? "var(--ink-950)" : "var(--color-border)"),
        background: on ? "var(--ink-950)" : "var(--color-surface)",
        color: on ? "#fff" : "var(--ink-600)"
      }
    }, f.label);
  })), /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--color-surface-sunken)"
    }
  }, ["Document ID", "Title", "Type", "Owner", "Last reviewed", "Status", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i >= 4 && i <= 5 ? "left" : "left",
      padding: "10px 14px",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--color-text-muted)",
      borderBottom: "1px solid var(--color-border)",
      whiteSpace: "nowrap"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: d.id,
    onClick: () => onOpenDoc(d.id),
    style: {
      cursor: "pointer",
      borderTop: i === 0 ? "none" : "1px solid var(--color-border-subtle)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--ink-25)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cti-mono",
    style: {
      fontSize: "var(--text-xs)"
    }
  }, d.id), d.priority && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-500)",
      marginLeft: 6
    }
  }, "\u25CF")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      minWidth: 220
    }
  }, d.title, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--color-text-subtle)",
      fontWeight: 400,
      marginTop: 1
    }
  }, d.version)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, d.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      fontSize: "var(--text-sm)",
      color: "var(--ink-600)",
      whiteSpace: "nowrap"
    }
  }, d.owner), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cti-mono",
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-600)"
    }
  }, d.reviewed)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: d.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      textAlign: "right",
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))))))));
}
window.RegisterScreen = RegisterScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/RegisterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/Shell.jsx
try { (() => {
/* Cartrack Insurance — Compliance Console: app shell (sidebar + topbar). */
const {
  useState: useStateShell
} = React;
const NAV = [{
  key: "overview",
  label: "Overview",
  icon: "layout-dashboard"
}, {
  key: "register",
  label: "Document Register",
  icon: "file-text"
}, {
  key: "monitoring",
  label: "Monitoring Reports",
  icon: "scale"
}, {
  key: "checklist",
  label: "Handover Checklist",
  icon: "list-checks"
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-width)",
      flex: "none",
      background: "var(--ink-950)",
      color: "var(--ink-200)",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 18px",
      display: "flex",
      alignItems: "center",
      gap: 11,
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + "/logos/cartrack-insurance-mark.png",
    alt: "",
    style: {
      height: 34,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "#fff",
      fontSize: 15,
      letterSpacing: "0.01em"
    }
  }, "CARTRACK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--orange-500)",
      fontSize: 11,
      letterSpacing: "0.14em"
    }
  }, "INSURANCE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, "Commercial Compliance")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "0 12px",
      flex: 1
    }
  }, NAV.map(n => {
    const on = active === n.key;
    return /*#__PURE__*/React.createElement("button", {
      key: n.key,
      onClick: () => onNav(n.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 12px",
        border: 0,
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: on ? 600 : 500,
        background: on ? "rgba(244,119,53,0.14)" : "transparent",
        color: on ? "#fff" : "var(--ink-300)",
        boxShadow: on ? "inset 2px 0 0 var(--orange-500)" : "none",
        transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? "var(--orange-500)" : "var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 17
    })), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-500)"
    }
  }, "FSP"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-200)"
    }
  }, "17266")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "B",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "#fff",
      fontWeight: 600
    }
  }, "Brendan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--ink-500)"
    }
  }, "Key Individual")))));
}
function Topbar({
  title,
  onNewMemo
}) {
  const {
    Button
  } = window.CartrackInsuranceComplianceDesignSystem_6fdc1b;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-height)",
      flex: "none",
      borderBottom: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)",
      letterSpacing: "-0.01em",
      margin: 0,
      flex: "none",
      color: "var(--color-text)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 360,
      marginLeft: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search documents, clauses, FSP refs\u2026",
    style: {
      width: "100%",
      height: 36,
      padding: "0 12px 0 34px",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      background: "var(--ink-25)",
      color: "var(--color-text)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }),
    onClick: onNewMemo
  }, "New memo"), /*#__PURE__*/React.createElement("button", {
    title: "Notifications",
    style: {
      position: "relative",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      borderRadius: "var(--radius-sm)",
      width: 36,
      height: 36,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "var(--ink-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 7,
      right: 8,
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--orange-500)",
      border: "1.5px solid #fff"
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    initials: "B",
    size: 32
  })));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/app.jsx
try { (() => {
/* Cartrack Insurance — Compliance Console: app wiring & routing. */
const {
  useState: useStateApp
} = React;
function App() {
  const [route, setRoute] = useStateApp({
    screen: "overview",
    docId: null
  });
  const openDoc = docId => setRoute({
    screen: "document",
    docId
  });
  const nav = screen => setRoute({
    screen,
    docId: null
  });
  const titles = {
    overview: "Overview",
    register: "Document Register",
    monitoring: "Monitoring Reports",
    checklist: "Handover Checklist",
    document: "Document Review"
  };
  let body;
  if (route.screen === "overview") body = /*#__PURE__*/React.createElement(OverviewScreen, {
    onOpenDoc: openDoc,
    onNav: nav
  });else if (route.screen === "register") body = /*#__PURE__*/React.createElement(RegisterScreen, {
    onOpenDoc: openDoc
  });else if (route.screen === "checklist") body = /*#__PURE__*/React.createElement(ChecklistScreen, null);else if (route.screen === "document") body = /*#__PURE__*/React.createElement(DocumentScreen, {
    docId: route.docId,
    onBack: () => nav("register")
  });else body = /*#__PURE__*/React.createElement(RegisterScreen, {
    onOpenDoc: openDoc
  }); // monitoring → register-like

  const activeNav = route.screen === "document" ? "register" : route.screen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: activeNav,
    onNav: nav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: titles[route.screen],
    onNewMemo: () => openDoc("COI-2024-02")
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "28px 32px"
    }
  }, body)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/data.js
try { (() => {
/* Cartrack Insurance — Compliance Console: sample data (illustrative only). */
window.CTI_DATA = {
  fsp: "17266",
  entity: "Cartrack Insurance Agency (Pty) Ltd",
  keyIndividual: "Brendan",
  documents: [{
    id: "RMP-2026-014",
    version: "v2.3",
    title: "FAIS Risk Management Plan",
    type: "Risk",
    clause: "FAIS GCoC §11",
    owner: "Compliance",
    reviewed: "2026-05-30",
    status: "review-due",
    priority: true,
    summary: "Residual-risk controls for high-value commercial advisory operations."
  }, {
    id: "BCP-2025-007",
    version: "v4.0",
    title: "Business Continuity Plan",
    type: "Continuity",
    clause: "BN 194 §4",
    owner: "Operations",
    reviewed: "2026-03-12",
    status: "compliant",
    priority: false,
    summary: "Recovery objectives and continuity arrangements for the commercial book."
  }, {
    id: "COI-2024-02",
    version: "v1.4",
    title: "Conflict of Interest Policy",
    type: "Policy",
    clause: "FAIS GCoC §3",
    owner: "Compliance",
    reviewed: "2024-11-08",
    status: "non-compliant",
    priority: true,
    summary: "Predates current commercial mandate — §4 requires adaptation and sign-off."
  }, {
    id: "CMR-2026-Q2",
    version: "v1.0",
    title: "Compliance Monitoring Report — Q2",
    type: "Report",
    clause: "Board Charter §6",
    owner: "Compliance",
    reviewed: "2026-06-20",
    status: "in-progress",
    priority: false,
    summary: "Quarterly monitoring findings against the commercial advisory control set."
  }, {
    id: "FPR-2026-001",
    version: "v3.1",
    title: "Fit & Proper Register",
    type: "Register",
    clause: "BN 194 §2",
    owner: "HR / Compliance",
    reviewed: "2026-04-02",
    status: "compliant",
    priority: false,
    summary: "Competence, honesty and integrity records for advisory representatives."
  }, {
    id: "TCF-2026-005",
    version: "v2.0",
    title: "TCF Outcomes Framework",
    type: "Policy",
    clause: "TCF Outcome 1–6",
    owner: "Compliance",
    reviewed: "2026-02-18",
    status: "draft",
    priority: false,
    summary: "Treating Customers Fairly outcomes mapped to commercial advisory journeys."
  }],
  checklist: [{
    group: "Statutory policies",
    items: [{
      label: "Conflict of Interest Policy adapted to commercial mandate",
      desc: "COI-2024-02 §4 rewritten; route to KI for signature.",
      done: false
    }, {
      label: "TCF Outcomes Framework finalised",
      desc: "TCF-2026-005 moved out of draft.",
      done: false
    }, {
      label: "Complaints Management Policy reviewed",
      desc: "Version-stamped, no material change.",
      done: true
    }]
  }, {
    group: "Plans & registers",
    items: [{
      label: "FAIS Risk Management Plan re-scored",
      desc: "RMP-2026-014 residual ratings re-assessed.",
      done: true
    }, {
      label: "Business Continuity Plan exercise logged",
      desc: "BCP-2025-007 annual test evidence attached.",
      done: true
    }, {
      label: "Fit & Proper Register current",
      desc: "FPR-2026-001 reconciled to representative list.",
      done: true
    }]
  }, {
    group: "Sign-off & handover",
    items: [{
      label: "Q2 Monitoring Report tabled",
      desc: "CMR-2026-Q2 findings packaged for senior management.",
      done: false
    }, {
      label: "Key Individual declarations prepared",
      desc: "Declarations drafted for Brendan's signature.",
      done: false
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/data.js", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/icons.js
try { (() => {
// Auto-generated from Lucide static icons (0.456.0). Inner SVG markup, 24x24, stroke=currentColor.
window.CTI_ICONS = {
  "arrow-right": "<path d=\"M5 12h14\"></path>\n  <path d=\"m12 5 7 7-7 7\"></path>",
  "bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"></path>\n  <path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"></path>",
  "calendar": "<path d=\"M8 2v4\"></path>\n  <path d=\"M16 2v4\"></path>\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect>\n  <path d=\"M3 10h18\"></path>",
  "check": "<path d=\"M20 6 9 17l-5-5\"></path>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n  <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line>\n  <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"></line>",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\"></path>\n  <path d=\"m9 11 3 3L22 4\"></path>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n  <polyline points=\"12 6 12 12 16 14\"></polyline>",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>\n  <polyline points=\"7 10 12 15 17 10\"></polyline>\n  <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"></line>",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle>\n  <circle cx=\"19\" cy=\"12\" r=\"1\"></circle>\n  <circle cx=\"5\" cy=\"12\" r=\"1\"></circle>",
  "file-check-2": "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"></path>\n  <path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path>\n  <path d=\"m3 15 2 2 4-4\"></path>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"></path>\n  <path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path>\n  <path d=\"M10 9H8\"></path>\n  <path d=\"M16 13H8\"></path>\n  <path d=\"M16 17H8\"></path>",
  "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>",
  "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect>\n  <rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect>\n  <rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect>\n  <rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
  "list-checks": "<path d=\"m3 17 2 2 4-4\"></path>\n  <path d=\"m3 7 2 2 4-4\"></path>\n  <path d=\"M13 6h8\"></path>\n  <path d=\"M13 12h8\"></path>\n  <path d=\"M13 18h8\"></path>",
  "pen-line": "<path d=\"M12 20h9\"></path>\n  <path d=\"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z\"></path>",
  "plus": "<path d=\"M5 12h14\"></path>\n  <path d=\"M12 5v14\"></path>",
  "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path>\n  <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path>\n  <path d=\"M7 21h10\"></path>\n  <path d=\"M12 3v18\"></path>\n  <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\"></path>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n  <path d=\"m21 21-4.3-4.3\"></path>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path>\n  <path d=\"m9 12 2 2 4-4\"></path>",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path>\n  <path d=\"M12 9v4\"></path>\n  <path d=\"M12 17h.01\"></path>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path>\n  <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
  "x": "<path d=\"M18 6 6 18\"></path>\n  <path d=\"m6 6 12 12\"></path>"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/compliance-console/kit-common.jsx
try { (() => {
/* Cartrack Insurance — Compliance Console: shared kit helpers.
   Exports to window so the screen files can share them. */
const {
  useState
} = React;
const ASSETS = "../../assets";

/* ---- Icon: inlines Lucide markup from window.CTI_ICONS ---- */
function Icon({
  name,
  size = 18,
  stroke = 1.75,
  style,
  className
}) {
  const inner = window.CTI_ICONS && window.CTI_ICONS[name] || "";
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      display: "block",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}

/* ---- KPI / stat tile ---- */
function StatCard({
  label,
  value,
  unit,
  trend,
  tone = "ink",
  icon
}) {
  const toneColor = {
    ink: "var(--ink-950)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",
    accent: "var(--orange-600)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      padding: "16px 18px",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cti-eyebrow",
    style: {
      fontSize: "var(--text-2xs)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-3xl)",
      letterSpacing: "-0.01em",
      lineHeight: 1,
      color: toneColor
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--color-text-muted)"
    }
  }, unit)), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-muted)"
    }
  }, trend));
}

/* ---- Section heading ---- */
function SectionTitle({
  eyebrow,
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cti-eyebrow",
    style: {
      margin: "0 0 4px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-xl)",
      letterSpacing: "-0.01em",
      margin: 0,
      color: "var(--color-text)"
    }
  }, children)), action);
}

/* ---- Small monogram avatar ---- */
function Avatar({
  initials = "B",
  size = 32
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: "var(--ink-950)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.42,
      letterSpacing: "0.02em"
    }
  }, initials);
}
Object.assign(window, {
  Icon,
  StatCard,
  SectionTitle,
  Avatar,
  ASSETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-console/kit-common.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataField = __ds_scope.DataField;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
