/**
 * Created by Administrator on 2017/4/1.
 */
Cyi.add('cyslide', function () {
    var Cyslide = {
        _parse: 1,
        _slide: function (id, slide,time) {
            var self = this;
            var box = $(id);
            var _cli = $(slide);
            self._time = time;
            self._createRadiu(box, _cli, _cli.length);
        },
        _createRadiu: function (box, cli, len) {//box父容器 cli子元素 len子元素个数
            var self = this;
            var Radius = $('<ul id="cyi_slideRadius"></ul>');
            var Radiu = '<li class="cyi_slideRadiu cyi_slideRadiuShow"></li>';
            for (var i = 1; i < len; i++) {
                Radiu += '<li class="cyi_slideRadiu"></li>'
            }
            Radius.html(Radiu);
            Radius.css({
                'width': 20 * len + 'px'
            })
            box.append(Radius);
            var start = self._Interval(len, cli);
            $('.cyi_slideRadiu').hover(function () {
                self._parse = 0;
                clearTimeout(start);
                var $this = $(this);
                var nowi = $('.cyi_slideRadiu').index($this);
                $('.cyi_slideRadiu').removeClass('cyi_slideRadiuShow');
                $this.addClass('cyi_slideRadiuShow');
                cli.removeClass('nowslide').eq(nowi).addClass('nowslide');
            }, function () {
                clearTimeout(start);
                self._parse = 1;
                start = self._Interval(len, cli);
            })
        },
        _Interval: function (num, cli) {
            var self = this;
            function stli() {
                if (!self._parse) {
                    return false;
                }
                var nowi = $('.cyi_slideRadiu').index($('.cyi_slideRadiuShow'));
                $('.cyi_slideRadiu').removeClass('cyi_slideRadiuShow');
                if (nowi + 2 > num) {
                    nowi = 0;
                } else {
                    nowi++;
                }
                $('.cyi_slideRadiu').eq(nowi).addClass('cyi_slideRadiuShow');
                cli.removeClass('nowslide').eq(nowi).addClass('nowslide');
                self._Interval(num, cli)
            }

            var slideTime = setTimeout(stli, self._time);
            return slideTime;
        }
    }
    return Cyslide;
})