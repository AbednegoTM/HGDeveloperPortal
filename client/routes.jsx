import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import {Dashboard} from '../client/pages/Dashboard.jsx'
FlowRouter.route('/',{
    action(){
        mount(MainLayout,{
            content:(<App />)
        }) 
    }
})

FlowRouter.route('/dash',{
    action(){
        mount(MainLayout,{
            content:(<Dashboard />)
        }) 
    }
})