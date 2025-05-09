var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(main_exports);
var import_vscode2 = require("vscode");

// src/helpers.ts
var import_path = require("path");
var getThemePaths = () => {
  const themes = ["latte", "frappe", "macchiato", "mocha"];
  const paths = {
    latte: "",
    frappe: "",
    macchiato: "",
    mocha: ""
  };
  themes.map(
    (theme) => paths[theme] = (0, import_path.join)(__dirname, "..", "themes", `${theme}.json`)
  );
  return paths;
};

// node_modules/@catppuccin/palette/dist/index.mjs
var latte = {
  rosewater: {
    hex: "#dc8a78",
    rgb: "rgb(220, 138, 120)",
    hsl: "hsl(11, 59%, 67%)",
    raw: "220, 138, 120"
  },
  flamingo: {
    hex: "#dd7878",
    rgb: "rgb(221, 120, 120)",
    hsl: "hsl(0, 60%, 67%)",
    raw: "221, 120, 120"
  },
  pink: {
    hex: "#ea76cb",
    rgb: "rgb(234, 118, 203)",
    hsl: "hsl(316, 73%, 69%)",
    raw: "234, 118, 203"
  },
  mauve: {
    hex: "#8839ef",
    rgb: "rgb(136, 57, 239)",
    hsl: "hsl(266, 85%, 58%)",
    raw: "136, 57, 239"
  },
  red: {
    hex: "#d20f39",
    rgb: "rgb(210, 15, 57)",
    hsl: "hsl(347, 87%, 44%)",
    raw: "210, 15, 57"
  },
  maroon: {
    hex: "#e64553",
    rgb: "rgb(230, 69, 83)",
    hsl: "hsl(355, 76%, 59%)",
    raw: "230, 69, 83"
  },
  peach: {
    hex: "#fe640b",
    rgb: "rgb(254, 100, 11)",
    hsl: "hsl(22, 99%, 52%)",
    raw: "254, 100, 11"
  },
  yellow: {
    hex: "#df8e1d",
    rgb: "rgb(223, 142, 29)",
    hsl: "hsl(35, 77%, 49%)",
    raw: "223, 142, 29"
  },
  green: {
    hex: "#40a02b",
    rgb: "rgb(64, 160, 43)",
    hsl: "hsl(109, 58%, 40%)",
    raw: "64, 160, 43"
  },
  teal: {
    hex: "#179299",
    rgb: "rgb(23, 146, 153)",
    hsl: "hsl(183, 74%, 35%)",
    raw: "23, 146, 153"
  },
  sky: {
    hex: "#04a5e5",
    rgb: "rgb(4, 165, 229)",
    hsl: "hsl(197, 97%, 46%)",
    raw: "4, 165, 229"
  },
  sapphire: {
    hex: "#209fb5",
    rgb: "rgb(32, 159, 181)",
    hsl: "hsl(189, 70%, 42%)",
    raw: "32, 159, 181"
  },
  blue: {
    hex: "#1e66f5",
    rgb: "rgb(30, 102, 245)",
    hsl: "hsl(220, 91%, 54%)",
    raw: "30, 102, 245"
  },
  lavender: {
    hex: "#7287fd",
    rgb: "rgb(114, 135, 253)",
    hsl: "hsl(231, 97%, 72%)",
    raw: "114, 135, 253"
  },
  text: {
    hex: "#4c4f69",
    rgb: "rgb(76, 79, 105)",
    hsl: "hsl(234, 16%, 35%)",
    raw: "76, 79, 105"
  },
  subtext1: {
    hex: "#5c5f77",
    rgb: "rgb(92, 95, 119)",
    hsl: "hsl(233, 13%, 41%)",
    raw: "92, 95, 119"
  },
  subtext0: {
    hex: "#6c6f85",
    rgb: "rgb(108, 111, 133)",
    hsl: "hsl(233, 10%, 47%)",
    raw: "108, 111, 133"
  },
  overlay2: {
    hex: "#7c7f93",
    rgb: "rgb(124, 127, 147)",
    hsl: "hsl(232, 10%, 53%)",
    raw: "124, 127, 147"
  },
  overlay1: {
    hex: "#8c8fa1",
    rgb: "rgb(140, 143, 161)",
    hsl: "hsl(231, 10%, 59%)",
    raw: "140, 143, 161"
  },
  overlay0: {
    hex: "#9ca0b0",
    rgb: "rgb(156, 160, 176)",
    hsl: "hsl(228, 11%, 65%)",
    raw: "156, 160, 176"
  },
  surface2: {
    hex: "#acb0be",
    rgb: "rgb(172, 176, 190)",
    hsl: "hsl(227, 12%, 71%)",
    raw: "172, 176, 190"
  },
  surface1: {
    hex: "#bcc0cc",
    rgb: "rgb(188, 192, 204)",
    hsl: "hsl(225, 14%, 77%)",
    raw: "188, 192, 204"
  },
  surface0: {
    hex: "#ccd0da",
    rgb: "rgb(204, 208, 218)",
    hsl: "hsl(223, 16%, 83%)",
    raw: "204, 208, 218"
  },
  base: {
    hex: "#eff1f5",
    rgb: "rgb(239, 241, 245)",
    hsl: "hsl(220, 23%, 95%)",
    raw: "239, 241, 245"
  },
  mantle: {
    hex: "#e6e9ef",
    rgb: "rgb(230, 233, 239)",
    hsl: "hsl(220, 22%, 92%)",
    raw: "230, 233, 239"
  },
  crust: {
    hex: "#dce0e8",
    rgb: "rgb(220, 224, 232)",
    hsl: "hsl(220, 21%, 89%)",
    raw: "220, 224, 232"
  }
};
var frappe = {
  rosewater: {
    hex: "#f2d5cf",
    rgb: "rgb(242, 213, 207)",
    hsl: "hsl(10, 57%, 88%)",
    raw: "242, 213, 207"
  },
  flamingo: {
    hex: "#eebebe",
    rgb: "rgb(238, 190, 190)",
    hsl: "hsl(0, 59%, 84%)",
    raw: "238, 190, 190"
  },
  pink: {
    hex: "#f4b8e4",
    rgb: "rgb(244, 184, 228)",
    hsl: "hsl(316, 73%, 84%)",
    raw: "244, 184, 228"
  },
  mauve: {
    hex: "#ca9ee6",
    rgb: "rgb(202, 158, 230)",
    hsl: "hsl(277, 59%, 76%)",
    raw: "202, 158, 230"
  },
  red: {
    hex: "#e78284",
    rgb: "rgb(231, 130, 132)",
    hsl: "hsl(359, 68%, 71%)",
    raw: "231, 130, 132"
  },
  maroon: {
    hex: "#ea999c",
    rgb: "rgb(234, 153, 156)",
    hsl: "hsl(358, 66%, 76%)",
    raw: "234, 153, 156"
  },
  peach: {
    hex: "#ef9f76",
    rgb: "rgb(239, 159, 118)",
    hsl: "hsl(20, 79%, 70%)",
    raw: "239, 159, 118"
  },
  yellow: {
    hex: "#e5c890",
    rgb: "rgb(229, 200, 144)",
    hsl: "hsl(40, 62%, 73%)",
    raw: "229, 200, 144"
  },
  green: {
    hex: "#a6d189",
    rgb: "rgb(166, 209, 137)",
    hsl: "hsl(96, 44%, 68%)",
    raw: "166, 209, 137"
  },
  teal: {
    hex: "#81c8be",
    rgb: "rgb(129, 200, 190)",
    hsl: "hsl(172, 39%, 65%)",
    raw: "129, 200, 190"
  },
  sky: {
    hex: "#99d1db",
    rgb: "rgb(153, 209, 219)",
    hsl: "hsl(189, 48%, 73%)",
    raw: "153, 209, 219"
  },
  sapphire: {
    hex: "#85c1dc",
    rgb: "rgb(133, 193, 220)",
    hsl: "hsl(199, 55%, 69%)",
    raw: "133, 193, 220"
  },
  blue: {
    hex: "#8caaee",
    rgb: "rgb(140, 170, 238)",
    hsl: "hsl(222, 74%, 74%)",
    raw: "140, 170, 238"
  },
  lavender: {
    hex: "#babbf1",
    rgb: "rgb(186, 187, 241)",
    hsl: "hsl(239, 66%, 84%)",
    raw: "186, 187, 241"
  },
  text: {
    hex: "#c6d0f5",
    rgb: "rgb(198, 208, 245)",
    hsl: "hsl(227, 70%, 87%)",
    raw: "198, 208, 245"
  },
  subtext1: {
    hex: "#b5bfe2",
    rgb: "rgb(181, 191, 226)",
    hsl: "hsl(227, 44%, 80%)",
    raw: "181, 191, 226"
  },
  subtext0: {
    hex: "#a5adce",
    rgb: "rgb(165, 173, 206)",
    hsl: "hsl(228, 29%, 73%)",
    raw: "165, 173, 206"
  },
  overlay2: {
    hex: "#949cbb",
    rgb: "rgb(148, 156, 187)",
    hsl: "hsl(228, 22%, 66%)",
    raw: "148, 156, 187"
  },
  overlay1: {
    hex: "#838ba7",
    rgb: "rgb(131, 139, 167)",
    hsl: "hsl(227, 17%, 58%)",
    raw: "131, 139, 167"
  },
  overlay0: {
    hex: "#737994",
    rgb: "rgb(115, 121, 148)",
    hsl: "hsl(229, 13%, 52%)",
    raw: "115, 121, 148"
  },
  surface2: {
    hex: "#626880",
    rgb: "rgb(98, 104, 128)",
    hsl: "hsl(228, 13%, 44%)",
    raw: "98, 104, 128"
  },
  surface1: {
    hex: "#51576d",
    rgb: "rgb(81, 87, 109)",
    hsl: "hsl(227, 15%, 37%)",
    raw: "81, 87, 109"
  },
  surface0: {
    hex: "#414559",
    rgb: "rgb(65, 69, 89)",
    hsl: "hsl(230, 16%, 30%)",
    raw: "65, 69, 89"
  },
  base: {
    hex: "#303446",
    rgb: "rgb(48, 52, 70)",
    hsl: "hsl(229, 19%, 23%)",
    raw: "48, 52, 70"
  },
  mantle: {
    hex: "#292c3c",
    rgb: "rgb(41, 44, 60)",
    hsl: "hsl(231, 19%, 20%)",
    raw: "41, 44, 60"
  },
  crust: {
    hex: "#232634",
    rgb: "rgb(35, 38, 52)",
    hsl: "hsl(229, 20%, 17%)",
    raw: "35, 38, 52"
  }
};
var macchiato = {
  rosewater: {
    hex: "#f4dbd6",
    rgb: "rgb(244, 219, 214)",
    hsl: "hsl(10, 58%, 90%)",
    raw: "244, 219, 214"
  },
  flamingo: {
    hex: "#f0c6c6",
    rgb: "rgb(240, 198, 198)",
    hsl: "hsl(0, 58%, 86%)",
    raw: "240, 198, 198"
  },
  pink: {
    hex: "#f5bde6",
    rgb: "rgb(245, 189, 230)",
    hsl: "hsl(316, 74%, 85%)",
    raw: "245, 189, 230"
  },
  mauve: {
    hex: "#c6a0f6",
    rgb: "rgb(198, 160, 246)",
    hsl: "hsl(267, 83%, 80%)",
    raw: "198, 160, 246"
  },
  red: {
    hex: "#ed8796",
    rgb: "rgb(237, 135, 150)",
    hsl: "hsl(351, 74%, 73%)",
    raw: "237, 135, 150"
  },
  maroon: {
    hex: "#ee99a0",
    rgb: "rgb(238, 153, 160)",
    hsl: "hsl(355, 71%, 77%)",
    raw: "238, 153, 160"
  },
  peach: {
    hex: "#f5a97f",
    rgb: "rgb(245, 169, 127)",
    hsl: "hsl(21, 86%, 73%)",
    raw: "245, 169, 127"
  },
  yellow: {
    hex: "#eed49f",
    rgb: "rgb(238, 212, 159)",
    hsl: "hsl(40, 70%, 78%)",
    raw: "238, 212, 159"
  },
  green: {
    hex: "#a6da95",
    rgb: "rgb(166, 218, 149)",
    hsl: "hsl(105, 48%, 72%)",
    raw: "166, 218, 149"
  },
  teal: {
    hex: "#8bd5ca",
    rgb: "rgb(139, 213, 202)",
    hsl: "hsl(171, 47%, 69%)",
    raw: "139, 213, 202"
  },
  sky: {
    hex: "#91d7e3",
    rgb: "rgb(145, 215, 227)",
    hsl: "hsl(189, 59%, 73%)",
    raw: "145, 215, 227"
  },
  sapphire: {
    hex: "#7dc4e4",
    rgb: "rgb(125, 196, 228)",
    hsl: "hsl(199, 66%, 69%)",
    raw: "125, 196, 228"
  },
  blue: {
    hex: "#8aadf4",
    rgb: "rgb(138, 173, 244)",
    hsl: "hsl(220, 83%, 75%)",
    raw: "138, 173, 244"
  },
  lavender: {
    hex: "#b7bdf8",
    rgb: "rgb(183, 189, 248)",
    hsl: "hsl(234, 82%, 85%)",
    raw: "183, 189, 248"
  },
  text: {
    hex: "#cad3f5",
    rgb: "rgb(202, 211, 245)",
    hsl: "hsl(227, 68%, 88%)",
    raw: "202, 211, 245"
  },
  subtext1: {
    hex: "#b8c0e0",
    rgb: "rgb(184, 192, 224)",
    hsl: "hsl(228, 39%, 80%)",
    raw: "184, 192, 224"
  },
  subtext0: {
    hex: "#a5adcb",
    rgb: "rgb(165, 173, 203)",
    hsl: "hsl(227, 27%, 72%)",
    raw: "165, 173, 203"
  },
  overlay2: {
    hex: "#939ab7",
    rgb: "rgb(147, 154, 183)",
    hsl: "hsl(228, 20%, 65%)",
    raw: "147, 154, 183"
  },
  overlay1: {
    hex: "#8087a2",
    rgb: "rgb(128, 135, 162)",
    hsl: "hsl(228, 15%, 57%)",
    raw: "128, 135, 162"
  },
  overlay0: {
    hex: "#6e738d",
    rgb: "rgb(110, 115, 141)",
    hsl: "hsl(230, 12%, 49%)",
    raw: "110, 115, 141"
  },
  surface2: {
    hex: "#5b6078",
    rgb: "rgb(91, 96, 120)",
    hsl: "hsl(230, 14%, 41%)",
    raw: "91, 96, 120"
  },
  surface1: {
    hex: "#494d64",
    rgb: "rgb(73, 77, 100)",
    hsl: "hsl(231, 16%, 34%)",
    raw: "73, 77, 100"
  },
  surface0: {
    hex: "#363a4f",
    rgb: "rgb(54, 58, 79)",
    hsl: "hsl(230, 19%, 26%)",
    raw: "54, 58, 79"
  },
  base: {
    hex: "#24273a",
    rgb: "rgb(36, 39, 58)",
    hsl: "hsl(232, 23%, 18%)",
    raw: "36, 39, 58"
  },
  mantle: {
    hex: "#1e2030",
    rgb: "rgb(30, 32, 48)",
    hsl: "hsl(233, 23%, 15%)",
    raw: "30, 32, 48"
  },
  crust: {
    hex: "#181926",
    rgb: "rgb(24, 25, 38)",
    hsl: "hsl(236, 23%, 12%)",
    raw: "24, 25, 38"
  }
};
var mocha = {
  rosewater: {
    hex: "#f5e0dc",
    rgb: "rgb(245, 224, 220)",
    hsl: "hsl(10, 56%, 91%)",
    raw: "245, 224, 220"
  },
  flamingo: {
    hex: "#f2cdcd",
    rgb: "rgb(242, 205, 205)",
    hsl: "hsl(0, 59%, 88%)",
    raw: "242, 205, 205"
  },
  pink: {
    hex: "#f5c2e7",
    rgb: "rgb(245, 194, 231)",
    hsl: "hsl(316, 72%, 86%)",
    raw: "245, 194, 231"
  },
  mauve: {
    hex: "#cba6f7",
    rgb: "rgb(203, 166, 247)",
    hsl: "hsl(267, 84%, 81%)",
    raw: "203, 166, 247"
  },
  red: {
    hex: "#f38ba8",
    rgb: "rgb(243, 139, 168)",
    hsl: "hsl(343, 81%, 75%)",
    raw: "243, 139, 168"
  },
  maroon: {
    hex: "#eba0ac",
    rgb: "rgb(235, 160, 172)",
    hsl: "hsl(350, 65%, 77%)",
    raw: "235, 160, 172"
  },
  peach: {
    hex: "#fab387",
    rgb: "rgb(250, 179, 135)",
    hsl: "hsl(23, 92%, 75%)",
    raw: "250, 179, 135"
  },
  yellow: {
    hex: "#f9e2af",
    rgb: "rgb(249, 226, 175)",
    hsl: "hsl(41, 86%, 83%)",
    raw: "249, 226, 175"
  },
  green: {
    hex: "#a6e3a1",
    rgb: "rgb(166, 227, 161)",
    hsl: "hsl(115, 54%, 76%)",
    raw: "166, 227, 161"
  },
  teal: {
    hex: "#94e2d5",
    rgb: "rgb(148, 226, 213)",
    hsl: "hsl(170, 57%, 73%)",
    raw: "148, 226, 213"
  },
  sky: {
    hex: "#89dceb",
    rgb: "rgb(137, 220, 235)",
    hsl: "hsl(189, 71%, 73%)",
    raw: "137, 220, 235"
  },
  sapphire: {
    hex: "#74c7ec",
    rgb: "rgb(116, 199, 236)",
    hsl: "hsl(199, 76%, 69%)",
    raw: "116, 199, 236"
  },
  blue: {
    hex: "#89b4fa",
    rgb: "rgb(137, 180, 250)",
    hsl: "hsl(217, 92%, 76%)",
    raw: "137, 180, 250"
  },
  lavender: {
    hex: "#b4befe",
    rgb: "rgb(180, 190, 254)",
    hsl: "hsl(232, 97%, 85%)",
    raw: "180, 190, 254"
  },
  text: {
    hex: "#cdd6f4",
    rgb: "rgb(205, 214, 244)",
    hsl: "hsl(226, 64%, 88%)",
    raw: "205, 214, 244"
  },
  subtext1: {
    hex: "#bac2de",
    rgb: "rgb(186, 194, 222)",
    hsl: "hsl(227, 35%, 80%)",
    raw: "186, 194, 222"
  },
  subtext0: {
    hex: "#a6adc8",
    rgb: "rgb(166, 173, 200)",
    hsl: "hsl(228, 24%, 72%)",
    raw: "166, 173, 200"
  },
  overlay2: {
    hex: "#9399b2",
    rgb: "rgb(147, 153, 178)",
    hsl: "hsl(228, 17%, 64%)",
    raw: "147, 153, 178"
  },
  overlay1: {
    hex: "#7f849c",
    rgb: "rgb(127, 132, 156)",
    hsl: "hsl(230, 13%, 55%)",
    raw: "127, 132, 156"
  },
  overlay0: {
    hex: "#6c7086",
    rgb: "rgb(108, 112, 134)",
    hsl: "hsl(231, 11%, 47%)",
    raw: "108, 112, 134"
  },
  surface2: {
    hex: "#585b70",
    rgb: "rgb(88, 91, 112)",
    hsl: "hsl(233, 12%, 39%)",
    raw: "88, 91, 112"
  },
  surface1: {
    hex: "#45475a",
    rgb: "rgb(69, 71, 90)",
    hsl: "hsl(234, 13%, 31%)",
    raw: "69, 71, 90"
  },
  surface0: {
    hex: "#313244",
    rgb: "rgb(49, 50, 68)",
    hsl: "hsl(237, 16%, 23%)",
    raw: "49, 50, 68"
  },
  base: {
    hex: "#1e1e2e",
    rgb: "rgb(30, 30, 46)",
    hsl: "hsl(240, 21%, 15%)",
    raw: "30, 30, 46"
  },
  mantle: {
    hex: "#181825",
    rgb: "rgb(24, 24, 37)",
    hsl: "hsl(240, 21%, 12%)",
    raw: "24, 24, 37"
  },
  crust: {
    hex: "#11111b",
    rgb: "rgb(17, 17, 27)",
    hsl: "hsl(240, 23%, 9%)",
    raw: "17, 17, 27"
  }
};
var palettes = {
  variants: {
    latte,
    frappe,
    macchiato,
    mocha
  },
  labels: {
    rosewater: {
      latte: latte.rosewater,
      frappe: frappe.rosewater,
      macchiato: macchiato.rosewater,
      mocha: mocha.rosewater
    },
    flamingo: {
      latte: latte.flamingo,
      frappe: frappe.flamingo,
      macchiato: macchiato.flamingo,
      mocha: mocha.flamingo
    },
    pink: {
      latte: latte.pink,
      frappe: frappe.pink,
      macchiato: macchiato.pink,
      mocha: mocha.pink
    },
    mauve: {
      latte: latte.mauve,
      frappe: frappe.mauve,
      macchiato: macchiato.mauve,
      mocha: mocha.mauve
    },
    red: {
      latte: latte.red,
      frappe: frappe.red,
      macchiato: macchiato.red,
      mocha: mocha.red
    },
    maroon: {
      latte: latte.maroon,
      frappe: frappe.maroon,
      macchiato: macchiato.maroon,
      mocha: mocha.maroon
    },
    peach: {
      latte: latte.peach,
      frappe: frappe.peach,
      macchiato: macchiato.peach,
      mocha: mocha.peach
    },
    yellow: {
      latte: latte.yellow,
      frappe: frappe.yellow,
      macchiato: macchiato.yellow,
      mocha: mocha.yellow
    },
    green: {
      latte: latte.green,
      frappe: frappe.green,
      macchiato: macchiato.green,
      mocha: mocha.green
    },
    teal: {
      latte: latte.teal,
      frappe: frappe.teal,
      macchiato: macchiato.teal,
      mocha: mocha.teal
    },
    sky: {
      latte: latte.sky,
      frappe: frappe.sky,
      macchiato: macchiato.sky,
      mocha: mocha.sky
    },
    sapphire: {
      latte: latte.sapphire,
      frappe: frappe.sapphire,
      macchiato: macchiato.sapphire,
      mocha: mocha.sapphire
    },
    blue: {
      latte: latte.blue,
      frappe: frappe.blue,
      macchiato: macchiato.blue,
      mocha: mocha.blue
    },
    lavender: {
      latte: latte.lavender,
      frappe: frappe.lavender,
      macchiato: macchiato.lavender,
      mocha: mocha.lavender
    },
    text: {
      latte: latte.text,
      frappe: frappe.text,
      macchiato: macchiato.text,
      mocha: mocha.text
    },
    subtext1: {
      latte: latte.subtext1,
      frappe: frappe.subtext1,
      macchiato: macchiato.subtext1,
      mocha: mocha.subtext1
    },
    subtext0: {
      latte: latte.subtext0,
      frappe: frappe.subtext0,
      macchiato: macchiato.subtext0,
      mocha: mocha.subtext0
    },
    overlay2: {
      latte: latte.overlay2,
      frappe: frappe.overlay2,
      macchiato: macchiato.overlay2,
      mocha: mocha.overlay2
    },
    overlay1: {
      latte: latte.overlay1,
      frappe: frappe.overlay1,
      macchiato: macchiato.overlay1,
      mocha: mocha.overlay1
    },
    overlay0: {
      latte: latte.overlay0,
      frappe: frappe.overlay0,
      macchiato: macchiato.overlay0,
      mocha: mocha.overlay0
    },
    surface2: {
      latte: latte.surface2,
      frappe: frappe.surface2,
      macchiato: macchiato.surface2,
      mocha: mocha.surface2
    },
    surface1: {
      latte: latte.surface1,
      frappe: frappe.surface1,
      macchiato: macchiato.surface1,
      mocha: mocha.surface1
    },
    surface0: {
      latte: latte.surface0,
      frappe: frappe.surface0,
      macchiato: macchiato.surface0,
      mocha: mocha.surface0
    },
    base: {
      latte: latte.base,
      frappe: frappe.base,
      macchiato: macchiato.base,
      mocha: mocha.base
    },
    mantle: {
      latte: latte.mantle,
      frappe: frappe.mantle,
      macchiato: macchiato.mantle,
      mocha: mocha.mantle
    },
    crust: {
      latte: latte.crust,
      frappe: frappe.crust,
      macchiato: macchiato.crust,
      mocha: mocha.crust
    }
  }
};
var { variants, labels } = palettes;

