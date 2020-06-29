new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js!',
        count: 10,
        user:{
            lastName:'Yamada',
            firstName:'Taro',
            prefecture:'Tokyo',
            age:'28'
        },
        colors:['Red','Green','Blue'],
        toggle:false,
        now:''
    },
    methods:{
        onclick: function(){
            //alert('onclick');
            this.now = new Date().toLocaleString();
        }
    }
})