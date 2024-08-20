
const { Gtk, Gio } = imports.gi;

function getCustomIconPath(iconName) {
    const customIconPath = `/home/alexandre/.config/ags/assets/icons/${iconName}.svg`;
    const file = Gio.File.new_for_path(customIconPath);
    if (file.query_exists(null)) {
        return customIconPath;
    }
    return null;
}

export function iconExists(iconName) {
    // Check if the icon exists in the custom directory first
    const customIcon = getCustomIconPath(iconName);
    if (customIcon) {
        return true;
    }

    // Fall back to checking the default icon theme
    let iconTheme = Gtk.IconTheme.get_default();
    return iconTheme.has_icon(iconName);
}

export function substitute(str) {
    // Normal substitutions
    if (userOptions.icons.substitutions[str])
        return userOptions.icons.substitutions[str];

    // Regex substitutions
    for (let i = 0; i < userOptions.icons.regexSubstitutions.length; i++) {
        const substitution = userOptions.icons.regexSubstitutions[i];
        const replacedName = str.replace(
            substitution.regex,
            substitution.replace,
        );
        if (replacedName != str) return replacedName;
    }

    // Guess: convert to kebab case
    if (!iconExists(str)) str = str.toLowerCase().replace(/\s+/g, "-");

    // Check for the icon in custom directory
    const customIcon = getCustomIconPath(str);
    if (customIcon) {
        return customIcon; // Return full path to custom icon if it exists
    }

    // Original string if no substitution or custom icon found
    return str;
}

