const path = require('path');

const ROOT = path.join(process.cwd());
const SRC = path.join(ROOT, 'src');
const SERVER = path.join(SRC, 'server');
const COMPILED = path.join(ROOT, 'compiled');
const DIST = path.join(COMPILED, 'dist');
const APP = path.join(SRC, 'app');
const ICONS = path.join(SRC, 'icons');
const STYLES = path.join(SRC, 'styles');
const TESTS = path.join(ROOT, 'tests');
const ASSET_FILE = path.join(SERVER, 'webpack-assets.json');

module.exports = {
  ROOT, SRC, DIST, COMPILED, APP, ICONS, STYLES, TESTS, SERVER, ASSET_FILE,
};
