var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/browser.ts
var browser_exports = {};
__export(browser_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(browser_exports);
var import_vscode = require("vscode");
var activate = () => {
  import_vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("alt-catppuccin")) {
      import_vscode.window.showInformationMessage(
        "VSCode Web doesn't support advanced Catppuccin Monokai options at the moment."
      );
    }
  });
};
var deactivate = () => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=browser.js.map