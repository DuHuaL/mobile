document.addEventListener('DOMContentLoaded',function() {
  new Search('.jd_header_box');
});
var Search = function(selector) {
  this.el = document.querySelector(selector);
  // 获取轮播图的高度
  this.bannerHeight = document.querySelector('.banner').offsetHeight;
  // 默认最大透明度为0.85
  this.maxOpacity = 0.85;
  this.init();
};
Search.prototype.init = function() {
  var that = this;
  that.el.style.background = 'rgba(216,80,92,0)';
  // 当页面向上滚动的时候，透明度慢慢加深
  window.onscroll = function() {
    // 获取向上卷曲的距离
    var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scorllTop || 0;
    console.log(scrollTop);
    var opacity = 0;
    // 判断向上卷曲的距离和轮播图的高度大小，卷曲的越多透明度越大,当完全滚出轮播图时，透明度变成0.85，并且一直不变
    if (scrollTop < that.bannerHeight) {
      opacity = scrollTop / that.bannerHeight * that.maxOpacity;
    } else {
      opacity = that.maxOpacity;
    }
    that.el.style.background = 'rgba(216,80,92,'+opacity+')';

  }
}