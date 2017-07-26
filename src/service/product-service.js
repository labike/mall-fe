/*
 * @Author: labike 
 * @Date: 2017-07-22 23:46:53 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-26 22:33:25
 */

'use strict';

var _ma = require('util/ma.js');

var _product = {
    getProductList: function(listParam, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/product/list.do'),
            data: listParam,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    getProductDetail: function(productId, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    },
};

module.exports = _product;