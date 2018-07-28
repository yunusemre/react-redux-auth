rrauth

React-Redux Auth
```
Authentication and authorization for react, redux and react-router 4.x
```

Installation
```
npm install rrauth / yarn install rrauth
```

Style
```
import 'rrauth/build/index.css'
```

Use view: 
```
import { Login, Register, ForgotPassword, ConfirmPassword } from 'rrauth'
```

Use action:
```
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, 
        actGetUser }  from 'rrauth'
```

Use reducer: 
```
import {login, users, register, passwordForgot, confirmPassword} from 'rrauth'
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
