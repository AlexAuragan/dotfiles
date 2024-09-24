-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

local augroup = vim.api.nvim_create_augroup("FileCleanup", { clear = true })

vim.api.nvim_create_autocmd({ "BufWritePre" }, {
    group = augroup,
    pattern = "*",
    callback = function()
        -- Save cursor position
        local cursor_pos = vim.api.nvim_win_get_cursor(0)

        -- Remove trailing whitespace
        vim.cmd([[%s/\s\+$//e]])

        -- Remove trailing newlines, then add exactly one
        vim.cmd([[%s/\n\+\%$//e]])
        vim.cmd([[normal! Go]])
        vim.cmd([[normal! "_dd]])

        -- Restore cursor position
        vim.api.nvim_win_set_cursor(0, cursor_pos)
    end,
})
