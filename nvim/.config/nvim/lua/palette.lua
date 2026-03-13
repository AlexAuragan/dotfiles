local M = {}

local function state_home()
    local xdg = os.getenv("XDG_STATE_HOME")
    if xdg and #xdg > 0 then
        return xdg
    end
    return (os.getenv("HOME") or "~") .. "/.local/state"
end

local function scss_path()
    return state_home() .. "/quickshell/user/generated/material_colors.scss"
end

-- parse $name: #HEX;
local function parse_line(s)
    local name, hex = s:match("%$(%w+):%s*(#[%x%X]+)%s*;")
    return name, hex
end

function M.load()
    local path = scss_path()
    local ok, f = pcall(io.open, path, "r")
    if not ok or not f then
        return {}
    end
    local palette = {}
    for line in f:lines() do
        local name, hex = parse_line(line)
        if name and hex then
            palette[name] = hex
        end
    end
    f:close()
    return palette
end

return M
