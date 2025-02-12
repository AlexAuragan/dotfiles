-- Load general configurations
require('config.options')     -- Loads lua/config/options.lua
require('config.lazy')        -- Loads lua/config/lazy.lua
require('config.keymaps')     -- Loads lua/config/keymaps.lua
require('config.autocmds')    -- Loads lua/config/autocmds.lua

-- Load plugins
require('plugins.plugins')    -- Loads lua/plugins/plugins.lua

-- Load plugin configurations
require('plugins.config.catppuccin') -- Loads lua/plugins/config/catppuccin.lua

