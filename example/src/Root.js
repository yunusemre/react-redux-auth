import React from 'react';
import routes from './routes'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NotFound from './notfound'

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((res, i)=> <Route key={i} exact={res.exact} path={res.path} render={()=>{
                            let Component = res.component;
                            let configuration = res.config
                            return <Component {...configuration} />
                        }}  /> )
                    }
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Root;
