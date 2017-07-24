/*
 * @Author: labike 
 * @Date: 2017-07-22 17:38:13 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 09:53:20
 */

 'use strict';

 require('./index.css');
 require('page/common/nav-simple/index.js');
 var _ma = require('util/ma.js');

 $(function(){
    var type = _ma.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    $element.show();
 });