/*
 * @Author: labike 
 * @Date: 2017-07-24 21:53:39 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-25 00:39:38
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ma = require('util/ma.js');
var _user = require('service/user-service.js');


var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                password: $.trim($('#password').val()),
                passwordNew: $.trim($('#password-new').val()),
                passwordConfirm: $.trim($('#password-confirm').val())
            },
            validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                _user.updatePassword({
                    passwordOld: userInfo.password,
                    passwordNew: userInfo.passwordNew
                }, function(res, msg){
                    _ma.successTips(msg);
                }, function(errMsg){
                    _ma.errorTips(errMsg);
                });
            }else{
                _ma.errorTips(validateResult.msg);
            }
        });
    },
    validateForm: function(formData){
        var result = {
            status: false,
            msg: ''
        };
        if(!_ma.validate(formData.password, 'require')){
            result.msg = '原密码不能为空';
            return result;
        }
        if(!formData.passwordNew || formData.passwordNew.length < 6){
            result.msg = '密码长度不能少于六位';
            return result;
        }
        if(formData.passwordNew !== formData.passwordConfirm){
            result.msg = '两次输入的密码不一致';
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