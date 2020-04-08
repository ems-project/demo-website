'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

import '../css/bootstrap.scss';
import adminMenu from '@elasticms/admin-menu';
require('bootstrap');

adminMenu();
console.log('Demo website loaded!');