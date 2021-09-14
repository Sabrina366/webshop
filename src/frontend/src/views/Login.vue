<template>
    <div>
        <form @submit.prevent="login()" >
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <button type="submit" >Login</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        login(){
            let credentials = {email: this.email, password: this.password}
            this.$store.dispatch('login', credentials)
            this.$router.push('/')
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.user.loggedIn
        }
    }
}
</script>

<style>

</style>