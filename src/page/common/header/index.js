/*
 * @Author: labike 
 * @Date: 2017-07-22 15:23:28 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 17:35:43
 */

'use strict';

require('./index.css');

var _ma = require('util/ma.js');
//通用页面头部
var header = {
    init: function(){
        this.bindEvent();
    },
    onLoad: function(){
        var keyword = _ma.getUrlParam('keyword');
        //如果存在keyword,则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent: function(){
        var _this = this;
        //点击搜索按钮，提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //输入回车提交
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
