import React from 'react';
import ScrollToTop from '../components/ScrollToTop'; // to fix if doest show page of top when jump to other page
import Admin from '../components/Admin';

const AdminPage = () => {
    return (
        <>
            <ScrollToTop />
            <Admin />
        </>
    )
}

export default AdminPage
