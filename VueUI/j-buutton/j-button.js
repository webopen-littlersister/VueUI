Vue.component('j-button',{
    template: `<button class="button" @click="$emit('click')" :style="{background:bgcolor}">{{title}}</button>`,
    props:{
        title :String ,
        bgcolor:{
            type :String,
            //验证
            validator(val){
                return   ['red','blue','green','pink'].indexOf(val) != -1
            }
        }
    }
})