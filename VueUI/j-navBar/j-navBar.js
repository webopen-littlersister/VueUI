Vue.component('j-navbar',{
    template:`
    <div class="navbar">
        <span class='point' @click="$emit('click-left')"> &lt;返回</span>
        <span class='title'>{{title}}</span>
        <span class='point' @click="$emit('click-right')">按钮</span>
    </div>   
    `,
    props:{
        title :String
    },
})


Vue.component('j-navbar2',{
    template:`
    <div class="navbar">
        <span class='point' @click="$emit('click-left')">&lt;返回</span>
        <span class='title'>{{title}}</span>
        <input type="text"  @input="$emit('input',$event.target.value)">
    </div>   
    `,
    props:{
        title :String
    },
})