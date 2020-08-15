//入门的介绍
window.onload = function(){
    /**
     *采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
        <div id="app">
         {{ message }}
        </div>

        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello Vue!'
          }
        })
     * */
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    /**
     *鼠标悬停显示浮动信息，其中v-bind是指令执行，指令都以v-开头
     <div id="app-2">
     <span v-bind:title="message">
     鼠标悬停几秒钟查看此处动态绑定的提示信息！
     </span>
     </div>

     var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    })
     *
     * */
    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    })
    app2.message="1234";//响应式
    /**
     *v-if设置是否显示
     <div id="app-3">
     <p v-if="seen">现在你看到我了</p>
     </div>

        var app3 = new Vue({
          el: '#app-3',
          data: {
            seen: true
          }
        })
     * */
    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    /**
     * v-for  for循环
     <div id="app-4">
     <ol>
     <li v-for="todo in todos">
     {{ todo.text }}
     </li>
     </ol>
     </div>

     var app4 = new Vue({
          el: '#app-4',
          data: {
            todos: [
              { text: '学习 JavaScript' },
              { text: '学习 Vue' },
              { text: '整个牛项目' }
            ]
          }
        })

     * */
    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    })

    /**
     * v-on  事件监听
     * 注意在 reverseMessage 方法中，我们更新了应用的状态，
     * 但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，
     * 你编写的代码只需要关注逻辑层面即可。
     <div id="app-5">
     <p>{{ message }}</p>
     <button v-on:click="reverseMessage">反转消息</button>
     </div>

     var app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'Hello Vue.js!'
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })
     * */
    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    /**
     * v-model 实现表单输入和应用状态之间的双向绑定
     <div id="app-6">
     <p>{{ message }}</p>
     <input v-model="message">
     </div>

     var app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!'
      }
    })
     *
     * */
    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })

    /**
     *
     <div id="app-7">
         <ol>
         <!--
         现在我们为每个 todo-item 提供 todo 对象
         todo 对象是变量，即其内容可以是动态的。
         我们也需要为每个组件提供一个“key”，稍后再
         作详细解释。
         -->
         <todo-item
         v-for="item in groceryList"
         v-bind:todo="item"
         v-bind:key="item.id"
         ></todo-item>
         </ol>
     </div>

     // 定义名为 todo-item 的新组件
     Vue.component('todo-item', {
          // todo-item 组件现在接受一个
          // "prop"，类似于一个自定义 attribute。
          // 这个 prop 名为 todo。
          props: ['todo'],
          template: '<li>{{ todo.text }}</li>'
     })

     var app7 = new Vue({
          el: '#app-7',
          data: {
            groceryList: [
              { id: 0, text: '蔬菜' },
              { id: 1, text: '奶酪' },
              { id: 2, text: '随便其它什么人吃的东西' }
            ]
          }
        })
     * */
    Vue.component('todo-item', {
        // todo-item 组件现在接受一个
        // "prop"，类似于一个自定义 attribute。
        // 这个 prop 名为 todo。
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })

    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
    })
}
