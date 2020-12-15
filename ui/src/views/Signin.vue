<template>
  <div class="site-full">
    <div class="container">
      <h1 class="title">Marboni</h1>
      <div class="box">
        <h1 class="welcome">Welcome Back</h1>
        <form @submit.prevent="logIn" class="form-group">      
          <div class="input-group">
            <email-outline class="input-group-icon"></email-outline>
            <input type="text" placeholder="Email Address" class="form-control">
          </div>
          <div class="input-group">
            <Lock-outline class="input-group-icon"></Lock-outline>
            <input type="text" placeholder="Password" class="form-control">
          </div>
          <dir class="forget-link">
            <a class="forget2-link">Forgot password?</a>
          </dir>
          <button type="submit" class="signin-submit">Log In</button>      
        </form>
      </div>
      <div class="mylink">
        <a class="signup-link" href="">Don't have an account yet? Sign Up</a>          
      </div>
    </div>
  </div>
</template>

<script>

import { EmailOutline, LockOutline } from 'mdue';

export default {
  components: {
    EmailOutline,
    LockOutline
  },
  methods: {
    logIn: function () {
      this.$router.push('/dashboard')
    }
  }  
}
</script>

<style scoped>

  .title  {
    color: #ffffff;
    font-weight: 100;
    margin-bottom: 50px;
  }

  .welcome {
    margin-bottom: 30px;
  }

  .site-full {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #152b84;
    /* background-image: linear-gradient(to bottom right, #152b84, #3b5dc4); */
    background-image: linear-gradient(to bottom right, #152b84, #9096c0);
    height: 100vh;
    min-width: 268px;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: auto;
    padding: 20px;
    animation-name: slidein;
    animation-duration: 1.2s;
    transition-timing-function: ease-in-out;
  }

  @keyframes slidein {
    from {
      padding-top: 10%;
      opacity: 0;
      overflow: hidden;      
    }

    to {
      padding-top: 20px;
      opacity: 1;
      overflow: auto;
    }
  }  

  .box {
    margin: auto;
    padding: 50px 40px;
    border-radius: 3px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 70px 0 rgba(10, 14, 29, 0.1);
  }  

  .form-group {
    border-radius: 3px;
    background: #ffffff;
    display: flex;
    flex-direction: column;    
  }

  .input-group-icon {
    color: #babadc;
    font-size: 2em;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 52px;
    margin: 10px 0;
    border: 1px solid #babadc;
    border-radius: 3px;
    padding-left: 16px;
    transition: border .150s ease-in-out
  }

  ::placeholder {
    color: #babadc;
  }

  .input-group:focus-within {
    border-color: #007bfc;
  }
  
  .form-control {
    height: 100%;
    width: 100%;
    border: none;
    padding: 0 16px;
    border-radius: 3px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;    
    font-size: 1em;
  }  

  .signin-submit {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 900;
    margin: 10px 0px;
    font-size: 1em;
    height: 52px;
    color: #ffffff;
    background-color: #1485ff;
    border: 1px solid #1485ff;
    border-radius: 3px;
    transition: all .150s ease-in-out;
  } 

  .signin-submit:hover {
    background-color: #479fff;
    border-color: #479fff;
    cursor: pointer;
  }

  .forget-link {
    display: flex;
    margin: 10px 0px;
    flex-direction: column;
    align-items: flex-end;
  }

  .forget2-link {    
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: #555565;
  }  

  .mylink {
    margin: 40px;
  }

  .signup-link {    
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;
  }

</style>