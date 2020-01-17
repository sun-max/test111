import Mock from "mock";
var Random = Mock.Random
Mock.mock('http://weichuang.com/student',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':"@name",
        'age':'@Integer(18,29)',
        'address':'@privince'
    }]
});
export default Random;