/*
 * @Author: labike 
 * @Date: 2017-07-22 23:46:53 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-01 17:25:09
 */

'use strict';

var _ma = require('util/ma.js');

var _order = {
    getProductList: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        });
    },
    createOrder: function(orderInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    },
    getOrderList: function(listParam, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    getOrderDetail: function(orderNumber, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    cancelOrder: function(orderNumber, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
};

module.exports = _order;