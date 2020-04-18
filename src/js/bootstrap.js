'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

import '../css/bootstrap.scss';
import adminMenu from '@elasticms/admin-menu';
require('bootstrap');

import back2top from "./back2top";

back2top();
adminMenu();
console.log('Demo website loaded!');