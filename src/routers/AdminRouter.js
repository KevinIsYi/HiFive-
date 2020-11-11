import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AdminSideBar } from '../components/AdminSideBar/AdminSideBar'
import { BlogAdminScreen } from '../components/BlogAdminScreen/BlogAdminScreen'

export const AdminRouter = () => {
    return (
        <>
            <AdminSideBar />
            <Switch>
                <Route exact path="/admin" component={ BlogAdminScreen } />
                
                <Redirect to="/admin" />
            </Switch>
        </>
    )
}
