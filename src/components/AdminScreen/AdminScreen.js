import React, { useCallback, useState } from 'react';
import { AdminSideBar } from '../AdminSideBar/AdminSideBar';
import { BlogAdminScreen } from '../BlogAdminScreen/BlogAdminScreen';

import './AdminScreen.css';

export const AdminScreen = () => {

    const [ currentPage, setCurrentPage ] = useState(<BlogAdminScreen />);

    const updateComponent = useCallback( component  => {
        setCurrentPage(component);
    }, [ setCurrentPage ]);

    return (
        <div className="admin-page">
            <AdminSideBar updateComponent={ updateComponent } />
            <div className="admin-option">
                { currentPage }
            </div>
        </div>
    )
}
