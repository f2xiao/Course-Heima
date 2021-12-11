 // 利用新增数组方法操作数据
 var data = [{
    id: 1,
    pname: '小米',
    price: 3999
}, {
    id: 2,
    pname: 'oppo',
    price: 999
}, {
    id: 3,
    pname: '荣耀',
    price: 1299
}, {
    id: 4,
    pname: '华为',
    price: 1999
}, ];
// 1. 获取相应的元素
var tbody = document.querySelector('tbody');
var search_price = document.querySelector('.search-price');
var start = document.querySelector('.start');
var end = document.querySelector('.end');
var product = document.querySelector('.product');
var search_pro = document.querySelector('.search-pro');
setDate(data);
// 2. 把数据渲染到页面中
function setDate(mydata) {
    // 先清空原来tbody 里面的数据
    tbody.innerHTML = '';
    mydata.forEach(function(value) {
        // console.log(value);
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + value.id + '</td><td>' + value.pname + '</td><td>' + value.price + '</td>';
        tbody.appendChild(tr);
    });
}

// 3. 根据价格查询商品
// 当我们点击了按钮,就可以根据我们的商品价格去筛选数组里面的对象
search_price.addEventListener('click', function() {
    // alert(11);
    var newDate = data.filter(function(value) {
        return value.price >= start.value && value.price <= end.value;
    });
    console.log(newDate);
    // 把筛选完之后的对象渲染到页面中
    setDate(newDate);
});
// 4. 根据商品名称查找商品
// 如果查询数组中唯一的元素, 用some方法更合适,因为它找到这个元素,就不在进行循环,效率更高]
search_pro.addEventListener('click', function() {
    var arr = [];
    data.some(function(value) {
        if (value.pname === product.value) {
            // console.log(value);
            arr.push(value);
            return true; // return 后面必须写true  
        }
    });
    // 把拿到的数据渲染到页面中
    setDate(arr);
})