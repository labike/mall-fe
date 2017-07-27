/*
 * @Author: labike 
 * @Date: 2017-07-22 23:47:44 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-27 23:29:44
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
    },
    getCartList: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/list.do'),
            success: resolve,
            error: reject
        });
    },
    selectProduct: function(productId, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    },
    unselectProduct: function(productId, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/un_select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    },
    selectAllProduct: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/select_all.do'),
            success: resolve,
            error: reject
        });
    },
    unselectAllProduct: function(resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/un_select_all.do'),
            success: resolve,
            error: reject
        });
    },
    updateProduct: function(productInfo, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/update.do'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    deleteProduct: function(productIds, resolve, reject){
        _ma.request({
            url: _ma.getServerUrl('/cart/delete_product.do'),
            data: {
                productIds: productIds
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _cart;