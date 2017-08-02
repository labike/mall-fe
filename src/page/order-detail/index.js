/*
 * @Author: labike 
 * @Date: 2017-08-01 14:30:56 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-01 17:27:19
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ma = require('util/ma.js');
var _order = require('service/order-service.js');
var templateIndex = require('./index.string');


var page = {
    data: {
        orderNumber: _ma.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        navSide.init({
            name: 'order-list'
        });
        this.loadDetail();
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.order-cancel', function(){
            if(window.confirm('您确定要取消订单吗?')){
                _order.cancelOrder(_this.data.orderNumber, function(res){
                    _ma.successTips('该订单取消成功!');
                    _this.loadDetail();
                }, function(errMsg){
                    _ma.errorTips(errMsg);
                });
            }
        });
    },
    //订单列表
    loadDetail: function(){
        var _this = this,
            orderDetailHtml = '',
            $content = $('.content');
        $content.html('<div class="loading"></div>')
        _order.getOrderDetail(this.data.orderNumber, function(res){
            _this.dataFilter(res);
            orderDetailHtml = _ma.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
        }, function(errMsg){
            $content.html('<p class="err-tip">'+ errMsg +'</p>')
        });
    },
    dataFilter: function(data){
        data.needPay = data.status == 10;
        data.isCancelable = data.status == 10;
    }
};

$(function(){
    page.init();
});
