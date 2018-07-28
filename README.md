rr-auth

React-Redux Auth
Authentication and authorization for react, redux and react-router 4.x

Installation
````
npm install rr-auth / yarn install rr-auth
````

Style
```
import 'skyrc-auth/build/index.css'
```

Use view: 
```
import { Login, Register, ForgotPassword, ConfirmPassword } from 'rr-auth'
```

Use action:
```
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, 
        actGetUser }  from 'rr-auth'
```

Use reducer: 
```
import {login, users, register, passwordForgot, confirmPassword} from 'rr-auth'
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

<Route path={path} render={()=>{return <Component {...authConfig} />}}  />
<Route path={path} component={Component} {...authConfig}  />
```

Callback API Path

```
/api/auth/login/
/api/auth/logout/
/api/auth/register/
/api/auth/user/
/api/auth/password/reset/
/api/auth/password/reset/confirm/
```
