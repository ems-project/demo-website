'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

import '../css/bootstrap.scss';
require('bootstrap');

import adminMenu from '@elasticms/admin-menu';
import back2top from "./back2top";
import ajaxSearch from "./ajax-search";
import toc from "./toc";

adminMenu();
back2top();
ajaxSearch();
toc();

console.log('Demo website loaded!');