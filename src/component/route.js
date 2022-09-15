import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './main'
// import { E1 } from './exercise1'
// import { E2 } from './exercise2'
// import { E3 } from './exercise3'
// import { E4 } from './exercise4'
// import { E5 } from './exercise5'
// import { E6 } from './exercise6'
import { E7 } from './exercise7'
import { E8 } from './exercise8'

const routes = (
    <Routes>
        <Route path="/" element={<Main/>} />
        {/* <Route path="/e1" element={<E1/>} /> */}
        {/* <Route path="/e2" element={<E2/>} /> */}
        {/* <Route path="/e3" element={<E3/>} />
        <Route path="/e4" element={<E4/>} />
        <Route path="/e5" element={<E5/>} />
        <Route path="/e6" element={<E6/>} /> */}
        <Route path="/e7" element={<E7/>} />
        <Route path="/e8" element={<E8/>} />
    </Routes>
)
export default routes