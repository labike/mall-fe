/*
 * @Author: labike 
 * @Date: 2017-07-24 21:53:39 
 * @Last Modified by: labike
 * @Last Modified time: 2017-07-26 22:56:08
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js')
require('page/common/header/index.js');

var _ma = require('util/ma.js');
var _product = require('service/product-service.js');
var _cart = require('service/cart-service.js');
var templateIndex = require('./index.string');

var page = {
    data: {
        productId: _ma.getUrlParam('productId') || '',
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        if(!this.data.productId){
            _ma.goHome();
        }
        this.loadDetail();
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('mouseenter', '.p-img-item', function(){
            var imageUrl = $(this).find('.p-img').attr('src');
            $('.main-img').attr('src', imageUrl);
        });
        $(document).on('click', '.p-count-btn', function(){
            var type = $(this).hasClass('plus') ? 'plus':'minus',
                $pCount = $('.p-count'),
                currCount = parseInt($pCount.val()),
                minCount = 1,
                maxCount = _this.data.detailInfo.stock || 1;

            if(type === 'plus'){
                $pCount.val(currCount < maxCount ? currCount + 1 : maxCount);
            }else if(type === 'minus'){
                $pCount.val(currCount > minCount ? currCount - 1 : minCount);
            }
        });
        $(document).on('click', '.cart-add', function(){
            _cart.addToCart({
                productId: _this.data.productId,
                count: $('.p-count').val()
            }, function(res){
                window.location.href = './result.html?type=cart-add';
            }, function(errMsg){
                _ma.errorTips(errMsg);
            });
        });
    },
    loadDetail: function(){
        var _this = this,
            html = '',
            $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _product.getProductDetail(this.data.productId, function(res){
            _this.filter(res);
            _this.data.detailInfo = res;
            html = _ma.renderHtml(templateIndex, res);
            $pageWrap.html(html);
        }, function(errMsg){
            $pageWrap.html('<p class="err-tip">此商品去火星了</p>')
        });
    },
    filter: function(data){
        data.subImages = data.subImages.split(',');
    }
};

$(function(){
    page.init();
});