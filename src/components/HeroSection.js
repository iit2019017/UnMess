
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function toggleForm  () {
  const containers = document.querySelector('.containera');
  containers.classList.toggle('active');
};

var pass='';
const HeroSection=(props)=>
 {
  const{
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasaccount, 
    setHasaccount,
    emailError, 
    passwordError,
    username,
    setUsername,
  } =props;
  
  
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          id='2'
        >
         Mess Staff
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          id='1'
          onClick={''}
        >
         Student <i className='far fa-play-circle' />
        </Button>
      </div>
      <section className="sectiona">
    <div class="containera">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://img5.goodfon.com/original/1920x1080/c/b2/apelsin-tsitrus-listia-fon.jpg" alt="" /></div>
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Sign In</h2>
            <input type="text" 
            required 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="" placeholder="Email Address" />
             <p className="errormsg">{emailError}</p>
            <input type="password" 
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="" placeholder="Password"/>
            <p className="errormsg">{passwordError}</p>
            <input type="submit" 
            onClick={handleLogin}
            name="" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a onClick={toggleForm}>Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
      <div class="user signupBx">
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Create an account</h2>
            <input type="text" 
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="" placeholder="Username" />
            <input type="email" 
               required
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               name="" placeholder="Email Address" />
            <input type="password" 
               required
               value={password}
               onChange={(e)=>setPassword(e.target.value)
              }
            placeholder="Create Password" />
            <input type="password" 
             required
             value={password}
             onChange={(e)=>
            {
            }}
             placeholder="Confirm Password" />
            <input type="submit"
            onClick={handleSignup} name="" value="Sign Up" />
            <p class="signup">
              Already have an account ?
              <a onClick={toggleForm}>Sign in.</a>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="https://img5.goodfon.com/original/1920x1080/c/b2/apelsin-tsitrus-listia-fon.jpg" alt="" /></div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default HeroSection;


