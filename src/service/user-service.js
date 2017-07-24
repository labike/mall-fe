/*
 * @Author: labike 
 * @Date: 2017-07-22 23:46:53 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-24 09:06:36
 */

'use strict';

var _ma = require('util/ma.js');

var _user = {
    checkLogin: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/user/get_user_info'),
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
}

module.exports = _user;