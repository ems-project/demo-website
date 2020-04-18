'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

import '../css/bootstrap.scss';
require('bootstrap');

import adminMenu from '@elasticms/admin-menu';
import back2top from "./back2top";
import ajaxSearch from "./ajax-search";

adminMenu();
back2top();
ajaxSearch();

console.log('Demo website loaded!');