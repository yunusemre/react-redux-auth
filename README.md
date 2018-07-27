rr-auth

React-Redux Auth
Authentication and authorization for react, redux and react-router 4.x

Installation
````
npm install rr-auth / yarn install rr-auth
````

Use view: 
```
import Login from 'rr-auth/build/views/Login'
import Register from 'rr-auth/build/views/Register'
import ForgetPassword from 'rr-auth/build/views/ForgetPassword'
import ConfirmPassword from 'rr-auth/build/views/ConfirmPassword'
```

Use action:
```
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, 
        actGetUser }  from 'rr-auth/build/action'
```

Use reducer: 
```
import {login, users, register, passwordForgot, confirmPassword} from 'rr-auth/build/reducer'
```

Required: 
```
module.exports = {
    authConfig: {
        logo: Logo, //Project logo
        name: 'LVS', //Project name 
        width: 150 //Logo width
    }
} 
```

API Path

```
/api/auth/login/
/api/auth/logout/
/api/auth/register/
/api/auth/user/
/api/auth/password/reset/
/api/auth/password/reset/confirm/
```
