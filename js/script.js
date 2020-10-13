var app = new Vue ({
    el: '#app',
    data: {
        message: "Hello World!"
    }
});

var app2 = new Vue ({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString() // display like alt 
    }
});

var app3 = new Vue ({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue ({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Learn Laravel' }
            // In the console, enter app4.todos.push({ text: 'New item' }).
            // You should see a new item appended to the list.
        ]
    }
});

var app5 = new Vue ({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join(''); 
        }
    }
});

var app6 = new Vue ({
    el: "#app-6",
    data: {
        message: "Hello World!"
    }
});

// Define a new component called todo-item
Vue.component( 'todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});

// !The Vue Instance
// Although not strictly associated with the MVVM pattern, 
// Vue’s design was partly inspired by it. As a convention,
// we often use the variable vm (short for ViewModel) to refer to our Vue instance.
// var vm = new Vue ({
    // options
    // When you create a Vue instance, you pass in an options object. The majority of this guide describes how you can use these options to create your desired behavior. 
    // For reference, you can also browse the full list of options in the API reference.
// });

// Data and Methods
var data = { a: 1 };

// The object is added to a Vue instance
var vm = new Vue ({
    data: data
});

// Getting the property on the instance
// returns the one from the original data
vm.a == data.a; // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2;
data.a; // => 2

// ... and vice-versa
data.a = 3;
vm.a; // => 3

// The only exception to this being the use of Object.freeze(), which 
// prevents existing properties from being changed, which also means the reactivity system can’t track changes.
var obj = {
    foo: "bar"
};

Object.freeze(obj);

new Vue ({
    el: "#app-8",
    data: obj
});

// In addition to data properties, Vue instances expose a number of useful instance properties and methods. 
// These are prefixed with $ to differentiate them from user-defined properties. 
// For example:

var data = { a: 1 };
var vm = new Vue({
    el: "#example",
    data: data
});

vm.$data === data // => true
vm.$el === document.getElementById( 'example' ) // => true

// $watch is an instance method
vm.$watch( 'a', function( newValue, oldValue ) {
    // This callback will be called when 'vm.a' changes
} );