// src/utils.ts
var fs = __toESM(require("fs"));

// src/theme/default/semanticColors.ts
var getSemanticColors = (context) => {
  const { palette, options } = context;
  return {
    enumMember: {
      foreground: palette.sky
    },
    "variable.constant": {
      foreground: palette.yellow
    },
    "variable.defaultLibrary": {
      foreground: palette.peach
    }
  };
};

// src/theme/monokai/semanticColors.ts
var getSemanticColors2 = (context) => {
  const { palette, options } = context;
  return {
    enumMember: {
      foreground: palette.mauve
    },
    namespace: {
      foreground: palette.text
    },
    concept: {
      foreground: palette.rosewater
    }
  };
};

// src/theme/dark-one/semanticColors.ts
var getSemanticColors3 = (context) => {
  const { palette, options } = context;
  return {
    "enumMember": {
      foreground: palette.teal
    },
    "variable.constant": {
      foreground: palette.peach
    },
    "variable.defaultLibrary": {
      foreground: palette.flamingo
    },
    "variable:dart": {
      foreground: palette.peach
    },
    "property:dart": {
      foreground: palette.peach
    },
    "annotation:dart": {
      foreground: palette.peach
    },
    "parameter.label:dart": {
      foreground: "#abb2bf"
    },
    "macro": {
      foreground: palette.peach
    },
    "tomlArrayKey": {
      foreground: palette.flamingo
    }
  };
};

