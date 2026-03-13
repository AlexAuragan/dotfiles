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

vim.api.nvim_create_autocmd({ "BufNewFile", "BufRead" }, {
    pattern = "*.qml",
    callback = function()
        vim.bo.filetype = "qmljs" -- or "qml"
    end,
})

-- Reload colors when Quickshell regenerates material_colors.scss
local uv = vim.loop
local function state_home()
    return (os.getenv("XDG_STATE_HOME") and #os.getenv("XDG_STATE_HOME") > 0) and os.getenv("XDG_STATE_HOME")
        or (os.getenv("HOME") .. "/.local/state")
end

local scss = state_home() .. "/quickshell/user/generated/material_colors.scss"
local ok, stat = pcall(vim.uv.fs_stat or uv.fs_stat, scss)
if ok and stat then
    local watcher = (vim.uv.new_fs_event or uv.new_fs_event)()
    watcher:start(scss, {}, function(err, _fname, _status)
        if err then
            return
        end
        vim.schedule(function()
            package.loaded["quickshell.palette"] = nil -- force re-read
            pcall(vim.cmd, "colorscheme quickshell")
            vim.notify("Quickshell colors reloaded", vim.log.levels.INFO)
        end)
    end)
end
