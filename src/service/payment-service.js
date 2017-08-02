/*
 * @Author: labike 
 * @Date: 2017-08-02 20:43:27 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-02 21:13:35
 */


'use strict';

var _ma = require('util/ma.js');

var _payment = {
    getPaymentInfo: function(orderNumber, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    getPaymentStatus: function(orderNumber, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _payment;