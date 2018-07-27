react-redux-auth

Installation
````
npm install / yarn install
````

Build:
````
npm run build 
````

Publish
```
npm publish
```

Use view: 
```
import Login from 'react-redux-django-auth/build/views/Login'
import Register from 'react-redux-django-auth/build/views/Register'
import ForgetPassword from 'react-redux-django-auth/build/views/ForgetPassword'
import ConfirmPassword from 'react-redux-django-auth/build/views/ConfirmPassword'
```

Use action:
```
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, 
        actGetUser }  from 'react-redux-djang-auth/build/action'
```

Use reducer: 
```
import {login, users, register, passwordForgot, confirmPassword} from 'react-redux-djang-auth/build/reducer'
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
