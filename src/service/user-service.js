/*
 * @Author: labike 
 * @Date: 2017-07-22 23:46:53 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-25 00:45:44
 */

'use strict';

var _ma = require('util/ma.js');

var _user = {
    login: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    checkUsername: function(username, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    register: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/register.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    checkLogin: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    getQuestion: function(username, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/forget_get_question.do'),
            data: {
                username: username  
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    checkAnswer: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/forget_check_answer.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    resetPassword: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/forget_reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    getUserInfo: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    updateUserInfo: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    updatePassword: function(userInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    logout: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
};

module.exports = _user;