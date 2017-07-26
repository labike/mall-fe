/*
 * @Author: labike 
 * @Date: 2017-07-22 23:47:44 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-26 22:14:37
 */

'use strict';

var _ma = require('util/ma.js');

var _cart = {
    //获取购物车数量
    getCartCount: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        });
    },
    addToCart: function(productInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    }
};

module.exports = _cart;