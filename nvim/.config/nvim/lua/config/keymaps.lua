-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

vim.keymap.set("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "Find Files" })
vim.keymap.set("n", "<leader>fg", "<cmd>Telescope live_grep<cr>", { desc = "Grep" })
vim.keymap.set("n", "<leader>fb", "<cmd>Telescope buffers<cr>", { desc = "Buffers" })
vim.keymap.set("n", "<leader>fh", "<cmd>Telescope help_tags<cr>", { desc = "Help" })
vim.keymap.set("n", "<leader>fw", "<cmd>Telescope live_grep<cr>", { desc = "Grep Word" })

-- This script detects the system theme and adjusts the background in Neovim
_G.detect_system_theme = function()
    local handle, result, theme

    -- Linux (Gnome based environments)
    handle = io.popen("gsettings get org.gnome.desktop.interface color-scheme")
    if handle == nil then
        return
    end
    result = handle:read("*a")
    handle:close()

    if result and result:find("dark") then
        theme = "dark"
    elseif result and result:find("light") then
        theme = "light"
    else
        -- macOS (via AppleScript)
        handle = io.popen(
            [[osascript -e 'tell application "System Events" to tell appearance preferences to get dark mode']]
        )
        if handle == nil then
            return
        end
        result = handle:read("*a")
        handle:close()

        if result and result:find("true") then
            theme = "dark"
        else
            theme = "light"
        end
    end

    return theme
end

_G.apply_theme = function()
    local theme = detect_system_theme()

    if theme == "dark" then
        vim.o.background = "dark"
    elseif theme == "light" then
        vim.o.background = "light"
    end
end

-- Theme reload.
vim.api.nvim_set_keymap("n", "<leader>tr", ":lua apply_theme()<CR>", { noremap = true, silent = true })

-- For init.lua
vim.api.nvim_set_keymap("n", "<leader>h", "<cmd>lua vim.lsp.buf.hover()<CR>", { noremap = true, silent = true })

-- Function to clear diagnostics for the current buffer
_G.clear_diagnostics = function()
    local bufnr = vim.api.nvim_get_current_buf()
    vim.diagnostic.reset(nil, bufnr)
end

-- Keybinding to clear diagnostics
vim.api.nvim_set_keymap("n", "<leader>cd", "<cmd>lua clear_diagnostics()<CR>", { noremap = true, silent = true })

-- UFO folding shortcuts
local ok, ufo = pcall(require, "ufo")
if ok then
    vim.keymap.set("n", "zp", ufo.openAllFolds, { desc = "UFO: open all folds" })
    vim.keymap.set("n", "zf", ufo.closeAllFolds, { desc = "UFO: close all folds" })
end

-- next and previous buffer
vim.api.nvim_set_keymap("n", "<C-Tab>", ":bnext<CR>", { noremap = true, silent = true })
vim.api.nvim_set_keymap("n", "<C-S-Tab>", ":bprevious<CR>", { noremap = true, silent = true })
