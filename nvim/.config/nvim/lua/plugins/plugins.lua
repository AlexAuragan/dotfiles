-- since this is just an example spec, don't actually load anything here and return an empty spec
-- stylua: ignore

-- every spec file under the "plugins" directory will be loaded automatically by lazy.nvim
--
-- In your plugin files, you can:
-- * add extra plugins
-- * disable/enabled LazyVim plugins
-- * override the configuration of LazyVim plugins
return {
  -- catppuccin colorscheme
  {
    "catppuccin/nvim",
    name = "catppuccin",
    config = function ()
      require "plugins.config.catppuccin"
      vim.cmd.colorscheme("catppuccin")
    end,
  },
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "catppuccin",
    },
  },
  {
    "goolord/alpha-nvim",
    enabled = false,  -- This disables the default LazyVim dashboard
  },
  -- disable trouble
  {
    "folke/trouble.nvim",
    enabled = false,
    opts = { use_diagnostic_signs = true },
  },

  -- override nvim-cmp and add cmp-emoji
  {
    "hrsh7th/nvim-cmp",
    dependencies = { "hrsh7th/cmp-emoji" },
    ---@param opts cmp.ConfigSchema
    opts = function(_, opts)
      table.insert(opts.sources, { name = "emoji" })
    end,
  },

  -- change some telescope options and a keymap to browse plugin files
  {
    "nvim-telescope/telescope.nvim",
    lazy = false,
    keys = {
      -- add a keymap to browse plugin files
      -- stylua: ignore
      {
        "<leader>fp",
        function() require("telescope.builtin").find_files({ cwd = require("lazy.core.config").options.root }) end,
        desc = "Find Plugin File",
      },
    },
    -- change some options
    opts = {
      defaults = {
        layout_strategy = "horizontal",
        layout_config = { prompt_position = "top" },
        sorting_strategy = "ascending",
        winblend = 0,
      },
    },
  },

  -- add pyright to lspconfig
  {
    "neovim/nvim-lspconfig",
    ---@class PluginLspOpts
    opts = {
      ---@type lspconfig.options
      servers = {
        -- pyright will be automatically installed with mason and loaded with lspconfig
        pyright = {
          on_attach = function(client, bufnr)
            -- Key mapping for hover documentation
            local opts = { noremap=true, silent=true }
            vim.api.nvim_buf_set_keymap(bufnr, 'n', 'K', '<cmd>lua vim.lsp.buf.hover()<CR>', opts)

            -- Customize diagnostics virtual text
            vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
              vim.lsp.diagnostic.on_publish_diagnostics, {
                virtual_text = {
                  prefix = '●', -- Change the prefix if desired
                  spacing = 4,
                  severity_limit = 'Warning', -- Show hints only for warnings and above
                  format = function(diagnostic)
                    return string.format("%s [%s]", diagnostic.message, diagnostic.source)
                  end,
                },
                signs = true,
                underline = true,
                update_in_insert = false,
              }
            )

          end,
        },
        lua_ls = {
          on_attach = function(client, bufnr)
            -- Your custom on_attach logic for lua_ls (if needed)
          end,
          settings = {
            Lua = {
              runtime = {
                version = 'LuaJIT',
              },
              diagnostics = {
                globals = {'vim'},
              },
              workspace = {
                library = vim.api.nvim_get_runtime_file("", true),
              },
              telemetry = {
                enable = false,
              },
            },
          },
          root_dir = function()
            return vim.fn.getcwd() -- Set the root directory to the current working directory
          end,
        },
      },
    },
  },

  -- add more treesitter parsers
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      ensure_installed = {
        "bash",
        "html",
        "javascript",
        "json",
        "lua",
        "markdown",
        "markdown_inline",
        "python",
        "query",
        "regex",
        "tsx",
        "typescript",
        "vim",
        "yaml",
      },
    },
  },

  -- since `vim.tbl_deep_extend`, can only merge tables and not lists, the code above
  -- would overwrite `ensure_installed` with the new value.
  -- If you'd rather extend the default config, use the code below instead:
  {
    "nvim-treesitter/nvim-treesitter",
    opts = function(_, opts)
      -- add tsx and treesitter
      vim.list_extend(opts.ensure_installed, {
        "tsx",
        "typescript",
      })
    end,
  },

  -- the opts function can also be used to change the default opts:
  {
    "nvim-lualine/lualine.nvim",
    event = "VeryLazy",
    opts = function(_, opts)
      table.insert(opts.sections.lualine_x, "😄")
    end,
  },

  -- or you can return new options to override all the defaults
  {
    "nvim-lualine/lualine.nvim",
    event = "VeryLazy",
    opts = function()
      return {
        --[[add your custom lualine config here]]
      }
    end,
  },

  -- add any tools you want to have installed below
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "stylua",
        "shellcheck",
        "shfmt",
        "flake8",
      },
    },
  },

  {
    "nvim-neo-tree/neo-tree.nvim",
    branch = "v3.x",
    dependencies = {
      "nvim-lua/plenary.nvim",
      "nvim-tree/nvim-web-devicons", -- not strictly required, but recommended
      "MunifTanjim/nui.nvim",
      "3rd/image.nvim",
    },
        filesystem = {
          filtered_items = {
            visible = true, -- when true, they will just be displayed differently than normal items
            hide_dotfiles = false,
            hide_gitignored = false
      }
    },
    config = function()
      require("neo-tree").setup({
        event_handlers = {
          {
            event = "file_open_requested",
            handler = function()
              require("neo-tree.command").execute({action = "close"})
            end
          },
        },
        filesystem = {
          filtered_items = {
            visible = true,
            hide_dotfiles = false,
            hide_gitignored = false,
          },
          cwd_target = "buffer",
        }
      })
    end
  },
  { -- add color preview
    "norcalli/nvim-colorizer.lua",
    config = function()
      require('colorizer').setup({ '*' }, {
        RGB = true,
        RRGGBB = true,
        names = false
      })
    end
  },
  {
    "epwalsh/obsidian.nvim",
    version = "*",  -- recommended, use latest release instead of latest commit
    lazy = true,
    ft = "markdown",
    dependencies = {
      "nvim-lua/plenary.nvim",
    },
    opts = {
      workspaces = {
        {
          name = "Vault",
          path = "~/Vault/"
        }
      }
    }
  },
  { -- UFO allow a simple gesion of folding and unfolding code.
    "kevinhwang91/nvim-ufo",
    dependencies = {
      "kevinhwang91/promise-async",
      provider_selector = function (bufnr, filetype, butpye)
        return {'treesitter', 'indent'}
      end
    },
    config = function ()
      ---@diagnostic disable: missing-fields
      require('ufo').setup({
        provider_selector = function(bufnr, filetype, buftype)
          return {'treesitter', 'indent'}
        end,
      })
    end
  },
  { -- Allow to display images inside the terminal
    "3rd/image.nvim",
    backend = "kitty",
    dependencies = {
      "vhyrro/luarocks.nvim"
    },
    config = function()
      require("image").setup(
        {
          kitty_method = "normal",
          backend = "kitty",
          integrations = {
            markdown = {
              enabled = true,
              clear_in_insert_mode = false,
              download_remote_images = true,
              only_render_image_at_cursor = true,
              filetypes = { "markdown", "vimwiki" }, -- markdown extensions (ie. quarto) can go here
              resolve_image_path = function(document_path, image_path, fallback)
                return fallback(document_path, image_path)
              end,
            },
            html = {
              enabled = false,
            },
            css = {
              enabled = false,
            },
          },
          max_width = nil,
          max_height = nil,
          max_width_window_percentage = nil,
          max_height_window_percentage = 50,
          window_overlap_clear_enabled = false, -- toggles images when windows are overlapped
          window_overlap_clear_ft_ignore = { "cmp_menu", "cmp_docs", "" },
          editor_only_render_when_focused = false, -- auto show/hide images when the editor gains/looses focus
          tmux_show_only_in_active_window = false, -- auto show/hide images in the correct Tmux window (needs visual-activity off)
          hijack_file_patterns = { "*.png", "*.jpg", "*.jpeg", "*.gif", "*.webp", "*.avif" }, -- render image files as images when opened
        })
    end,
  },
  {
    "folke/which-key.nvim"
  },
  {
    "voldikss/vim-floaterm",
    config = function ()
      vim.keymap.set("n", "<leader>ft", "<cmd>:floatermNew -cd %:p:h<CR> -height=0.7 --width=0.8 --wintype=float --name=floaterm --position=center --autoclose=2",
        {desc= "Open Floaterm"})
      vim.keymap.set("n", "<leader>ft", "<cmd>:FloatermToggle<CR>", {desc = "Toggle Floaterm"})
      vim.keymap.set("t", "<leader>ft", "<cmd>:FloatermToggle<CR>", {desc = "Toggle Floaterm"})
    end,
  },
  { -- https://github.com/folke/snacks.nvim/tree/main, bunch of QOL plugins merged together
    "folke/snacks.nvim",
    lazy = false,
    --@type snacks.config
    bigfile = { enabled = true },
    dashboard = { enabled = true, example = "github" },
    debug = { enabled = true },
    dim = { enabled = true },
    image = { enabled = true },
    profiler = { enabled = true },
    scroll = { enabled = true },
    util = { enabled = true },
    zen = { enabled = true },
  }
}
