Vue.component('j-table',{
    props:['column','database'],
    template:`
    <table>
        <tr>
            <th  v-for="item in column"  onmouseover="this.style.backgroundColor='#fff';" onmouseout="this.style.backgroundColor='#d4e3e5';">{{item.title}}</th>
        </tr>
        <tr v-for="item in database" onmouseover="this.style.backgroundColor='#ffff66';" onmouseout="this.style.backgroundColor='#d4e3e5';">
            <td v-for='col in column'>{{item[col.key]}}</td>
        </tr>
    </table>
    
    `,
})