$( document ).ready(function() {
    $.getJSON('https://api.github.com/users/hitnux',{},function(data){
        main(data);
    });
});
function main(data){
    Vue.component('navbar', {
        template: '#navbar'
      });
      Vue.component('mycard', {
        template: '#mycard',
        props: ['title','button','href','user', 'footer']
      });
      Vue.component('myinfo', {
        template: '#myinfo'
      });
    new Vue({
        el: '#app',
        data: {
            message: data,
            repos: data["public_repos"],
            followers: data["followers"],
            following: data["following"],
            username: data["login"]
        },
        methods: {
        }
    });
}
function github(){
    $.getJSON('https://api.github.com/users/hitnux',{},function(data){return data});
}    
    
