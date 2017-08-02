/*
 * @Author: labike 
 * @Date: 2017-07-22 23:46:53 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-31 23:26:37
 */

'use strict';

var _ma = require('util/ma.js');

var _address = {
    getAddressList: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    save: function(addressInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    update: function(addressInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    deleteAddress: function(shippingId, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    },
    getAddress: function(shippingId, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _address;