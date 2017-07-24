/*
 * @Author: labike 
 * @Date: 2017-07-22 15:23:28 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 09:28:06
 */

 'use strict';

 require('./index.css');

 var _ma = require('util/ma.js');

 var header = {
     init: function(){
         this.bindEvent();
     },
    onLoad: function(){
        var keyword = _ma.getUrlParam('keyword');
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent: function(){
        var _this = this;
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        $('#search-input').keyup(function(e){
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    searchSubmit: function(){
        var keyword = $.trim($('#search-input').val());
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }else{
            _ma.goHome();
        }
    }
 };

 header.init();
