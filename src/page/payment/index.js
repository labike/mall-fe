/*
 * @Author: labike 
 * @Date: 2017-08-01 14:30:56 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-02 21:07:17
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _ma = require('util/ma.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');


var page = {
    data: {
        orderNumber: _ma.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        this.loadPaymentInfo();
    },
    //订单列表
    loadPaymentInfo: function(){
        var _this = this,
            paymentHtml = '',
            $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function(res){
            paymentHtml = _ma.renderHtml(templateIndex, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus();
        }, function(errMsg){
            $pageWrap.html('<p class="err-tip">'+ errMsg +'</p>')
        });
    },
    listenOrderStatus: function(){
        var _this = this;
        this.paymentTimer = window.setInterval(function(){
            _payment.getPaymentStatus(_this.data.orderNumber, function(res){
                if(res == true){
                    window.location.href = '/result.html?type=payment&orderNumber=' + _this.data.orderNumber;
                }
            });
        }, 5e3);
    }
};

$(function(){
    page.init();
});
