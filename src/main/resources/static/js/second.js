//模板的一些语法
window.onload = function(){
    // 我们的数据对象
    var data = {a:1}

    // 该对象被加入到一个 Vue 实例中
    var vm = new Vue({
        data: data
    })

    // 获得这个实例上的 property
    // 返回源数据中对应的字段
    vm.a == data.a // => true

    // 设置 property 也会影响到原始数据
    vm.a = 2
    data.a // => 2

    // ……反之亦然
    data.a = 3
    vm.a // => 3

    //值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。也就是说如果你添加一个新的 property，比如：
    //vm.b = 'hi'
    //那么对 b 的改动将不会触发任何视图的更新

    /**
     *这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。
     <div id="app">
         <p>{{ foo }}</p>
         <!-- 这里的 `foo` 不会更新！ -->
         <button v-on:click="foo = 'baz'">Change it</button>
     </div>
     * @type {{foo: string}}
     */
    var obj = {
        foo: 'bar'
    }

    Object.freeze(obj)

    new Vue({
        el: '#app',
        data: obj
    })

    /**
     *
     除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。例如：

     var data = { a: 1 }
         var vm = new Vue({
      el: '#example',
      data: data
    })

         vm.$data === data // => true
         vm.$el === document.getElementById('example') // => true

         // $watch 是一个实例方法
         vm.$watch('a', function (newValue, oldValue) {
      // 这个回调将在 `vm.a` 改变后调用
    })
     * */

    //比如 created 钩子可以用来在一个实例被创建之后执行代码：
    new Vue({
        data: {
            a: 1
        },
        created: function () {
            // `this` 指向 vm 实例
            console.log('a is: ' + this.a)
        }
    })
    // => "a is: 1"
    //也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。

    //v-html会将代码真正输出为html
    new Vue({
        el :"#app-rawHtml",
        data:{rawHtml: "<span style=\"color: red\">This should be red."}
    })

    /**
     迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

     {{ number + 1 }}

     {{ ok ? 'YES' : 'NO' }}

     {{ message.split('').reverse().join('') }}

     <div v-bind:id="'list-' + id"></div>
     这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。

     <!-- 这是语句，不是表达式 -->
     {{ var a = 1 }}

     <!-- 流控制也不会生效，请使用三元表达式 -->
     {{ if (ok) { return message } }}
     * */

    //v-if 根据表达式的真假显示隐藏
    var app5 = new Vue({
        el: '#app-seen',
        data:{seen : true}
    })

    /**
     v-bind 缩写
     <!-- 完整语法 -->
     <a v-bind:href="url">...</a>

     <!-- 缩写 -->
     <a :href="url">...</a>

     <!-- 动态参数的缩写 (2.6.0+) -->
     <a :[key]="url"> ... </a>
     v-on 缩写
     <!-- 完整语法 -->
     <a v-on:click="doSomething">...</a>

     <!-- 缩写 -->
     <a @click="doSomething">...</a>

     <!-- 动态参数的缩写 (2.6.0+) -->
     <a @[event]="doSomething"> ... </a>
     * */
}
