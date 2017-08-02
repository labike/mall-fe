/*
 * @Author: labike 
 * @Date: 2017-07-22 17:38:13 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-02 21:02:50
 */

 'use strict';

 require('./index.css');
 require('page/common/nav-simple/index.js');
 var _ma = require('util/ma.js');

 $(function(){
    var type = _ma.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    if(type === 'payment'){
        var orderNumber = _ma.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    $element.show();
 });