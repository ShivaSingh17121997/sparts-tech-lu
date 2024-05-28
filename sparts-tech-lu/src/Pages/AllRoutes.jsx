import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import OurCustomers from './OurCustomers';
import SpArtsAdvantages from './SpArtsAdvantages';

export default function AllRoutes() {
    return (
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                
                <Route path='/contact' element={<ContactUs />} />

                <Route path='/ourcustomers' element={<OurCustomers />} />

                <Route path='/sparts' element={<SpArtsAdvantages />} />
            </Routes>
        </div>
    )
}
