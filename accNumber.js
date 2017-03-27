(function($,window) {
    $.fn.extend({
        //插件名字
        accNumber: function(options) {
            //参数和默认值
            var defaults = {  
                speed:300,
                baseNum:10  
            }
            var options =  $.extend(defaults, options);
            //遍历匹配元素的集合
            return this.each(function() {
                var o = options;

                var obj = $(this);

                var $win = $(window);

                var itemOffsetTop = obj.offset().top;

                var itemOuterHeight = obj.outerHeight();

                var winHeight = $win.height();

                var end=obj.data('to');

                var from=obj.data('from');

                $win.scroll(function () {
                    var winScrollTop = $win.scrollTop();
                    if(!(winScrollTop > itemOffsetTop+itemOuterHeight) && !(winScrollTop < itemOffsetTop-winHeight)) {
                        make_time();
                    }
                })

                function make_time(){
                    var End_index=setInterval(function(){

                        if(parseInt(obj.html())>=end){

                            clearInterval(End_index);

                            // $(window).off('scroll');

                        }else{
                            from+=o.baseNum;
                            obj.html(++from);

                        }

                    },o.speed)                     
                }
                
            });

        }

    });    

})(jQuery,window); 