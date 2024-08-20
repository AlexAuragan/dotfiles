require "core"

require("custom.autocommands")

local custom_init_path = vim.api.nvim_get_runtime_file("lua/custom/init.lua", false)[1]

if custom_init_path then
  dofile(custom_init_path)
end

require("core.utils").load_mappings()

local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"

-- bootstrap lazy.nvim!
if not vim.loop.fs_stat(lazypath) then
  require("core.bootstrap").gen_chadrc_template()
  require("core.bootstrap").lazy(lazypath)
end

dofile(vim.g.base46_cache .. "defaults")
vim.opt.rtp:prepend(lazypath)
require "plugins"

require("dapui").setup()
require('dap-python').setup('python')

local dap = require("dap")
dap.adapters.python = {
  type = 'executable',
  command = "/home/alexandre/anaconda3/bin/python",  -- use the path variable set earlier
  args = { '-m', 'debugpy.adapter' },
  options = {
    logToFile = true
  }
}


require'nvim-treesitter.configs'.setup {
    ensure_installed = { "json", "python", "markdown" }, -- List of parsers to install
    highlight = {
        enable = true,              -- false will disable the whole extension
        disable = {},               -- list of language that will be disabled
    },
}

require("custom.configs.ufo")
