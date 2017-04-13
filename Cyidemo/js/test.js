/**
 * Created by Administrator on 2017/3/29.
 */
Cyi.add('test', function (kkk,lll) {
    var locas = {
        usek:function(){
            kkk.lolo();
            console.log(kkk.showName);
            lll.pp();
        }
    }
    return locas;
},['kkk','lll'])