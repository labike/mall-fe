/*
 * @Author: labike
 * @Date: 2017-07-16 01:12:56 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 16:21:26
 */
'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _ma = require('util/ma.js');

var formError = {
    show: function(errMsg){
        $('.error-item').show().find('.error-msg').text(errMsg);
    },
    hide: function(errMsg){
        $('.error-item').hide().find('.error-msg').text();
    }
};
var page = {
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        var _this = this;
        $('#submit').click(function(){
            _this.submit();
        });
        $('.user-content').keyup(function(e){
            if(e.keyCode === 13){
                _this.submit();
            }
        });
    },
    submit: function(){
        var formData = {
                username: $.trim($('#username').val()),
                password: $.trim($('#password').val())
            },
            validateResult = this.formValidate(formData);
        if(validateResult.status){
            _user.login(formData, function(res){
                window.location.href = _ma.getUrlParam('redirect') || './index.html';
            }, function(errMsg){
                formError.show(errMsg);
            });
        }else{
            formError.show(validateResult.msg);
        }
    },
    formValidate: function(formData){
        var result = {
            status: false,
            msg: ''
        };
        if(!_ma.validate(formData.username, 'require')){
            result.msg = '用户名不能为空';
            return result;
        }
        if(!_ma.validate(formData.password, 'require')){
            result.msg = '密码不能为空';
            return result;
        }
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
};

$(function(){
    page.init();
});