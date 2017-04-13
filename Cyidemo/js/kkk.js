/**
 * Created by Administrator on 2017/3/30.
 */

Cyi.add('kkk', function (lll,pkl) {
    var locak = {
        lolo: function () {

            console.log(lll.name);
            console.log(pkl.name)
        },
        showName:'this is KKK'
    }
    return locak;
},['lll','pkl'])