<template>
        <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Register</h3>
        <input v-model="userData.fullname" type="text" placeholder="Full Name" class="input mb-3" />
        <input v-model="userData.username" type="text" placeholder="Username" class="input mb-3" />
        <input v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
        <button @click="onSave" class="default-button">Sign Up</button>
        <span class="text-center mt-3 text-sm">
        I am already a member,
        <router-link :to="{ name : 'LoginPage'}" class="text-red-900 hover:text-black">
            Sign In!
        </router-link>
        </span>
    </div>
</template>


<script>
import CryptoJS from "crypto-js";

export default {
    data(){
        return {
            userData : {
                username : null,
                password : null,
                fullname : null
            }
        }
    },
    methods : {
        onSave(){
            const password = this.userData.password;
            const key = "booklike123!456";
            const cryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
            
            this.$appAxios.post('/users', {... this.userData, password : cryptedPassword})
            .then(registered_user_response => {
                console.log("registered_user_response :>>", registered_user_response);
                this.$router.push({name: 'HomePage'});
            });
           // const decryptedPassword = CryptoJS.AES.decrypt(cryptedPassword , key).toString(CryptoJS.enc.Utf8);
        }   
    }
}
</script>
