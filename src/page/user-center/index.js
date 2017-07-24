/*
 * @Author: labike 
 * @Date: 2017-07-24 21:53:39 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 22:38:36
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ma = require('util/ma.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');


var page = {
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        navSide.init({
            name: 'user-center'
        });
        this.loadUserInfo();
    },
    loadUserInfo: function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _ma.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _ma.errorTips(errMsg);
        })
    }
};

$(function(){
    page.init();
});