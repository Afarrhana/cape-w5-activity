import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './main'
import { Exe1 } from './exercises/exe1'
import { Exe2 } from './exercises/exe2'
import { Exe3 } from './exercises/exe3'
import { Exe4 } from './exercises/exe4'
import { Exe5 } from './exercises/exe5'
import { Exe6 } from './exercises/exe6'
import { Exe7 } from './exercises/exe7'
import { Exe8 } from './exercises/exe8'

// import { E4 } from './exercise4'
// import { E5 } from './exercise5'
// import { E6 } from './exercise6'
import { E7 } from './exercise7'
import { E8 } from './exercise8'

const routes = (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/exe1" element={<Exe1/>} />
        <Route path="/exe2" element={<Exe2/>} />
        <Route path="/exe3" element={<Exe3/>} />
        <Route path="/exe4" element={<Exe4/>} />
        <Route path="/exe5" element={<Exe5/>} />
        <Route path="/exe6" element={<Exe6/>} />
        <Route path="/exe7" element={<Exe7/>} />
        <Route path="/exe8" element={<Exe8/>} />


        {/*  */}
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