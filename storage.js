// localStorage 封装

export default {
    /**
     * 设置 localStorage
     *
     * @param { localStorage名字 } key
     * @param { localStorage值 } value
     * @param { 超时的时间(默认10s) } [duration=10 * 1000]
     */
    setItem (key, value, duration = 10 * 1000) {
        let obj = {}
        // 将 value 存到对象中
        obj.data = value
        // 存入数据的起始时间
        obj.createTime = new Date().getTime()
        // 用户输入的持续时间
        obj.duration = duration
        // 将存入的对象转换成字符串存入 localStorage
        localStorage.setItem(key, JSON.stringify(obj))
    },
    /**
     * 取出 localStorage 值
     *
     * @param { localStorage名字 } key
     */
    getItem (key) {
        // 将取出的值转为对象
        let res = JSON.parse(localStorage.getItem(key))
        // 如果取出的值为空，终止程序的执行
        if (!res) {
            return false
        }
        // 获取当前时间
        let timeNow = new Date().getTime()
        // 如果当前时间 - 起始时间 >= 超时时间，那么删除 localStorage
        if (timeNow - res.createTime >= res.duration) {
            localStorage.removeItem(key)
            // 返回空值
            return null
        } else {
            // 返回原数据
            return res.data
        }
    },
}
