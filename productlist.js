import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

let myModal = '';


const app = createApp({
    data(){
        return{
            apiUrl: `https://vue3-course-api.hexschool.io/v2`,
            path:'maciw2',
            products:[],
            tempProduct:{},
        }
    },
    methods: {
       checkAdmin(){
                axios.post(`${this.apiUrl}/api/user/check`) 
                .then((res)=>{
                    this.getData();
                })
                .catch((err)=>{
                    alert(err.response.data.message);
                    //window.location = 'login.html';
                })
       },
       getData(){
            axios.get(`${this.apiUrl}/api/${this.path}/admin/products`) 
                .then((res)=>{
                this.products=res.data.products;
                console.log(this.products);
                })
                .catch((err)=>{
                alert(err.response.data.message);
                })
       },
       showProduct(item){
        this.tempProduct=item;
       },
       openModal(){
        myModal.show();
       },
       saveModal(){
        myModal.hide();
       },
    },
    mounted(){
        //token
        // const token = document.cookie.split('; ').find((row) => row.startsWith('hexVueToken='))
        // ?.split('=')[1];
        // axios.defaults.headers.common['Authorization'] = token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;
    
        this.checkAdmin();
        myModal=new bootstrap.Modal(document.querySelector('#productModal'));
    }
});

app.mount('#app')


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