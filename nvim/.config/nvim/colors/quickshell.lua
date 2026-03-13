local palette = require("palette").load()

local function get(key, fallback)
    return palette[key] or fallback
end

-- sensible fallbacks if a key is missing
local bg = get("background", "#0f1417")
local fg = get("onBackground", "#dfe3e7")
local surf = get("surface", "#0f1417")
local surfC = get("surfaceContainer", "#1b2023")
local surfCL = get("surfaceContainerLow", "#171c1f")
local surfCH = get("surfaceContainerHigh", "#262b2e")
local surfCB = get("surfaceBright", "#353a3d")
local onSurf = get("onSurface", "#dfe3e7")
local onSurfVar = get("onSurfaceVariant", "#c0c7cd")
local primary = get("primary", "#8dcff2")
local onPrimary = get("onPrimary", "#003548")
local secondary = get("secondary", "#b5cad7")
local tertiary = get("tertiary", "#c8c2ea")
local outline = get("outline", "#8a9297")
local errorc = get("error", "#ffb4ab")
local success = get("success", "#b5ccba")

vim.g.colors_name = "quickshell"
vim.o.termguicolors = true

-- terminal 16-color palette
for i = 0, 15 do
    local key = "term" .. i
    if palette[key] then
        vim.g["terminal_color_" .. i] = palette[key]
    end
end

local function hl(name, spec)
    vim.api.nvim_set_hl(0, name, spec)
end

-- core UI
hl("Normal", { fg = fg, bg = bg })
hl("NormalNC", { fg = fg, bg = bg })
hl("SignColumn", { fg = onSurfVar, bg = bg })
hl("CursorLine", { bg = surfCL })
hl("ColorColumn", { bg = surfCH })
hl("LineNr", { fg = outline })
hl("CursorLineNr", { fg = primary, bold = true })
hl("WinSeparator", { fg = surfCB })
hl("StatusLine", { fg = onSurf, bg = surfC })
hl("StatusLineNC", { fg = onSurfVar, bg = surf })
hl("TabLine", { fg = onSurfVar, bg = surfC })
hl("TabLineSel", { fg = onPrimary, bg = primary, bold = true })
hl("TabLineFill", { bg = surf })
hl("Visual", { bg = surfCH })
hl("Search", { fg = onPrimary, bg = primary, bold = true })
hl("IncSearch", { fg = onPrimary, bg = primary, reverse = true })
hl("MatchParen", { fg = primary, bold = true })
hl("Pmenu", { fg = onSurf, bg = surfC, blend = 0 })
hl("PmenuSel", { fg = onPrimary, bg = primary })
hl("PmenuThumb", { bg = surfCB })
hl("VertSplit", { fg = surfCB })

-- diagnostics
hl("Error", { fg = errorc })
hl("Warning", { fg = "#f2cc60" })
hl("Info", { fg = primary })
hl("Hint", { fg = secondary })
hl("DiagnosticError", { fg = errorc })
hl("DiagnosticWarn", { fg = "#f2cc60" })
hl("DiagnosticInfo", { fg = primary })
hl("DiagnosticHint", { fg = secondary })
hl("DiagnosticUnderlineError", { undercurl = true, sp = errorc })
hl("DiagnosticUnderlineWarn", { undercurl = true, sp = "#f2cc60" })
hl("DiagnosticUnderlineInfo", { undercurl = true, sp = primary })
hl("DiagnosticUnderlineHint", { undercurl = true, sp = secondary })

-- editor syntax (treesitter links will usually follow)
hl("Comment", { fg = onSurfVar, italic = true })
hl("String", { fg = tertiary })
hl("Number", { fg = tertiary })
hl("Boolean", { fg = tertiary })
hl("Constant", { fg = tertiary })
hl("Identifier", { fg = fg })
hl("Function", { fg = primary, bold = true })
hl("Statement", { fg = secondary })
hl("Keyword", { fg = secondary, italic = true })
hl("Operator", { fg = onSurf })
hl("Type", { fg = secondary })
hl("PreProc", { fg = primary })
hl("Special", { fg = primary })
hl("Todo", { fg = onPrimary, bg = primary, bold = true })
hl("ErrorMsg", { fg = onPrimary, bg = errorc, bold = true })
hl("WarningMsg", { fg = "#1f1f1f", bg = "#f2cc60", bold = true })

-- git/diff
hl("DiffAdd", { fg = success })
hl("DiffChange", { fg = secondary })
hl("DiffDelete", { fg = errorc })
hl("DiffText", { fg = primary, bold = true })
