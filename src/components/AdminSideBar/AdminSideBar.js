import React from 'react';
import { BlogAdminScreen } from '../BlogAdminScreen/BlogAdminScreen';

import './AdminSideBar.css';

export const AdminSideBar = React.memo(({ updateComponent, increment }) => {

    return (
        <aside className="sidebar">
            <h1
                onClick={ () => updateComponent(<BlogAdminScreen /> )}
            >
                Blog
            </h1>
            <h1>
                Contacts
            </h1>
            <h1>Sales</h1>
            <h1>Users</h1>
            <h1>Create User</h1>
        </aside>
    )
})
