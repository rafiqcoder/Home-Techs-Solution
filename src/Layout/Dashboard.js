import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import Header from './Header/Header';

const Dashboard = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="flex">
                <AdminSidebar></AdminSidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;