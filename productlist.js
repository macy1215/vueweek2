import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data(){
        return{
            apiUrl: `https://vue3-course-api.hexschool.io/v2`,
            path:'maciw2',
        }
    },
    methods: {
       checkAdmin(){
            axios.post(`${this.apiUrl}/api/user/check`) 
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                alert(err.response.data.message);
                window.location = 'login.html';
            })
       }
    },
    mounted(){
        //token
        const token = document.cookie.split('; ').find((row) => row.startsWith('hexVueToken='))
        ?.split('=')[1];
        axios.defaults.headers.common['Authorization'] = token
    
        this.checkAdmin()
    }
}).mount('#app')


//3.取得管理員才能看得產品列表
// loginBtn.addEventListener('click',()=>{   
//     axios.get(`${url}/api/${path}/admin/products/all`) 
//       .then((res)=>{
//         console.log(res);
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
// })