/************************************************************************************************
 *
 * Name:Cyi
 * Developer:Eve Chee
 * Intro:JS自由模块化的实现，后续会加入更多的功能和插件
 *       在不使用require或ES6的情况下  Cyi能很好的帮助你自主创建和调用模块
 *       创建模块语法 Cyi.add(name,function,modules)
 *       使用模块语法 Cyi.use(name,callback)
 *       1.2版本修复了一些BUG  并且对低版本浏览器做了部分兼容
 *       需要注意的是你现在模块中如果返回的是一个字符串的话 需要注意不可以返回cy开头的字符串 否则会出现错误
 *
 *
 * ***********************************************************************************************/
(function () {
    (function (Cy) {
        var er = {};
        er._config = {
            _path: '',
            _version: '1.2',
            _name: 'ceshi'
        }
        er._modules = {};
        er.mo = [];
        if (!Array.indexOf) {
            Array.prototype.indexOf = function (el) {
                for (var i = 0, n = this.length; i < n; i++) {
                    if (this[i] === el) {
                        return i;
                    }
                }
                return -1;
            }
        }
        if (!Array.prototype.every) {
            Array.prototype.every = function (callback) {
                // 获取数组长度
                var len = this.length;
                if (typeof callback != "function") {
                    throw new TypeError();
                }
                // thisArg为callback 函数的执行上下文环境
                var thisArg = arguments[1];
                for (var i = 0; i < len; i++) {
                    if (i in this && !callback.call(thisArg, this[i], i, this)) {
                        return false;
                    }
                }
                return true;
            }
        }
        er.use = function (path, callback) {
            if (!path) {
                return false;
            }

            er._create(path, function () {
                var po = setInterval(function () {
                    if (!!er._modules[path].func) {
                        clearInterval(po);
                        callback(er._modules[path].func, path);
                    }
                }, 50)
            })
        }

        er.add = function (path, mainfun, args) {

            function somo(name) {

                var po = setInterval(function () {
                    if (er._modules[name].func) {
                        clearInterval(po);
                        er._modules[path].arg.push(er._modules[name].func);
                    }
                }, 50)
            }


            if (!!args) {
                if (!er._modules[path]) {
                    er._modules[path] = {
                        arg: []
                    }
                }

                for (var i = 0, val; val = args[i++];) {
                    er._modules[path].arg.push('cy' + val);
                    if (er._modules[val]) {
                        somo(val)
                        continue;
                    } else {
                        er.use(val, function (obj, name) {
                            var index = er._modules[path].arg.indexOf('cy' + name);
                            if (index !== -1) {
                                er._modules[path].arg.splice(index, 1, obj);
                            } else {
                                throw('path is undefind!!!')
                            }

                        });
                    }

                }

                var po = setInterval(function () {
                    if (er._modules[path].arg.length === args.length && er._modules[path].arg.every(function (ele, index, arr) {
                            return !/^cy/.test(ele)
                        })) {
                        clearInterval(po);
                        er._modules[path].func = mainfun.apply(this, er._modules[path].arg);
                    }
                }, 50)

            } else {
                if (!er._modules[path]) {
                    er._modules[path] = {
                        func: mainfun(),
                        arg: []
                    }
                }
            }

        }

        er._create = function (path, callback) {
            if (!path) {
                return false;
            }
            for (var i = 0, val; val = er.mo[i++];) {
                if (val === path) {
                    callback();
                    return false;
                }
            }
            er.mo.push(path);
            var sc = document.createElement('script');
            sc.type = 'text/javascript';
            sc.src = er._config._path + path + '.js';
            document.getElementsByTagName('html')[0].appendChild(sc);
            sc.onload = sc.onreadystatechange = function () {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {

                    callback()

                    // Handle memory leak in IE
                    sc.onload = sc.onreadystatechange = null;
                }
            };
            document.getElementsByTagName('html')[0].removeChild(sc);
        }
        er.sStorage = function (str, time) {
            var now = new Date().getTime();
            localStorage.setItem(str + '&' + now)
        }

        Cy['cyi'] = Cy['Cyi'] = er;
    })(this)
})()