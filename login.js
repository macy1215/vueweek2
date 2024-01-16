import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data(){
    return{
      user:{
        username: 'mjmj3794@gmail.com',
        password: 'Cc51845184'
      }
    }
  },
  methods: {
    login(){
      const url = `https://vue3-course-api.hexschool.io/v2`;
      const path = 'maciw2';
      console.log(this.user);

      axios.post(`${url}/admin/signin`,this.user)
      .then((res)=>{
        console.log(res);
        const { token , expired} = res.data //解構 將token 跟時間抓到
        console.log(token,expired);
        document.cookie = `hexVueToken=${token}; expires=${expired}`;
        //window.location= 'productlist.html'
      })
      .catch((err)=>{
        console.dir(err)
      })
    }
  },

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

