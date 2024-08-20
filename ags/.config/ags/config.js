"use strict";
import GLib from 'gi://GLib';
import App from 'resource:///com/github/Aylur/ags/app.js'
import userOptions from './modules/.configuration/user_options.js';
import Overview from './modules/overview/main.js';
import SideLeft from './modules/sideleft/main.js';
// Import Gtk
import Gtk from 'gi://Gtk';
// Import necessary parts from variables.js
import './variables.js';

const { Gdk } = imports.gi;
const COMPILED_STYLE_DIR = `${GLib.get_user_config_dir()}/ags/user/`

// Set the icon search path
Gtk.IconTheme.get_default().append_search_path(`${App.configDir}/assets/icons`);

async function applyStyle() {
    App.resetCss();
    App.applyCss(`${COMPILED_STYLE_DIR}/style.css`);
    console.log('[LOG] Styles loaded')
}

applyStyle().catch(print);

const Windows = () => [
    Overview(),
    SideLeft(),
];

const CLOSE_ANIM_TIME = 210;

App.config({
    css: `${COMPILED_STYLE_DIR}/style.css`,
    stackTraceOnError: true,
    closeWindowDelay: {
        'sideright': CLOSE_ANIM_TIME,
        'sideleft': CLOSE_ANIM_TIME,
        'osk': CLOSE_ANIM_TIME,
    },
    windows: Windows().flat(1),
});
