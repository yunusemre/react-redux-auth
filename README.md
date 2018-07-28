react-auth

React-Redux Auth
```
Authentication and authorization for react, redux and react-router 4.x
```

Installation
```
npm install react-auth / yarn install react-auth
```

Style
```
import 'react-auth/build/index.css'
```

Use view: 
```
import { Login, Register, ForgotPassword, ConfirmPassword } from 'react-auth'
```

Use action:
```
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, 
        actGetUser }  from 'react-auth'
```

Use reducer: 
```
import {login, users, register, passwordForgot, confirmPassword} from 'react-auth'
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
