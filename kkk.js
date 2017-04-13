/**
 * Created by Administrator on 2017/3/30.
 */

Cyi.add('kkk', function (lll,pkl) {
    var locak = {
        lolo: function () {
            console.log('this is kkk!!!');
            console.log(lll.name)
            console.log(pkl)
        },
        showl:function(){
            console.log(159)
        }
    }
    return locak;
},['lll','pkl'])