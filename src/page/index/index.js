/*
 * @Author: labike 
 * @Date: 2017-07-16 01:17:57 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-25 18:01:27
 */
'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _ma = require('util/ma.js');


$(function() {
    var bannerHtml = _ma.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    var $slider = $('.banner').unslider({
        dots: true
    });
    $('.banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev':'next';
        $slider.data('unslider')[forward]();
    })
});