// src/theme/ms/semanticColors.ts
var getSemanticColors4 = (context) => {
  const { palette, options } = context;
  return {
    newOperator: {
      foreground: palette.blue
    },
    stringLiteral: {
      foreground: palette.peach
    },
    customLiteral: {
      foreground: palette.yellow
    },
    numberLiteral: {
      foreground: palette.teal
    }
  };
};

// src/theme/semanticColorsCommon.ts
var getSemanticColors5 = (context) => {
  const { palette, options } = context;
  if (options.syntaxMode == "monokai") {
    return getSemanticColors2(context);
  } else if (options.syntaxMode == "dark-one") {
    return getSemanticColors3(context);
  } else if (options.syntaxMode == "ms") {
    return getSemanticColors4(context);
  } else {
    return getSemanticColors(context);
  }
};

// src/theme/default/tokenColors.ts
var getTokenColors = (context) => {
  const { palette, options } = context;
  return [
    {
      name: "All variable",
      scope: ["variable.language", "variable.other"],
      settings: {
        foreground: palette.flamingo
      }
    },
    {
      name: "All function",
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "All parameter",
      scope: [
        "variable.parameter.function",
        "variable.parameter.function-call"
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "All numeric",
      scope: ["constant.numeric.decimal", "constant.numeric.integer"],
      settings: {
        foreground: palette.peach,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "All types",
      scope: "entity.name.type",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "All conditionals",
      scope: [
        "keyword.control",
        "keyword.control.for",
        "keyword.control.while",
        "keyword.control.if",
        "keyword.control.else",
        "keyword.control.switch",
        "keyword.control.case"
      ],
      settings: {
        foreground: palette.red,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "All punctuation brackets",
      scope: [
        "punctuation.brackets",
        "punctuation.section",
        "punctuation.definition"
      ],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "All punctuation delimiters",
      scope: "punctuation.semi",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "All namespace",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.rosewater
      }
    },
    {
      name: "All operators",
      scope: [
        "keyword.operator.comparison",
        "keyword.operator.assignment",
        "keyword.operator.arrow.skinny",
        "keyword.operator.math",
        "keyword.operator.key-value",
        "keyword.operator.misc",
        "keyword.operator.namespace"
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "All built-in constants",
      scope: "constant.language",
      settings: {
        foreground: palette.lavender,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "All constants",
      scope: "constant.other",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "JSON quoted string",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "JSON punctuation string",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "JSON punct structure",
      scope: [
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
        "source.json meta.structure.array.json > value.json > string.quoted.json",
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
        "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "JSON property name",
      scope: "support.type.property-name.json.comments",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "JSON constants",
      scope: "constant.language.json.comments",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "JSON punctuation",
      scope: [
        "punctuation.separator.dictionary.pair.json.comments",
        "punctuation.separator.array.json.comments"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "JSON brackets",
      scope: [
        "punctuation.definition.dictionary.begin.json.comments",
        "punctuation.definition.dictionary.end.json.comments",
        "punctuation.definition.array.begin.json.comments",
        "punctuation.definition.array.end.json.comments"
      ],
      settings: {
        foreground: palette.overlay2
      }
    },
    {
      name: "JSON constant language",
      scope: [
        "source.json meta.structure.dictionary.json > constant.language.json",
        "source.json meta.structure.array.json > constant.language.json"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "JSON property name [VSCODE-CUSTOM]",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      scope: "support.type.property-name.json punctuation",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "unison punctuation",
      scope: [
        "punctuation.definition.delayed.unison",
        "punctuation.definition.list.begin.unison",
        "punctuation.definition.list.end.unison",
        "punctuation.definition.ability.begin.unison",
        "punctuation.definition.ability.end.unison",
        "punctuation.operator.assignment.as.unison",
        "punctuation.separator.pipe.unison",
        "punctuation.separator.delimiter.unison",
        "punctuation.definition.hash.unison"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "punctuation.separator.parameters.python",
      scope: [
        "punctuation.separator.period.python",
        "punctuation.separator.element.python",
        "punctuation.parenthesis.begin.python",
        "punctuation.parenthesis.end.python"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Rust modifier",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Rust types",
      scope: "entity.name.type.rust",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Rust functions std",
      scope: "support.function.std.rust",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Rust functions",
      scope: "entity.name.function.rust",
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "Rust function keyword",
      scope: "keyword.other.fn.rust",
      settings: {
        foreground: palette.maroon
      }
    },
    {
      name: "Rust conditionals",
      scope: "keyword.control.rust",
      settings: {
        foreground: palette.mauve,
        fontStyle: `${options.boldKeywords && "bold"} ${options.italicKeywords && "italic"}`
      }
    },
    {
      name: "Rust punctuation brackets",
      scope: [
        "punctuation.brackets.curly.rust",
        "punctuation.brackets.round.rust",
        "punctuation.brackets.square.rust",
        "punctuation.brackets.attribute.rust"
      ],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "Rust namespace",
      scope: "entity.name.namespace.rust",
      settings: {
        foreground: palette.rosewater
      }
    },
    {
      name: "Rust punctuation delimiters",
      scope: "punctuation.semi.rust",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Rust operators",
      scope: [
        "keyword.operator.comparison.rust",
        "keyword.operator.assignment.equal.rust",
        "keyword.operator.arrow.skinny.rust",
        "keyword.operator.math.rust",
        "keyword.operator.key-value.rust",
        "keyword.operator.misc.rust"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Rust operator namespaces",
      scope: "keyword.operator.namespace.rust",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Rust definition attributes",
      scope: [
        "punctuation.definition.attribute.rust",
        "keyword.operator.attribute.inner.rust"
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "Rust math logic",
      scope: "constant.numeric.decimal.rust",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Rust constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Rust entity name",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Rust variable",
      scope: ["variable.language.rust", "variable.other.rust"],
      settings: {
        foreground: palette.text,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "Rust misc operators",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Rust sigil operator",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Lua operators",
      scope: "keyword.operator.lua",
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "Lua numeric",
      scope: "constant.numeric.integer.lua",
      settings: {
        foreground: palette.peach,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "Lua other vars",
      scope: "variable.other.lua",
      settings: {
        foreground: palette.lavender,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "Lua brackets",
      scope: [
        "punctuation.definition.parameters.end.lua",
        "punctuation.definition.parameters.begin.lua"
      ],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "C++ Punct Delimiters",
      scope: "punctuation.terminator.statement.cpp",
      settings: {
        foreground: palette.teal,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "C++ Variables",
      scope: "variable.other.local.cpp",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "C++ Operators",
      scope: [
        "punctuation.separator.scope-resolution.cpp",
        "punctuation.separator.scope-resolution.namespace.alias.cpp",
        "punctuation.separator.scope-resolution.namespace.using.cpp"
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "C++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "C++ constructor/destructor",
      scope: [
        "entity.name.function.definition.special.constructor",
        "entity.name.function.definition.special.member.destructor"
      ],
      settings: {
        foreground: palette.lavender
      }
    },
    {
      name: "C++ directive",
      scope: [
        "keyword.control.directive",
        "keyword.other.using.directive",
        "punctuation.definition.directive"
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "C++ ifdef directive",
      scope: [
        "keyword.control.directive.conditional.ifdef.cpp",
        "keyword.control.directive.else.cpp",
        "keyword.control.directive.else.cpp punctuation.definition.directive.cpp",
        "keyword.control.directive.endif.cpp",
        "keyword.control.directive.conditional.ifdef.cpp punctuation.definition.directive.cpp",
        "keyword.control.directive.endif.cpp punctuation.definition.directive.cpp"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "C++ misc",
      scope: [
        "entity.name.other.preprocessor.macro.predefined.probably",
        "entity.name.scope-resolution.cpp"
      ],
      settings: {
        foreground: palette.rosewater,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "C++ pointer/reference",
      scope: ["storage.modifier.pointer.cpp", "storage.modifier.reference.cpp"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "C++ loop/conditional",
      scope: [
        "keyword.control.for",
        "keyword.control.while",
        "keyword.control.if",
        "keyword.control.else",
        "keyword.control.switch",
        "keyword.control.case"
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "C++ return",
      scope: "keyword.control.return",
      settings: {
        foreground: palette.pink
      }
    },
    {
      name: "C++ block",
      scope: [
        "punctuation.section.block.begin.bracket.curly.cpp",
        "punctuation.section.block.end.bracket.curly.cpp",
        "punctuation.terminator.statement.c",
        "punctuation.section.block.begin.bracket.curly.c",
        "punctuation.section.block.end.bracket.curly.c",
        "punctuation.section.parens.begin.bracket.round.c",
        "punctuation.section.parens.end.bracket.round.c",
        "punctuation.section.parameters.begin.bracket.round.c",
        "punctuation.section.parameters.end.bracket.round.c"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "C++ storage type modifier",
      scope: "storage.type.built-in.primitive.cpp",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "regexp operator.quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "punctuation.definition",
      scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "diff",
      scope: [
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
        "punctuation.definition.from-file.diff",
        "punctuation.definition.to-file.diff"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Quote multi",
      scope: [
        "string.quoted.docstring.multi",
        "string.quoted.multi",
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
        "source.python string.quoted.multi.python punctuation.definition.string.end.python",
        "markup.fenced_code.block"
      ],
      settings: {
        foreground: palette.green,
        fontStyle: options.italicComments ? "italic" : ""
      }
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "js/ts import keyword",
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "js/ts variable.other.constant",
      scope: "variable.other.constant",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "java modifier.import",
      scope: [
        "punctuation.section.block.begin.java",
        "punctuation.section.block.end.java",
        "punctuation.definition.method-parameters.begin.java",
        "punctuation.definition.method-parameters.end.java",
        "meta.method.identifier.java",
        "punctuation.section.method.begin.java",
        "punctuation.section.method.end.java",
        "punctuation.terminator.java",
        "punctuation.section.class.begin.java",
        "punctuation.section.class.end.java",
        "punctuation.section.inner-class.begin.java",
        "punctuation.section.inner-class.end.java",
        "meta.method-call.java",
        "punctuation.section.class.begin.bracket.curly.java",
        "punctuation.section.class.end.bracket.curly.java",
        "punctuation.section.method.begin.bracket.curly.java",
        "punctuation.section.method.end.bracket.curly.java",
        "punctuation.separator.period.java",
        "punctuation.bracket.angle.java",
        "punctuation.definition.annotation.java",
        "meta.method.body.java"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "java modifier.import",
      scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "operator logical",
      scope: ["keyword.operator.logical", "keyword.operator.ternary"],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "support.constant.property-value.scss",
      scope: [
        "support.constant.property-value.scss",
        "support.constant.property-value.css"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: [
        "keyword.operator.css",
        "keyword.operator.scss",
        "keyword.operator.less"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "css color standard name",
      scope: [
        "support.constant.color.w3c-standard-color-name.css",
        "support.constant.color.w3c-standard-color-name.scss"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "js/ts module",
      scope: [
        "support.module.node",
        "support.type.object.module",
        "support.module.node"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "js variable readwrite",
      scope: [
        "variable.other.readwrite",
        "meta.object-literal.key",
        "support.variable.property",
        "support.variable.object.process",
        "support.variable.object.node"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "js console function",
      scope: "entity.name.function,support.function.console",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "js dom variable",
      scope: ["support.variable.dom", "support.variable.property.dom"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "keyword.operator",
      scope: [
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.decrement",
        "keyword.operator.increment",
        "keyword.operator.relational"
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "C operators",
      scope: [
        "keyword.operator.c",
        "keyword.operator.increment.c",
        "keyword.operator.decrement.c",
        "keyword.operator.bitwise.shift.c",
        "keyword.operator.cpp",
        "keyword.operator.increment.cpp",
        "keyword.operator.decrement.cpp",
        "keyword.operator.bitwise.shift.cpp"
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Other punctuation .c",
      scope: ["punctuation.separator.c", "punctuation.separator.cpp"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "C type posix-reserved",
      scope: [
        "support.type.posix-reserved.c",
        "support.type.posix-reserved.cpp"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "python block",
      scope: [
        "punctuation.definition.arguments.begin.python",
        "punctuation.definition.arguments.end.python",
        "punctuation.separator.arguments.python",
        "punctuation.definition.list.begin.python",
        "punctuation.definition.list.end.python"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Source Js Keyword Operator Delete, In, Of, Instanceof, New, Typeof, Void",
      scope: [
        "keyword.operator.expression.delete",
        "keyword.operator.expression.in",
        "keyword.operator.expression.of",
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.expression.typeof",
        "keyword.operator.expression.void"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "",
        foreground: palette.blue
      }
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "",
        foreground: palette.yellow
      }
    },
    {
      name: "SCSS variables",
      scope: "variable.scss",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Headings",
      scope: "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope: "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "illegal, deprecated",
      scope: "invalid.illegal, invalid.deprecated",
      settings: {
        foreground: palette.overlay0,
        fontStyle: "strikethrough"
      }
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: palette.subtext0
      }
    },
    {
      name: "laravel blade tag",
      scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "laravel blade @",
      scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "use statement for other classes",
      scope: [
        "support.other.namespace.use.php",
        "support.other.namespace.use-as.php",
        "support.other.namespace.php",
        "entity.other.alias.php",
        "meta.interface.php"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "php types",
      scope: [
        "storage.type.php",
        "meta.other.type.phpdoc.php",
        "keyword.other.type.php",
        "keyword.other.array.phpdoc.php"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "php call-function",
      scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "php function-resets",
      scope: [
        "punctuation.definition.parameters.begin.bracket.round.php",
        "punctuation.definition.parameters.end.bracket.round.php",
        "punctuation.separator.delimiter.php",
        "punctuation.section.scope.begin.php",
        "punctuation.section.scope.end.php",
        "punctuation.terminator.expression.php",
        "punctuation.definition.arguments.begin.bracket.round.php",
        "punctuation.definition.arguments.end.bracket.round.php",
        "punctuation.definition.storage-type.begin.bracket.round.php",
        "punctuation.definition.storage-type.end.bracket.round.php",
        "punctuation.definition.array.begin.bracket.round.php",
        "punctuation.definition.array.end.bracket.round.php",
        "punctuation.definition.begin.bracket.round.php",
        "punctuation.definition.end.bracket.round.php",
        "punctuation.definition.begin.bracket.curly.php",
        "punctuation.definition.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.start.bracket.curly.php",
        "punctuation.definition.section.switch-block.begin.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "support php constants",
      scope: [
        "support.constant.ext.php",
        "support.constant.std.php",
        "support.constant.core.php",
        "support.constant.parser-token.php"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "php logical/bitwise operator",
      scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "python function support",
      scope: [
        "support.token.decorator.python",
        "meta.function.decorator.identifier.python"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "parameter function ruby cs",
      scope: ["function.parameter.ruby", "function.parameter.cs"],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "ts primitive/builtin types",
      scope: [
        "support.type.primitive.ts",
        "support.type.builtin.ts",
        "support.type.primitive.tsx",
        "support.type.builtin.tsx"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: palette.red
      }
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Go import statement",
      scope: "keyword.import.go",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Shell definition variables",
      scope: ["punctuation.definition.variable.shell"],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "Shell logical operators",
      scope: ["keyword.operator.logical.shell"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Shell clauses",
      scope: ["meta.scope.case-clause-body.shell"],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Shell funcs",
      scope: ["meta.scope.group.shell"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Shell interpolated cmds",
      scope: ["string.interpolated.dollar.shell"],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Shell interpolated strings",
      scope: ["string.quoted.single.shell"],
      settings: {
        foreground: palette.lavender
      }
    },
    {
      name: "Shell pipe symbol",
      scope: ["keyword.operator.pipe.shell"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Shell group definition",
      scope: ["punctuation.definition.group.shell"],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "Shell conditionals",
      scope: ["keyword.control.shell"],
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Shell operators and punct delimiters",
      scope: ["keyword.operator.list.shell"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Shell parenthesis",
      scope: ["punctuation.definition.logical-expression.shell"],
      settings: {
        foreground: palette.overlay1
      }
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: palette.peach
      }
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "string",
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "comments",
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "Markdown underscore-style headers",
      scope: [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.overlay0
      }
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "js/ts italic",
      scope: [
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.ts",
        "entity.other.attribute-name.jsx",
        "entity.other.attribute-name.tsx",
        "variable.parameter",
        "variable.language.super"
      ],
      settings: {
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: options.italicComments ? "italic" : ""
      }
    },
    {
      name: "python keyword import",
      scope: "keyword.control.import.python",
      settings: {
        foreground: palette.teal,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "python keyword flow",
      scope: "keyword.control.flow.python",
      settings: {
        foreground: palette.mauve,
        fontStyle: options.boldKeywords ? "bold" : ""
      }
    },
    {
      name: "python storage type",
      scope: "storage.type.function.python",
      settings: {
        foreground: palette.maroon,
        fontStyle: options.italicKeywords ? "italic" : ""
      }
    },
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: options.italicComments ? "italic" : ""
      }
    },
    {
      name: "invalid.deprecated.line-too-long.git-commit",
      scope: "invalid.deprecated.line-too-long.git-commit",
      settings: {
        foreground: palette.yellow,
        fontStyle: "underline"
      }
    }
  ];
};

// src/theme/monokai/tokenColors.ts
var getTokenColors2 = (context) => {
  const { palette, options } = context;
  return [
    {
      name: "Comment",
      scope: [
        "comment",
        "string.comment"
      ],
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.overlay0
      }
    },
    {
      name: "String",
      scope: [
        "string",
        "string.template"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Embedded String Begin/End",
      scope: [
        "string.embedded.begin",
        "string.embedded.end",
        "punctuation.definition.template-expression",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Default Embedded Color",
      scope: [
        "punctuation.section.embedded.begin.js",
        "punctuation.section.embedded.end.js",
        "punctuation.section.embedded.begin.erb",
        "punctuation.section.embedded.end.erb",
        "source.elixir.embedded",
        "punctuation.separator",
        "punctuation.accessor",
        "meta.brace"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Built-in constant",
      scope: "constant.language",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "User-defined constant",
      scope: [
        "constant.character",
        "constant.other"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Keyword",
      scope: [
        "keyword",
        "keyword.operator.logical",
        "keyword.operator.constructor"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.red
      }
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Types",
      scope: "storage.type",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Class",
      scope: [
        "entity.name.class",
        "entity.name.module",
        "entity.name.type",
        "storage.identifier",
        "support.class"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Variable Object",
      scope: [
        "variable.other.object",
        "variable.other.constant",
        "variable.other.global",
        "variable.other.readwrite.class",
        "variable.other.readwrite.instance",
        "variable.other.readwrite.batchfile",
        "variable.readwrite",
        "variable.readwrite.other.block"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Other variable",
      scope: [
        "variable.other",
        "variable.other.property",
        "variable.other.block"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Package Import",
      scope: [
        "storage.modifier.import",
        "storage.modifier.package"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Function name",
      scope: [
        "entity.name.function",
        "support.function"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Function argument",
      scope: [
        "variable.parameter",
        "entity.name.variable.parameter",
        "parameter.variable"
      ],
      settings: {
        fontStyle: "italic",
        foreground: palette.peach
      }
    },
    {
      name: "Function call",
      scope: "entity.name.function-call",
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "Builtin Functions",
      scope: [
        "function.support.builtin",
        "function.support.core"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Tag Name",
      scope: [
        "entity.name.tag",
        "entity.name.tag.class.js"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Tag Class and ID",
      scope: [
        "entity.name.tag.class",
        "entity.name.tag.id"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Tag Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Library class/type",
      scope: [
        "support.type",
        "support.variable"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Json Property",
      scope: "support.dictionary.json",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Property name",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.scss",
        "support.type.property-name.less",
        "support.type.property-name.sass"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      name: "CSS: Pseudo Attribute Names",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-class.scss",
        "entity.other.attribute-name.pseudo-class.less",
        "entity.other.attribute-name.pseudo-class.sass",
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.pseudo-element.scss",
        "entity.other.attribute-name.pseudo-element.less",
        "entity.other.attribute-name.pseudo-element.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Property value",
      scope: [
        "support.constant.css",
        "support.constant.scss",
        "support.constant.less",
        "support.constant.sass"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "StyleSheet Variable",
      scope: [
        "variable.css",
        "variable.scss",
        "variable.less",
        "variable.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Variable String",
      scope: [
        "variable.css.string",
        "variable.scss.string",
        "variable.less.string",
        "variable.sass.string"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "StyleSheet Unit",
      scope: [
        "unit.css",
        "unit.scss",
        "unit.less",
        "unit.sass"
      ],
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "StyleSheet Function",
      scope: [
        "function.css",
        "function.scss",
        "function.less",
        "function.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {
        fontStyle: ""
      }
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        "background": palette.mauve,
        foreground: palette.rosewater
      }
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        "background": palette.sky,
        foreground: palette.rosewater
      }
    },
    {
      name: "JSON String",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Link",
      scope: "string.detected-link",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "diff.header",
      scope: [
        "meta.diff",
        "meta.diff.header"
      ],
      settings: {
        foreground: "#75715E"
      }
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "constant.numeric.line-number.find-in-files - match",
      settings: {
        foreground: "#56b6c2A0"
      }
    },
    {
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Markup: Emphasis",
      scope: "markup.italic, markup.italic.markdown",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      name: "Markup: Punctuation",
      scope: [
        "punctuation.definition.italic.markdown",
        "punctuation.definition.bold.markdown",
        "punctuation.definition.heading.markdown"
      ],
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "Markup: Emphasis Punctuation",
      scope: "punctuation.definition.italic.markdown",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      name: "Markdown: Link",
      scope: "markup.underline.link.markdown",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Markup: Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold"
      }
    },
    {
      name: "Markup: Heading",
      scope: "markup.heading.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette.red
      }
    },
    {
      name: "Markup: Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Markup: Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: palette.mauve,
        fontStyle: "bold"
      }
    },
    {
      name: "Markup: Raw",
      scope: [
        "markup.raw.inline.markdown",
        "markup.raw.block.markdown"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Markup: List Punctuation",
      scope: "punctuation.definition.list_item.markdown",
      settings: {
        fontStyle: "bold",
        foreground: "#ffffff"
      }
    }
  ];
};

// src/theme/dark-one/tokenColors.ts
var getTokenColors3 = (context) => {
  const { palette, options } = context;
  return [
    {
      "scope": "meta.embedded",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "unison punctuation",
      "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "haskell variable generic-type",
      "scope": "variable.other.generic-type.haskell",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "haskell storage type",
      "scope": "storage.type.haskell",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "support.variable.magic.python",
      "scope": "support.variable.magic.python",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "punctuation.separator.parameters.python",
      "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "variable.parameter.function.language.special.self.python",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "variable.parameter.function.language.special.cls.python",
      "scope": "variable.parameter.function.language.special.cls.python",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "storage.modifier.lifetime.rust",
      "scope": "storage.modifier.lifetime.rust",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "support.function.std.rust",
      "scope": "support.function.std.rust",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "entity.name.lifetime.rust",
      "scope": "entity.name.lifetime.rust",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "variable.language.rust",
      "scope": "variable.language.rust",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "support.constant.edge",
      "scope": "support.constant.edge",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "regexp constant character-class",
      "scope": "constant.other.character-class.regexp",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "keyword.operator",
      "scope": [
        "keyword.operator.word"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "regexp operator.quantifier",
      "scope": "keyword.operator.quantifier.regexp",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Text",
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Comment Markup Link",
      "scope": "comment markup.link",
      "settings": {
        fontStyle: options.italicComments ? "italic" : "",
        "foreground": palette.subtext0
      }
    },
    {
      "name": "markup diff",
      "scope": "markup.changed.diff",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "diff",
      "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "inserted.diff",
      "scope": "markup.inserted.diff",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "deleted.diff",
      "scope": "markup.deleted.diff",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "c++ function",
      "scope": "meta.function.c,meta.function.cpp",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "c++ block",
      "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "js/ts punctuation separator key-value",
      "scope": "punctuation.separator.key-value",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "js/ts import keyword",
      "scope": "keyword.operator.expression.import",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "math js/ts",
      "scope": "support.constant.math",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "math property js/ts",
      "scope": "support.constant.property.math",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "js/ts variable.other.constant",
      "scope": "variable.other.constant",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "java type",
      "scope": [
        "storage.type.annotation.java",
        "storage.type.object.array.java"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "java source",
      "scope": "source.java",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "java modifier.import",
      "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "java modifier.import",
      "scope": "meta.method.java",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "java modifier.import",
      "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "java instanceof",
      "scope": "keyword.operator.instanceof.java",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "java variable.name",
      "scope": "meta.definition.variable.name.java",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "operator logical",
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "operator bitwise",
      "scope": "keyword.operator.bitwise",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "operator channel",
      "scope": "keyword.operator.channel",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "support.constant.property-value.scss",
      "scope": "support.constant.property-value.scss,support.constant.property-value.css",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "CSS/SCSS/LESS Operators",
      "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "css color standard name",
      "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "css comma",
      "scope": "punctuation.separator.list.comma.css",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "css attribute-name.id",
      "scope": "support.constant.color.w3c-standard-color-name.css",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "css property-name",
      "scope": "support.type.vendored.property-name.css",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "js/ts module",
      "scope": "support.module.node,support.type.object.module,support.module.node",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "entity.name.type.module",
      "scope": "entity.name.type.module",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "js variable readwrite",
      "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "js/ts json",
      "scope": "support.constant.json",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "js/ts Keyword",
      "scope": [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "js/ts console",
      "scope": "support.type.object.console",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "js/ts support.variable.property.process",
      "scope": "support.variable.property.process",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "js console function",
      "scope": "entity.name.function,support.function.console",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "keyword.operator.misc.rust",
      "scope": "keyword.operator.misc.rust",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "keyword.operator.sigil.rust",
      "scope": "keyword.operator.sigil.rust",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "operator",
      "scope": "keyword.operator.delete",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "js dom",
      "scope": "support.type.object.dom",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "js dom variable",
      "scope": "support.variable.dom,support.variable.property.dom",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "keyword.operator",
      "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "C operator assignment",
      "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation.separator.delimiter",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Other punctuation .c",
      "scope": "punctuation.separator.c,punctuation.separator.cpp",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "C type posix-reserved",
      "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "keyword.operator.sizeof.c",
      "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "python parameter",
      "scope": "variable.parameter.function.language.python",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "python type",
      "scope": "support.type.python",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "python logical",
      "scope": "keyword.operator.logical.python",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "pyCs",
      "scope": "variable.parameter.function.python",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "python block",
      "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "python function-call.generic",
      "scope": "meta.function-call.generic.python",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "python placeholder reset to normal string",
      "scope": "constant.character.format.placeholder.other.python",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Compound Assignment Operators",
      "scope": "keyword.operator.assignment.compound",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Compound Assignment Operators js/ts",
      "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "Keywords",
      "scope": "keyword",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Namespaces",
      "scope": "entity.name.namespace",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Variables",
      "scope": "variable",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Variables",
      "scope": "variable.c",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Language variables",
      "scope": "variable.language",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Java Variables",
      "scope": "token.variable.parameter.java",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Java Imports",
      "scope": "import.storage.java",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Packages",
      "scope": "token.package.keyword",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Packages",
      "scope": "token.package",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Functions",
      "scope": [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Classes",
      "scope": "entity.name.type.namespace",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Classes",
      "scope": "support.class, entity.name.type.class",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Class name",
      "scope": "entity.name.class.identifier.namespace.type",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Class name php",
      "scope": "variable.other.class.php",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Type Name",
      "scope": "entity.name.type",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Keyword Control",
      "scope": "keyword.control",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Control Elements",
      "scope": "control.elements, keyword.operator.less",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Methods",
      "scope": "keyword.other.special-method",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Storage JS TS",
      "scope": "token.storage",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Java Storage",
      "scope": "token.storage.type.java",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Support",
      "scope": "support.function",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "Support type",
      "scope": "support.type.property-name",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "[VSCODE-CUSTOM] toml support",
      "scope": "support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.property-value",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.font-name",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Meta tag",
      "scope": "meta.tag",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Strings",
      "scope": "string",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "Constant other symbol",
      "scope": "constant.other.symbol",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "Integers",
      "scope": "constant.numeric",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Constants",
      "scope": "constant",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Constants",
      "scope": "punctuation.definition.constant",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Tags",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Attributes",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Attribute IDs",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Attribute class",
      "scope": "entity.other.attribute-name.class.css",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Selector",
      "scope": "meta.selector",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading punctuation.definition.heading, entity.name.section",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Units",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Bold",
      "scope": "markup.bold,todo.bold",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Bold",
      "scope": "punctuation.definition.bold",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "markup Italic",
      "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "emphasis md",
      "scope": "emphasis md",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown headings",
      "scope": "entity.name.section.markdown",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "punctuation.definition.list.begin.markdown",
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading setext",
      "scope": "markup.heading.setext",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      "scope": "punctuation.definition.bold.markdown",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.markdown",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
      "scope": "punctuation.definition.raw.markdown",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      "scope": "punctuation.definition.list.markdown",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      "scope": [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "beginning.punctuation.definition.list.markdown",
      "scope": [
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      "scope": "punctuation.definition.metadata.markdown",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
      "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Asciidoc Inline Raw",
      "scope": "markup.raw.monospace.asciidoc",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
      "scope": "punctuation.definition.asciidoc",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
      "scope": "markup.list.asciidoc",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Asciidoc underline link",
      "scope": "markup.link.asciidoc,markup.other.url.asciidoc",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Asciidoc link name",
      "scope": "string.unquoted.asciidoc,markup.other.url.asciidoc",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Regular Expressions",
      "scope": "string.regexp",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded, variable.interpolation",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal.bad-ampersand.html",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "scope": "invalid.illegal.unrecognized-tag.html",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Broken",
      "scope": "invalid.broken",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "html Deprecated",
      "scope": "invalid.deprecated.entity.other.attribute-name.html",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "Unimplemented",
      "scope": "invalid.unimplemented",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Property Name",
      "scope": "support.type.property-name.json",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      "scope": "support.type.property-name.json punctuation",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "laravel blade tag",
      "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "laravel blade @",
      "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "use statement for other classes",
      "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "error suppression",
      "scope": "keyword.operator.error-control.php",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "php instanceof",
      "scope": "keyword.operator.type.php",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "style double quoted array index normal begin",
      "scope": "punctuation.section.array.begin.php",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "style double quoted array index normal end",
      "scope": "punctuation.section.array.end.php",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "php illegal.non-null-typehinted",
      "scope": "invalid.illegal.non-null-typehinted.php",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "name": "php types",
      "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "php call-function",
      "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "php function-resets",
      "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.core.rust",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "php goto",
      "scope": "entity.name.goto-label.php,support.other.php",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "php logical/bitwise operator",
      "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "php regexp operator",
      "scope": "keyword.operator.regexp.php",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "php comparison",
      "scope": "keyword.operator.comparison.php",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "php heredoc/nowdoc",
      "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "python function decorator @",
      "scope": "meta.function.decorator.python",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "python function support",
      "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "parameter function js/ts",
      "scope": "function.parameter",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "brace function",
      "scope": "function.brace",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "parameter function ruby cs",
      "scope": "function.parameter.ruby, function.parameter.cs",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "constant.language.symbol.ruby",
      "scope": "constant.language.symbol.ruby",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "constant.language.symbol.hashkey.ruby",
      "scope": "constant.language.symbol.hashkey.ruby",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "rgb-value",
      "scope": "rgb-value",
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "rgb value",
      "scope": "inline-color-decoration rgb-value",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "rgb value less",
      "scope": "less rgb-value",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "sass selector",
      "scope": "selector.sass",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "ts primitive/builtin types",
      "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "block scope",
      "scope": "block.scope.end,block.scope.begin",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "cs storage type",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "cs local variable",
      "scope": "entity.name.variable.local.cs",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "scope": "token.info-token",
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "scope": "token.warn-token",
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "scope": "token.error-token",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "scope": "token.debug-token",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "String interpolation",
      "scope": [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      "scope": [
        "meta.template.expression"
      ],
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Import module JS",
      "scope": [
        "keyword.operator.module"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "js Flowtype",
      "scope": [
        "support.type.type.flowtype"
      ],
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "js Flow",
      "scope": [
        "support.type.primitive"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "js class prop",
      "scope": [
        "meta.property.object"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "js func parameter",
      "scope": [
        "variable.parameter.function.js"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "js template literals begin",
      "scope": [
        "keyword.other.template.begin"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "js template literals end",
      "scope": [
        "keyword.other.template.end"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "js template literals variable braces begin",
      "scope": [
        "keyword.other.substitution.begin"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "js template literals variable braces end",
      "scope": [
        "keyword.other.substitution.end"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "js operator.assignment",
      "scope": [
        "keyword.operator.assignment"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.assignment.go"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.arithmetic.go",
        "keyword.operator.address.go"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "Go package name",
      "scope": [
        "entity.name.package.go"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "elm prelude",
      "scope": [
        "support.type.prelude.elm"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "elm constant",
      "scope": [
        "support.constant.elm"
      ],
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "template literal",
      "scope": [
        "punctuation.quasi.element"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "html/pug (jade) escaped characters and entities",
      "scope": [
        "constant.character.entity"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      "scope": [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "Clojure globals",
      "scope": [
        "entity.global.clojure"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Clojure symbols",
      "scope": [
        "meta.symbol.clojure"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Clojure constants",
      "scope": [
        "constant.keyword.clojure"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "CoffeeScript Function Argument",
      "scope": [
        "meta.arguments.coffee",
        "variable.parameter.function.coffee"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Ini Default Text",
      "scope": [
        "source.ini"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "Makefile prerequisities",
      "scope": [
        "meta.scope.prerequisites.makefile"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Makefile text colour",
      "scope": [
        "source.makefile"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Groovy import names",
      "scope": [
        "storage.modifier.import.groovy"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Groovy Methods",
      "scope": [
        "meta.method.groovy"
      ],
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "Groovy Variables",
      "scope": [
        "meta.definition.variable.name.groovy"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Groovy Inheritance",
      "scope": [
        "meta.definition.class.inherited.classes.groovy"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "HLSL Semantic",
      "scope": [
        "support.variable.semantic.hlsl"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "HLSL Types",
      "scope": [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "SQL Variables",
      "scope": [
        "text.variable",
        "text.bracketed"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "types",
      "scope": [
        "support.type.swift",
        "support.type.vb.asp"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "heading 1, keyword",
      "scope": [
        "entity.name.function.xi"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "heading 2, callable",
      "scope": [
        "entity.name.class.xi"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "heading 3, property",
      "scope": [
        "constant.character.character-class.regexp.xi"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "heading 4, type, class, interface",
      "scope": [
        "constant.regexp.xi"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "name": "heading 5, enums, preprocessor, constant, decorator",
      "scope": [
        "keyword.control.xi"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "name": "heading 6, number",
      "scope": [
        "invalid.xi"
      ],
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "string",
      "scope": [
        "beginning.punctuation.definition.quote.markdown.xi"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "comments",
      "scope": [
        "beginning.punctuation.definition.list.markdown.xi"
      ],
      "settings": {
        fontStyle: options.italicComments ? "italic" : "",
        "foreground": palette.subtext1
      }
    },
    {
      "name": "link",
      "scope": [
        "constant.character.xi"
      ],
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "accent",
      "scope": [
        "accent.xi"
      ],
      "settings": {
        "foreground": palette.sapphire
      }
    },
    {
      "name": "wikiword",
      "scope": [
        "wikiword.xi"
      ],
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "name": "language operators like '+', '-' etc",
      "scope": [
        "constant.other.color.rgb-value.xi"
      ],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "elements to dim",
      "scope": [
        "punctuation.definition.tag.xi"
      ],
      "settings": {
        "foreground": palette.subtext0
      }
    },
    {
      "name": "C++/C#",
      "scope": [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "Markdown underscore-style headers",
      "scope": [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "meta.brace.square",
      "scope": [
        " meta.brace.square"
      ],
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Comments",
      "scope": "comment, punctuation.definition.comment",
      "settings": {
        fontStyle: options.italicComments ? "italic" : "",
        "foreground": palette.subtext1
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Quote",
      "scope": "markup.quote.markdown",
      "settings": {
        "foreground": palette.subtext0
      }
    },
    {
      "name": "punctuation.definition.block.sequence.item.yaml",
      "scope": "punctuation.definition.block.sequence.item.yaml",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "scope": [
        "constant.language.symbol.elixir",
        "constant.language.symbol.double-quoted.elixir"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "scope": [
        "entity.name.variable.parameter.cs"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "scope": [
        "entity.name.variable.field.cs"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Deleted",
      "scope": "markup.deleted",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "Inserted",
      "scope": "markup.inserted",
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "name": "Underline",
      "scope": "markup.underline",
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "name": "punctuation.section.embedded.begin.php",
      "scope": [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "support.other.namespace.php",
      "scope": [
        "support.other.namespace.php"
      ],
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "variable.other.object",
      "scope": [
        "variable.other.object"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "variable.other.constant.property",
      "scope": [
        "variable.other.constant.property"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "entity.other.inherited-class",
      "scope": [
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "name": "c variable readwrite",
      "scope": "variable.other.readwrite.c",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "php scope",
      "scope": "entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",
      "settings": {
        "foreground": palette.subtext1
      }
    },
    {
      "name": "Assembly",
      "scope": [
        "constant.numeric.decimal.asm.x86_64"
      ],
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "scope": [
        "support.other.parenthesis.regexp"
      ],
      "settings": {
        "foreground": palette.peach
      }
    },
    {
      "scope": [
        "constant.character.escape"
      ],
      "settings": {
        "foreground": palette.teal
      }
    },
    {
      "scope": [
        "string.regexp"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "scope": [
        "log.info"
      ],
      "settings": {
        "foreground": palette.green
      }
    },
    {
      "scope": [
        "log.warning"
      ],
      "settings": {
        "foreground": palette.yellow
      }
    },
    {
      "scope": [
        "log.error"
      ],
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "scope": "keyword.operator.expression.is",
      "settings": {
        "foreground": palette.mauve
      }
    },
    {
      "scope": "entity.name.label",
      "settings": {
        "foreground": palette.red
      }
    },
    {
      "name": "js/ts italic",
      "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "comment",
      "scope": "comment.line.double-slash,comment.block.documentation",
      "settings": {
        fontStyle: options.italicComments ? "italic" : ""
      }
    },
    {
      "name": "Python Keyword Control",
      "scope": "keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup.italic.markdown",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic"
      }
    }
  ];
};

// src/theme/ms/tokenColors.ts
var getTokenColors4 = (context) => {
  const { palette, options } = context;
  return [
    // VISUAL STUDIO DARK
    {
      scope: [
        "meta.embedded",
        "source.groovy.embedded",
        "string meta.image.inline.markdown"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: "emphasis",
      settings: {
        "fontStyle": "italic"
      }
    },
    {
      scope: "strong",
      settings: {
        "fontStyle": "bold"
      }
    },
    {
      scope: "header",
      settings: {
        foreground: "#000080"
      }
    },
    {
      scope: "comment",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.green
      }
    },
    {
      scope: "constant.language",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: [
        "constant.numeric",
        "variable.other.enummember",
        "keyword.operator.plus.exponent",
        "keyword.operator.minus.exponent"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.other.attribute-name.scss"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "invalid",
      settings: {
        foreground: palette.red
      }
    },
    {
      scope: "markup.underline",
      settings: {
        "fontStyle": "underline"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        "fontStyle": "bold",
        foreground: palette.blue
      }
    },
    {
      scope: "markup.heading",
      settings: {
        "fontStyle": "bold",
        foreground: palette.blue
      }
    },
    {
      scope: "markup.italic",
      settings: {
        "fontStyle": "italic"
      }
    },
    {
      scope: "markup.strikethrough",
      settings: {
        "fontStyle": "strikethrough"
      }
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: palette.peach
      }
    },
    {
      "name": "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: palette.subtext0
      }
    },
    {
      scope: [
        "meta.preprocessor",
        "entity.name.function.preprocessor"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "storage",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: [
        "storage.modifier",
        "keyword.operator.noexcept"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: [
        "string",
        "meta.embedded.assembly"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.tag",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.value",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: palette.red
      }
    },
    {
      "name": "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      scope: [
        "meta.template.expression"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name",
        "variable.css",
        "variable.scss",
        "variable.other.less",
        "source.coffee.embedded"
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "keyword",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.control",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.alignof",
        "keyword.operator.typeid",
        "keyword.operator.alignas",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python",
        "keyword.operator.wordlike"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "coloring of the Java import and package identifiers",
      scope: [
        "storage.modifier.import.java",
        "variable.language.wildcard.java",
        "storage.modifier.package.java"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      "name": "this.self",
      scope: "variable.language",
      settings: {
        foreground: palette.blue
      }
    },
    // DARK PLUS
    {
      "name": "Function declarations",
      scope: [
        "entity.name.function",
        "support.function",
        "support.constant.handlebars",
        "source.powershell variable.other.member",
        "entity.name.operator.custom-literal"
        // See https://en.cppreference.com/w/cpp/language/user_literal
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      "name": "Types declaration and references",
      scope: [
        "support.class",
        "support.type",
        "entity.name.type",
        "entity.name.namespace",
        "entity.other.attribute",
        "entity.name.scope-resolution",
        "entity.name.class",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "Types declaration and references, TS grammar specific",
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "Control flow / Special keywords",
      scope: [
        "keyword.control",
        "source.cpp keyword.operator.new",
        "keyword.operator.delete",
        "keyword.other.using",
        "keyword.other.operator",
        "entity.name.operator"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.pink
      }
    },
    {
      "name": "Variable and parameter name",
      scope: [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable",
        "constant.other.placeholder"
        // placeholders in strings
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      "name": "Constants and enums",
      scope: [
        "variable.other.constant",
        "variable.other.enummember"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      "name": "Object keys, TS grammar specific",
      scope: [
        "meta.object-literal.key"
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      "name": "CSS property value",
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "support.constant.color"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      "name": "Regular expression groups",
      scope: [
        "punctuation.definition.group.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "keyword.operator.negation.regexp",
        "support.other.parenthesis.regexp"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "constant.other.character-class.regexp",
        "constant.character.set.regexp"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      scope: [
        "keyword.operator.or.regexp",
        "keyword.control.anchor.regexp"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "constant.character",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "entity.name.label",
      settings: {
        foreground: palette.text
      }
    },
    // VISUAL STUDIO 2019 DARK
    {
      "name": "Control flow / Special keywords",
      scope: [
        "keyword.control",
        "keyword.other.using",
        "keyword.other.operator",
        "entity.name.operator"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.pink
      }
    },
    {
      scope: [
        "keyword.control.directive",
        "variable.parameter",
        "entity.other.attribute-name.pragma.preprocessor.cpp"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      scope: [
        "meta.preprocessor",
        "entity.name.namespace",
        "variable.other.global",
        "variable.other.constant",
        "entity.name.scope-resolution"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: "variable.other.property",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "punctuation",
        "storage.modifier.pointer",
        "storage.modifier.reference",
        "keyword.operator",
        "entity.name.function.operator",
        "keyword.other.operator.overload.cpp",
        "entity.name.operator.cpp",
        "entity.name.operator.type.reference.cpp",
        "entity.name.operator.type.pointer.cpp"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      scope: [
        "comment",
        "punctuation.definition.comment"
      ],
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.green
      }
    },
    {
      scope: "punctuation.definition.string",
      settings: {
        foreground: palette.flamingo
      }
    },
    {
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: palette.lavender
      }
    },
    {
      scope: [
        "keyword.other.using",
        "keyword.operator.new",
        "keyword.operator.new.cpp",
        "keyword.operator.delete.cpp"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "punctuation.support.type.property-name",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "variable.other.enummember",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.yellow
      }
    }
  ];
};

// src/theme/tokenColorsCommon.ts
var getTokenColors5 = (context) => {
  const { palette, options } = context;
  if (options.syntaxMode == "monokai") {
    return getTokenColors2(context);
  } else if (options.syntaxMode == "dark-one") {
    return getTokenColors3(context);
  } else if (options.syntaxMode == "ms") {
    return getTokenColors4(context);
  } else {
    return getTokenColors(context);
  }
};

// src/theme/utils.ts
var capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.substring(1);
};
var opacity = (color, opacity2) => {
  opacity2 = Math.floor(255 * opacity2);
  color = color.replace(`#`, ``);
  if (color.length === 6) {
    return `#${color}${opacity2.toString(16)}`;
  } else {
    return color;
  }
};
var shade = (color, magnitude) => {
  magnitude = Math.round(magnitude * 100);
  color = color.replace(`#`, ``);
  if (color.length === 6) {
    const decimalColor = parseInt(color, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 255) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = (decimalColor >> 8 & 255) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | b << 8 | r << 16).toString(16)}`;
  } else {
    return color;
  }
};
var transparent = "#00000000";

// src/theme/extensions/error-lens.ts
function colors(context) {
  const { palette } = context;
  return {
    "errorLens.errorBackground": opacity(palette.red, 0.15),
    "errorLens.errorMessageBackground": opacity(palette.red, 0.15),
    "errorLens.errorBackgroundLight": opacity(palette.red, 0.15),
    "errorLens.errorForeground": palette.red,
    "errorLens.errorForegroundLight": palette.red,
    "errorLens.warningBackground": opacity(palette.peach, 0.15),
    "errorLens.warningMessageBackground": opacity(palette.peach, 0.15),
    "errorLens.warningBackgroundLight": opacity(palette.peach, 0.15),
    "errorLens.warningForeground": palette.peach,
    "errorLens.warningForegroundLight": palette.peach,
    "errorLens.infoBackground": opacity(palette.blue, 0.15),
    "errorLens.infoMessageBackground": opacity(palette.blue, 0.15),
    "errorLens.infoBackgroundLight": opacity(palette.blue, 0.15),
    "errorLens.infoForeground": palette.blue,
    "errorLens.infoForegroundLight": palette.blue,
    "errorLens.hintBackground": opacity(palette.green, 0.15),
    "errorLens.hintMessageBackground": opacity(palette.green, 0.15),
    "errorLens.hintBackgroundLight": opacity(palette.green, 0.15),
    "errorLens.hintForeground": palette.green,
    "errorLens.hintForegroundLight": palette.green,
    "errorLens.statusBarIconErrorForeground": palette.red,
    "errorLens.statusBarIconWarningForeground": palette.peach,
    "errorLens.statusBarErrorForeground": palette.red,
    "errorLens.statusBarWarningForeground": palette.peach,
    "errorLens.statusBarInfoForeground": palette.blue,
    "errorLens.statusBarHintForeground": palette.green
  };
}

// src/theme/extensions/index.ts
function extensions_default(context) {
  return {
    ...colors(context)
  };
}

// src/theme/uiColors.ts
var getCustomizedColors = (context) => {
  const { palette, options, isLatte } = context;
  const L = isLatte ? -1 : 1;
  const bracketsMap = {
    rainbow: {
      "editorBracketHighlight.foreground1": palette.red,
      "editorBracketHighlight.foreground2": palette.peach,
      "editorBracketHighlight.foreground3": palette.yellow,
      "editorBracketHighlight.foreground4": palette.green,
      "editorBracketHighlight.foreground5": palette.sapphire,
      "editorBracketHighlight.foreground6": palette.mauve,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon
    },
    dimmed: {
      "editorBracketHighlight.foreground1": shade(palette.red, -0.6 * L),
      "editorBracketHighlight.foreground2": shade(palette.peach, -0.6 * L),
      "editorBracketHighlight.foreground3": shade(palette.yellow, -0.6 * L),
      "editorBracketHighlight.foreground4": shade(palette.green, -0.6 * L),
      "editorBracketHighlight.foreground5": shade(palette.sapphire, -0.6 * L),
      "editorBracketHighlight.foreground6": shade(palette.mauve, -0.6 * L),
      "editorBracketHighlight.unexpectedBracket.foreground": shade(
        palette.maroon,
        -0.6 * L
      )
    },
    monochromatic: {
      "editorBracketHighlight.foreground1": palette.subtext1,
      "editorBracketHighlight.foreground2": palette.subtext0,
      "editorBracketHighlight.foreground3": palette.overlay2,
      "editorBracketHighlight.foreground4": palette.overlay1,
      "editorBracketHighlight.foreground5": palette.overlay0,
      "editorBracketHighlight.foreground6": palette.surface2,
      "editorBracketHighlight.unexpectedbracket.foreground": palette.maroon
    },
    neovim: {
      "editorBracketHighlight.foreground1": palette.red,
      "editorBracketHighlight.foreground2": palette.teal,
      "editorBracketHighlight.foreground3": palette.yellow,
      "editorBracketHighlight.foreground4": palette.blue,
      "editorBracketHighlight.foreground5": palette.pink,
      "editorBracketHighlight.foreground6": palette.flamingo,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon
    }
  };
  const workbenchMap = {
    default: {},
    flat: {
      "activityBar.background": palette.mantle,
      "breadcrumb.background": palette.base,
      "commandCenter.background": palette.mantle,
      "debugToolBar.background": palette.mantle,
      "editorGroupHeader.tabsBackground": palette.mantle,
      "minimap.background": opacity(palette.base, 0.5),
      "sideBarTitle.background": palette.mantle,
      "statusBar.background": palette.mantle,
      "statusBar.noFolderBackground": palette.mantle,
      "tab.border": palette.base,
      "titleBar.activeBackground": palette.mantle,
      "titleBar.inactiveBackground": palette.mantle,
      "scrollbar.shadow": palette.mantle
    }
  };
  return {
    ...bracketsMap[options.bracketMode],
    ...workbenchMap[options.workbenchMode]
  };
};
var getUiColors = (context) => {
  const { palette, options, isLatte } = context;
  const accent = palette[options.accent];
  const dropBackground = opacity(palette.surface2, 0.6);
  const border = options.extraBordersEnabled ? opacity(palette.overlay1, 0.15) : transparent;
  const customNamedColors = {
    ...Object.entries({
      // collect the options, overwrite the "all" config with the current palette config
      ...options.customUIColors.all,
      ...options.customUIColors[palette.name]
    }).map(([k, v]) => {
      if (v.startsWith("accent")) {
        const entry2 = v.split(" ");
        if (entry2.length !== 1) {
          return {
            [k]: opacity(accent, Number(entry2[1]))
          };
        } else {
          return {
            [k]: accent
          };
        }
      }
      const entry = v.split(" ");
      if (entry.length !== 1) {
        v = opacity(palette[entry[0]], Number(entry[1]));
      } else {
        v = palette[v];
      }
      return {
        [k]: v
      };
    }).reduce((prev, cur) => ({ ...prev, ...cur }), {})
  };
  return {
    // Base colors
    focusBorder: transparent,
    foreground: palette.text,
    disabledForeground: palette.subtext0,
    "widget.shadow": opacity(palette.mantle, 0.5),
    "selection.background": palette.surface2,
    descriptionForeground: palette.text,
    errorForeground: palette.red,
    "icon.foreground": accent,
    "sash.hoverBorder": accent,
    // Window border
    "window.activeBorder": transparent,
    "window.inactiveBorder": transparent,
    // Text colors
    "textBlockQuote.background": palette.mantle,
    "textBlockQuote.border": palette.crust,
    "textCodeBlock.background": palette.base,
    "textLink.activeForeground": palette.sky,
    "textLink.foreground": palette.blue,
    "textPreformat.foreground": palette.text,
    "textSeparator.foreground": accent,
    // Activity Bar
    "activityBar.background": palette.crust,
    "activityBar.foreground": accent,
    "activityBar.dropBar": dropBackground,
    "activityBar.inactiveForeground": palette.overlay0,
    "activityBar.border": border,
    "activityBarBadge.background": accent,
    "activityBarBadge.foreground": palette.crust,
    "activityBar.activeBorder": transparent,
    "activityBar.activeBackground": transparent,
    "activityBar.activeFocusBorder": transparent,
    "badge.background": palette.surface1,
    "badge.foreground": palette.text,
    "breadcrumb.activeSelectionForeground": accent,
    "breadcrumb.background": palette.mantle,
    "breadcrumb.focusForeground": accent,
    "breadcrumb.foreground": opacity(palette.text, 0.8),
    "breadcrumbPicker.background": palette.mantle,
    // buttons & checkboxes
    "button.background": accent,
    "button.foreground": palette.crust,
    "button.border": transparent,
    "button.separator": transparent,
    "button.hoverBackground": shade(accent, 0.2),
    "button.secondaryForeground": palette.text,
    "button.secondaryBackground": palette.surface2,
    "button.secondaryHoverBackground": shade(palette.surface2, 0.2),
    "checkbox.background": palette.surface1,
    "checkbox.border": border,
    "checkbox.foreground": accent,
    // dropdown controls
    "dropdown.background": palette.mantle,
    "dropdown.listBackground": palette.surface2,
    "dropdown.border": accent,
    "dropdown.foreground": palette.text,
    // debug
    "debugToolBar.background": palette.crust,
    "debugToolBar.border": transparent,
    "debugExceptionWidget.background": palette.crust,
    "debugExceptionWidget.border": accent,
    "debugTokenExpression.number": palette.peach,
    "debugTokenExpression.boolean": palette.mauve,
    "debugTokenExpression.string": palette.green,
    "debugTokenExpression.error": palette.red,
    // debug icons
    "debugIcon.breakpointForeground": palette.red,
    "debugIcon.breakpointDisabledForeground": opacity(palette.red, 0.6),
    "debugIcon.breakpointUnverifiedForeground": palette.base,
    "debugIcon.breakpointCurrentStackframeForeground": palette.surface2,
    "debugIcon.breakpointStackframeForeground": palette.surface2,
    "debugIcon.startForeground": palette.green,
    "debugIcon.pauseForeground": palette.blue,
    "debugIcon.stopForeground": palette.red,
    "debugIcon.disconnectForeground": palette.surface2,
    "debugIcon.restartForeground": palette.teal,
    "debugIcon.stepOverForeground": palette.mauve,
    "debugIcon.stepIntoForeground": palette.text,
    "debugIcon.stepOutForeground": palette.text,
    "debugIcon.continueForeground": palette.green,
    "debugIcon.stepBackForeground": palette.surface2,
    "debugConsole.infoForeground": palette.blue,
    "debugConsole.warningForeground": palette.peach,
    "debugConsole.errorForeground": palette.red,
    "debugConsole.sourceForeground": palette.rosewater,
    "debugConsoleInputIcon.foreground": palette.text,
    "diffEditor.border": palette.surface2,
    "diffEditor.insertedTextBackground": opacity(palette.green, 0.1),
    "diffEditor.removedTextBackground": opacity(palette.red, 0.1),
    "diffEditor.insertedLineBackground": opacity(palette.green, 0.15),
    "diffEditor.removedLineBackground": opacity(palette.red, 0.15),
    "diffEditor.diagonalFill": opacity(palette.surface2, 0.6),
    "diffEditorOverview.insertedForeground": opacity(palette.green, 0.8),
    "diffEditorOverview.removedForeground": opacity(palette.red, 0.8),
    "editor.background": palette.base,
    "editor.findMatchBackground": palette.surface2,
    "editor.findMatchBorder": opacity(accent, 0.4),
    "editor.findMatchHighlightBackground": opacity(palette.peach, 0.35),
    "editor.findMatchHighlightBorder": transparent,
    "editor.findRangeHighlightBackground": opacity(palette.surface2, 0.3),
    "editor.findRangeHighlightBorder": transparent,
    "editor.foldBackground": opacity(palette.sky, 0.25),
    "editor.foreground": palette.text,
    "editor.hoverHighlightBackground": opacity(palette.sky, 0.25),
    "editor.inactiveSelectionBackground": transparent,
    "editor.lineHighlightBackground": opacity(palette.text, 0.07),
    "editor.lineHighlightBorder": palette.base,
    "editor.rangeHighlightBackground": opacity(palette.sky, 0.25),
    "editor.rangeHighlightBorder": transparent,
    "editor.selectionBackground": palette.surface2,
    "editor.selectionHighlightBackground": opacity(palette.overlay2, 0.4),
    "editor.selectionHighlightBorder": opacity(palette.sky, 0.2),
    "editor.wordHighlightBackground": opacity(palette.surface2, 0.7),
    "editor.wordHighlightStrongBackground": opacity(palette.surface2, 0.5),
    "editorBracketMatch.background": opacity(palette.overlay2, 0.1),
    "editorBracketMatch.border": palette.overlay2,
    "editorCodeLens.foreground": palette.overlay1,
    "editorCursor.background": palette.base,
    "editorCursor.foreground": palette.rosewater,
    "editorError.background": transparent,
    "editorError.border": transparent,
    "editorError.foreground": palette.red,
    "editorGroup.border": palette.surface2,
    "editorGroup.dropBackground": dropBackground,
    "editorGroup.emptyBackground": palette.base,
    "editorGroupHeader.tabsBackground": palette.crust,
    "editorGutter.addedBackground": palette.green,
    "editorGutter.background": palette.base,
    "editorGutter.commentRangeForeground": palette.overlay2,
    "editorGutter.deletedBackground": palette.red,
    "editorGutter.foldingControlForeground": palette.overlay2,
    "editorGutter.modifiedBackground": palette.sky,
    "editorHoverWidget.background": palette.mantle,
    "editorHoverWidget.border": palette.surface2,
    "editorHoverWidget.foreground": palette.text,
    "editorIndentGuide.activeBackground": palette.surface2,
    "editorIndentGuide.background": palette.surface1,
    "editorInfo.background": transparent,
    "editorInfo.border": transparent,
    "editorInfo.foreground": palette.blue,
    "editorInlayHint.foreground": palette.surface2,
    "editorInlayHint.background": opacity(palette.mantle, 0.75),
    "editorInlayHint.typeForeground": palette.subtext1,
    "editorInlayHint.typeBackground": opacity(palette.mantle, 0.75),
    "editorInlayHint.parameterForeground": palette.subtext0,
    "editorInlayHint.parameterBackground": opacity(palette.mantle, 0.75),
    "editorLineNumber.activeForeground": accent,
    "editorLineNumber.foreground": palette.overlay1,
    "editorLink.activeForeground": accent,
    "editorMarkerNavigation.background": palette.mantle,
    "editorMarkerNavigationError.background": palette.red,
    "editorMarkerNavigationInfo.background": palette.blue,
    "editorMarkerNavigationWarning.background": palette.yellow,
    "editorOverviewRuler.background": palette.mantle,
    "editorOverviewRuler.border": opacity(palette.text, 0.07),
    "editorRuler.foreground": palette.surface2,
    // breakpoints
    "editor.stackFrameHighlightBackground": opacity(palette.yellow, 0.15),
    "editor.focusedStackFrameHighlightBackground": opacity(palette.green, 0.15),
    "editorStickyScrollHover.background": palette.surface0,
    "editorSuggestWidget.background": palette.mantle,
    "editorSuggestWidget.border": palette.surface2,
    "editorSuggestWidget.foreground": palette.text,
    "editorSuggestWidget.highlightForeground": accent,
    "editorSuggestWidget.selectedBackground": palette.surface0,
    "editorWarning.background": transparent,
    "editorWarning.border": transparent,
    "editorWarning.foreground": palette.peach,
    "editorWhitespace.foreground": opacity(palette.overlay2, 0.4),
    "editorWidget.background": palette.mantle,
    "editorWidget.foreground": palette.text,
    "editorWidget.resizeBorder": palette.surface2,
    "editorLightBulb.foreground": palette.yellow,
    // extensions marketplace
    "extensionButton.prominentForeground": palette.crust,
    "extensionButton.prominentBackground": accent,
    "extensionButton.prominentHoverBackground": shade(accent, 0.2),
    "extensionBadge.remoteBackground": palette.blue,
    "extensionBadge.remoteForeground": palette.crust,
    "extensionIcon.starForeground": palette.yellow,
    "extensionIcon.verifiedForeground": palette.green,
    "extensionIcon.preReleaseForeground": palette.rosewater,
    "extensionIcon.sponsorForeground": palette.pink,
    // git colors
    "gitDecoration.addedResourceForeground": palette.green,
    "gitDecoration.conflictingResourceForeground": palette.mauve,
    "gitDecoration.deletedResourceForeground": palette.red,
    "gitDecoration.ignoredResourceForeground": palette.overlay0,
    "gitDecoration.modifiedResourceForeground": palette.yellow,
    "gitDecoration.stageDeletedResourceForeground": palette.red,
    "gitDecoration.stageModifiedResourceForeground": palette.yellow,
    "gitDecoration.submoduleResourceForeground": palette.blue,
    "gitDecoration.untrackedResourceForeground": palette.green,
    "input.background": palette.surface0,
    "input.border": transparent,
    "input.foreground": palette.text,
    "input.placeholderForeground": opacity(palette.text, 0.45),
    "inputOption.activeBackground": opacity(palette.blue, 0.15),
    "inputOption.activeBorder": opacity(palette.crust, 0.2),
    "inputOption.activeForeground": palette.text,
    "inputValidation.errorBackground": palette.red,
    "inputValidation.errorBorder": opacity(palette.crust, 0.2),
    "inputValidation.errorForeground": palette.crust,
    "inputValidation.infoBackground": palette.blue,
    "inputValidation.infoBorder": opacity(palette.crust, 0.2),
    "inputValidation.infoForeground": palette.crust,
    "inputValidation.warningBackground": palette.peach,
    "inputValidation.warningBorder": opacity(palette.crust, 0.2),
    "inputValidation.warningForeground": palette.crust,
    // Lists and trees
    "list.activeSelectionBackground": palette.surface1,
    // currently selected in file tree
    "list.activeSelectionForeground": palette.text,
    "list.dropBackground": dropBackground,
    "list.focusBackground": palette.surface0,
    // when using keyboard to move around files
    "list.focusForeground": palette.text,
    "list.focusOutline": transparent,
    "list.highlightForeground": accent,
    "list.hoverBackground": isLatte ? palette.surface2 : palette.base,
    // when hovering over the file tree
    "list.hoverForeground": palette.text,
    "list.inactiveSelectionBackground": palette.surface1,
    // currently selected focused in editor
    "list.inactiveSelectionForeground": palette.text,
    "list.warningForeground": palette.yellow,
    "listFilterWidget.background": palette.surface1,
    "listFilterWidget.noMatchesOutline": palette.red,
    "listFilterWidget.outline": transparent,
    "tree.indentGuidesStroke": palette.overlay0,
    "menu.background": palette.base,
    "menu.border": options.extraBordersEnabled ? palette.surface2 : opacity(palette.base, 0.5),
    "menu.foreground": palette.text,
    "menu.selectionBackground": palette.surface2,
    "menu.selectionBorder": transparent,
    "menu.selectionForeground": palette.text,
    "menu.separatorBackground": palette.surface2,
    "menubar.selectionBackground": palette.surface1,
    "menubar.selectionForeground": palette.text,
    "merge.commonContentBackground": palette.surface1,
    "merge.commonHeaderBackground": palette.surface2,
    "merge.currentContentBackground": opacity(palette.green, 0.2),
    "merge.currentHeaderBackground": opacity(palette.green, 0.4),
    "merge.incomingContentBackground": opacity(palette.blue, 0.2),
    "merge.incomingHeaderBackground": opacity(palette.blue, 0.4),
    "minimap.background": opacity(palette.mantle, 0.5),
    "minimap.errorHighlight": palette.red,
    "minimap.findMatchHighlight": palette.surface2,
    "minimap.selectionHighlight": palette.surface2,
    "minimap.warningHighlight": palette.yellow,
    "minimapGutter.addedBackground": palette.green,
    "minimapGutter.deletedBackground": palette.red,
    "minimapGutter.modifiedBackground": palette.sky,
    "notificationCenter.border": accent,
    "notificationCenterHeader.foreground": palette.text,
    "notificationCenterHeader.background": palette.mantle,
    "notificationToast.border": accent,
    "notifications.foreground": palette.text,
    "notifications.background": palette.mantle,
    "notifications.border": accent,
    "notificationLink.foreground": palette.blue,
    "notificationsErrorIcon.foreground": palette.red,
    "notificationsWarningIcon.foreground": palette.peach,
    "notificationsInfoIcon.foreground": palette.blue,
    "panel.background": palette.base,
    "panel.border": palette.surface2,
    "panelSection.border": palette.surface2,
    "panelSection.dropBackground": dropBackground,
    "panelTitle.activeBorder": palette.text,
    "panelTitle.activeForeground": palette.text,
    "panelTitle.inactiveForeground": palette.subtext0,
    "peekView.border": accent,
    "peekViewEditor.background": palette.mantle,
    "peekViewEditor.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewEditor.matchHighlightBorder": palette.peach,
    "peekViewEditorGutter.background": palette.mantle,
    "peekViewResult.background": palette.mantle,
    "peekViewResult.fileForeground": palette.text,
    "peekViewResult.lineForeground": palette.text,
    "peekViewResult.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewResult.selectionBackground": palette.surface0,
    "peekViewResult.selectionForeground": palette.text,
    "peekViewTitle.background": palette.base,
    "peekViewTitleDescription.foreground": opacity(palette.subtext1, 0.7),
    "peekViewTitleLabel.foreground": palette.text,
    "pickerGroup.border": accent,
    "pickerGroup.foreground": accent,
    "progressBar.background": accent,
    "scrollbar.shadow": palette.crust,
    "scrollbarSlider.activeBackground": opacity(palette.surface0, 0.4),
    "scrollbarSlider.background": opacity(palette.surface2, 0.5),
    "scrollbarSlider.hoverBackground": palette.overlay0,
    "settings.focusedRowBackground": opacity(palette.surface2, 0.2),
    "settings.headerForeground": palette.text,
    "settings.modifiedItemIndicator": accent,
    "settings.dropdownBackground": palette.surface1,
    "settings.dropdownListBorder": transparent,
    "settings.textInputBackground": palette.surface1,
    "settings.textInputBorder": transparent,
    "settings.numberInputBackground": palette.surface1,
    "settings.numberInputBorder": transparent,
    "sideBar.background": palette.mantle,
    "sideBar.dropBackground": dropBackground,
    "sideBar.foreground": palette.text,
    "sideBar.border": border,
    "sideBarSectionHeader.background": palette.mantle,
    "sideBarSectionHeader.foreground": palette.text,
    "sideBarTitle.foreground": accent,
    "sideBarTitle.background": palette.crust,
    // Status Bar
    "statusBar.background": palette.crust,
    "statusBar.foreground": palette.text,
    "statusBar.border": border,
    // having no folder open shouldn't change the bar
    "statusBar.noFolderBackground": palette.crust,
    "statusBar.noFolderForeground": palette.text,
    // debugging is peach
    "statusBar.debuggingBackground": palette.peach,
    "statusBar.debuggingForeground": palette.crust,
    // remote is blue
    "statusBarItem.remoteBackground": palette.blue,
    "statusBarItem.remoteForeground": palette.crust,
    // different states
    "statusBarItem.activeBackground": opacity(palette.surface2, 0.4),
    "statusBarItem.hoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.prominentForeground": accent,
    "statusBarItem.prominentBackground": transparent,
    "statusBarItem.prominentHoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.errorForeground": palette.red,
    "statusBarItem.errorBackground": transparent,
    "statusBarItem.warningForeground": palette.peach,
    "statusBarItem.warningBackground": transparent,
    // command center
    "commandCenter.foreground": palette.subtext1,
    "commandCenter.activeForeground": accent,
    "commandCenter.background": palette.crust,
    "commandCenter.activeBackground": opacity(palette.surface2, 0.2),
    "commandCenter.border": accent,
    // Tab Bar
    "tab.activeBackground": palette.base,
    "tab.activeBorder": accent,
    "tab.activeBorderTop": transparent,
    "tab.activeForeground": accent,
    "tab.border": palette.mantle,
    "tab.inactiveBackground": palette.mantle,
    "tab.inactiveForeground": palette.overlay0,
    // Terminal
    "terminal.ansiBlack": palette.overlay0,
    "terminal.ansiBlue": palette.blue,
    "terminal.ansiBrightBlack": palette.overlay1,
    "terminal.ansiBrightBlue": palette.blue,
    "terminal.ansiBrightCyan": palette.sky,
    "terminal.ansiBrightGreen": palette.green,
    "terminal.ansiBrightMagenta": palette.pink,
    "terminal.ansiBrightRed": palette.red,
    "terminal.ansiBrightWhite": palette.text,
    "terminal.ansiBrightYellow": palette.yellow,
    "terminal.ansiCyan": palette.sky,
    "terminal.ansiGreen": palette.green,
    "terminal.ansiMagenta": palette.pink,
    "terminal.ansiRed": palette.red,
    "terminal.ansiWhite": palette.overlay2,
    "terminal.ansiYellow": palette.yellow,
    "terminal.border": palette.surface2,
    "terminal.foreground": palette.text,
    "terminal.dropBackground": dropBackground,
    "terminal.selectionBackground": palette.surface2,
    "terminalCursor.background": palette.base,
    "terminalCursor.foreground": palette.rosewater,
    // title bar
    "titleBar.activeBackground": palette.crust,
    "titleBar.activeForeground": palette.text,
    "titleBar.inactiveBackground": palette.crust,
    "titleBar.inactiveForeground": opacity(palette.text, 0.5),
    "titleBar.border": border,
    // welcome page
    "welcomePage.tileBackground": palette.mantle,
    "welcomePage.progress.background": palette.crust,
    "welcomePage.progress.foreground": accent,
    "walkThrough.embeddedEditorBackground": opacity(palette.base, 0.3),
    // symbols in outline, autocomplete, etc.
    "symbolIcon.textForeground": palette.text,
    "symbolIcon.arrayForeground": palette.peach,
    "symbolIcon.booleanForeground": palette.mauve,
    "symbolIcon.classForeground": palette.yellow,
    "symbolIcon.colorForeground": palette.pink,
    "symbolIcon.constantForeground": palette.peach,
    "symbolIcon.constructorForeground": palette.lavender,
    "symbolIcon.enumeratorForeground": palette.yellow,
    "symbolIcon.enumeratorMemberForeground": palette.yellow,
    "symbolIcon.eventForeground": palette.pink,
    "symbolIcon.fieldForeground": palette.text,
    "symbolIcon.fileForeground": accent,
    "symbolIcon.folderForeground": accent,
    "symbolIcon.functionForeground": palette.blue,
    "symbolIcon.interfaceForeground": palette.yellow,
    "symbolIcon.keyForeground": palette.teal,
    "symbolIcon.keywordForeground": palette.mauve,
    "symbolIcon.methodForeground": palette.blue,
    "symbolIcon.moduleForeground": palette.text,
    "symbolIcon.namespaceForeground": palette.yellow,
    "symbolIcon.nullForeground": palette.maroon,
    "symbolIcon.numberForeground": palette.peach,
    "symbolIcon.objectForeground": palette.yellow,
    "symbolIcon.operatorForeground": palette.teal,
    "symbolIcon.packageForeground": palette.flamingo,
    "symbolIcon.propertyForeground": palette.maroon,
    "symbolIcon.referenceForeground": palette.yellow,
    "symbolIcon.snippetForeground": palette.flamingo,
    "symbolIcon.stringForeground": palette.green,
    "symbolIcon.structForeground": palette.teal,
    "symbolIcon.typeParameterForeground": palette.maroon,
    "symbolIcon.unitForeground": palette.text,
    "symbolIcon.variableForeground": palette.text,
    // chart colors
    "charts.foreground": palette.text,
    "charts.lines": palette.subtext1,
    "charts.red": palette.red,
    "charts.blue": palette.blue,
    "charts.yellow": palette.yellow,
    "charts.orange": palette.peach,
    "charts.green": palette.green,
    "charts.purple": palette.mauve,
    ...extensions_default(context),
    // workbench overrides
    ...getCustomizedColors(context),
    // custom named overrides
    ...customNamedColors
  };
};

// src/theme/index.ts
var defaultOptions = {
  accent: "mauve",
  boldKeywords: true,
  italicComments: true,
  italicKeywords: true,
  colorOverrides: {},
  syntaxMode: "monokai",
  workbenchMode: "default",
  bracketMode: "rainbow",
  extraBordersEnabled: false,
  customUIColors: {}
};
var compileTheme = (flavour = "mocha", options = defaultOptions) => {
  var _a, _b;
  const ctpPalette = Object.entries(variants[flavour]).map(([k, v]) => {
    return {
      [k]: v.hex,
      name: flavour
    };
  }).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  const palette = {
    ...ctpPalette,
    ...(_a = options.colorOverrides) == null ? void 0 : _a.all,
    ...(_b = options.colorOverrides) == null ? void 0 : _b[flavour]
  };
  const context = {
    palette,
    options,
    isLatte: flavour === "latte"
  };
  const flavourName = `Catppuccin Monokai ${capitalize(flavour)}`;
  const theme = {
    name: flavourName,
    type: context.isLatte ? "light" : "dark",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticColors5(context),
    tokenColors: getTokenColors5(context),
    colors: getUiColors(context)
  };
  return theme;
};

// src/utils.ts
var import_vscode = require("vscode");
var import_path2 = require("path");
var Utils = class {
  constructor() {
    this.getConfiguration = () => {
      const conf = import_vscode.workspace.getConfiguration("alt-catppuccin");
      return {
        accent: conf.get("accentColor"),
        syntaxMode: conf.get("syntaxMode"),
        boldKeywords: conf.get("boldKeywords"),
        italicKeywords: conf.get("italicKeywords"),
        italicComments: conf.get("italicComments"),
        colorOverrides: conf.get("colorOverrides"),
        workbenchMode: conf.get("workbenchMode"),
        bracketMode: conf.get("bracketMode"),
        extraBordersEnabled: conf.get("extraBordersEnabled"),
        customUIColors: conf.get("customUIColors")
      };
    };
    this.updateThemes = async (options, paths, trigger) => {
      const flavours = Object.keys(variants);
      const promises = flavours.map(async (flavour) => {
        const theme = compileTheme(flavour, options);
        return this.writeThemeFile(paths[flavour], theme);
      });
      Promise.all(promises).then(() => {
        this.promptToReload(trigger);
      });
    };
  }
  promptToReload(trigger) {
    const msg = `Catppuccin Monokai: ${trigger} - Reload required.`;
    const action = "Reload window";
    import_vscode.window.showInformationMessage(msg, action).then((selectedAction) => {
      if (selectedAction === action) {
        import_vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    });
  }
  writeThemeFile(path, data) {
    return fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        import_vscode.window.showErrorMessage(err.message);
      }
    });
  }
  isFreshInstall() {
    console.log("Checking if Catppuccin Monokai is installed for the first time.");
    const flagPath = (0, import_path2.join)(__dirname, "..", "themes", ".flag");
    if (fs.existsSync(flagPath)) {
      console.log("Catppuccin Monokai is installed for the first time!");
      return false;
    } else {
      console.log("Catppuccin Monokai has been installed before.");
      fs.writeFileSync(flagPath, "");
      return true;
    }
  }
  isDefaultConfig() {
    console.log("Checking if Catppuccin Monokai is using default config.");
    const state = this.getConfiguration() === defaultOptions;
    console.log(`Catppuccin Monokai is using ${state ? "default" : "custom"} config.`);
    return state;
  }
};
var utils_default = new Utils();

// src/main.ts
var activate = () => {
  const paths = getThemePaths();
  if (utils_default.isFreshInstall() && !utils_default.isDefaultConfig()) {
    utils_default.updateThemes(
      utils_default.getConfiguration(),
      paths,
      "Update detected" /* FRESH_INSTALL */
    );
  }
  import_vscode2.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("workbench.colorTheme") && import_vscode2.extensions.getExtension("catppuccin.catppuccin-vsc-icons")) {
      const theme = import_vscode2.workspace.getConfiguration("workbench").get("colorTheme");
      const ctp_themes = {
        "Catppuccin Monokai Latte": "alt-catppuccin-latte",
        "Catppuccin Monokai Frapp\xE9": "alt-catppuccin-frappe",
        "Catppuccin Monokai Macchiato": "alt-catppuccin-macchiato",
        "Catppuccin Monokai Mocha": "alt-catppuccin-mocha"
      };
      if (Object.keys(ctp_themes).includes(theme)) {
        import_vscode2.workspace.getConfiguration("workbench").update("iconTheme", ctp_themes[theme], true);
      }
    }
    if (event.affectsConfiguration("alt-catppuccin")) {
      utils_default.updateThemes(
        utils_default.getConfiguration(),
        paths,
        "Configuration changed" /* CONFIG_CHANGE */
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
//# sourceMappingURL=main.js.map