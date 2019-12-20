// 去抖优化
export function _debounce(fn, delay) {
    var delay = delay || 200; // 设置延时值，如果不传默认 200ms
    var timer;
    return function () {
        var th = this;
        var args = arguments;
        // 如果 timer 存在，那么关闭定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 设置定时器
        timer = setTimeout(function () {
            // 执行后将定时器的值重置为 null
            timer = null;
            // 执行函数
            fn.apply(th, args);
        }, delay);
    };
}

// 节流优化
export function _throttle(fn, interval) {
    var last;
    var timer;
    var interval = interval || 200;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}
