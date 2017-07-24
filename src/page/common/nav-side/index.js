/*
 * @Author: labike 
 * @Date: 2017-07-22 16:27:42 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-22 17:15:36
 */

 'use strict';

 require('./index.css');

 var _ma = require('util/ma.js');
 var templateIndex = require('./index.string');
 var navSide = {
     option: {
         name: '',
         navList: [
             {name: 'user-center', desc: '个人中心', href: './user-center.html'},
             {name: 'order-list', desc: '我的订单', href: './order-list.html'},
             {name: 'pass-update', desc: '修改密码', href: './pass-update.html'},
             {name: 'about', dsc: '关于我们', href: './about.html'}
         ]
     },
     init: function(option){
         $.extend(this.option, option)
         this.renderNav();
     },
    renderNav: function(){
        for(var i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if(this.option.navList[i].name == this.option.name){
                this.option.navList[i].isActive = true;
            }
        };
        var navHtml = _ma.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        $('.nav-side').html(navHtml);
    }
 };

 module.exports = navSide;