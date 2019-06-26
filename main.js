new Vue({
    el: "#app",
    data:{
        title:"Hello World",
        title1: "Welcome",
        link: "http://127.0.0.1/udemy/",
        finishedLink: "<a href"http://127.0.0.1/udemy/"> Udemy </a>"
    },
    methods:{
        changeTitle: function(event){
            this.title= event.target.value;
        },
        sayHello: function(){
            this.title= "Hello 2";
            return this.title1;
        }
    }
});