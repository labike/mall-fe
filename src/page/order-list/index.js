/*
 * @Author: labike 
 * @Date: 2017-08-01 14:30:56 
 * @Last Modified by: labike
 * @Last Modified time: 2017-08-01 16:15:41
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ma = require('util/ma.js');
var _order = require('service/order-service.js');
var Pagination = require('util/pagination/index.js');
var templateIndex = require('./index.string');


var page = {
    data: {
        listParam: {
            pageNum: 1,
            pageSize: 10
        }
    },
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        this.loadOrderList();
        navSide.init({
            name: 'order-list'
        });
    },
    //订单列表
    loadOrderList: function(){
        var _this = this,
            orderListHtml = '',
            $listCon = $('.order-list-con');
        $listCon.html('<div class="loading"></div>')
        _order.getOrderList(this.data.listParam, function(res){
            //_this.getFilter(res);
            orderListHtml = _ma.renderHtml(templateIndex, res);
            $listCon.html(orderListHtml);
            //加载分页信息
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载订单失败，请刷新后重试!</p>')
        });
    },
    // getFilter: function(data){
    //     data.isEmpty = !data.list.length;
    // },
    loadPagination: function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render(
            $.extend({}, pageInfo, {
                container: $('.pagination'),
                onSelectPage: function(pageNum){
                    _this.data.listParam.pageNum = pageNum;
                    _this.loadOrderList();
                }
            })
        );
    }
};

$(function(){
    page.init();
});
