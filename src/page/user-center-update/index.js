/*
 * @Author: labike 
 * @Date: 2017-07-24 21:53:39 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 23:35:15
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
        this.bindEvent();
    },
    onLoad: function(){
        navSide.init({
            name: 'user-center'
        });
        this.loadUserInfo();
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                phone: $.trim($('#phone').val()),
                email: $.trim($('#email').val()),
                question: $.trim($('#question').val()),
                answer: $.trim($('#answer').val())
            },
            validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                _user.updateUserInfo(userInfo, function(res, msg){
                    _ma.successTips(msg);
                    window.location.href = './user-center.html';
                }, function(errMsg){
                    _ma.errorTips(errMsg);
                });
            }else{
                _ma.errorTips(validateResult.msg);
            }
        });
    },
    loadUserInfo: function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _ma.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _ma.errorTips(errMsg);
        });
    },
    validateForm: function(formData){
        var result = {
            status: false,
            msg: ''
        };
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