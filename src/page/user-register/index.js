/*
 * @Author: labike
 * @Date: 2017-07-16 01:12:56 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 16:23:23
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
        $('#username').blur(function(){
            var username = $.trim($(this).val());
            if(!username){
                return;
            }
            _user.checkUsername(username, function(res){
                formError.hide();
            }, function(errMsg){
                formError.show(errMsg);
            });
        });
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
            password: $.trim($('#password').val()),
            passwordConfirm: $.trim($('#password-confirm').val()),
            phone: $.trim($('#phone').val()),
            email: $.trim($('#email').val()),
            question: $.trim($('#question').val()),
            answer: $.trim($('#answer').val())
        },
        validateResult = this.formValidate(formData);
        if(validateResult.status){
            _user.register(formData, function(res){
                window.location.href = './result.html?type=register';
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
        if(formData.password.length < 6){
            result.msg = '密码长度不能少于6位';
            return result;
        }
        if(formData.password !== formData.passwordConfirm){
            result.msg = '两次输入的密码不一致';
            return result;
        }
        if(!_ma.validate(formData.phone, 'phone')){
            result.msg = '手机号码格式不正确';
            return result;
        }
        if(!_ma.validate(formData.email, 'email')){
            result.msg = '邮箱格式不正确';
            return result;
        }
        if(!_ma.validate(formData.question, 'require')){
            result.msg = '密码提示问题不能为空';
            return result;
        }
        if(!_ma.validate(formData.answer, 'require')){
            result.msg = '密码提示问题答案不能为空';
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