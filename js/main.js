Vue.component('button-counter',{
    // 関数で定義
    data:function(){
        return{
            count:0
        }
    },
    // 要素は単一、もしくはdivなどで囲む必要がある
    //template:'<button v-on:click="count++">{{ count }}</button>'
    template:'<div> <span>count: </span> <button v-on:click="count++"> {{count}} </button> </div>'
})
var app = new Vue({
    el: '#app'
    
})