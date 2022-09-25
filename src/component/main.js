import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageMultimedia from './exercise6';
import Navigation from './navigation';

export const Main = () => {
  let navigate = useNavigate();

  return (
    <div className='justify-center'>
      <Navigation/>
      <h1>Tasks & Activities of Week 5</h1>
      <h3>By Ain Farrhana Adnan</h3>
      <button onClick={() => navigate('/exe1')}>Exercise 1 (Using HTML)</button><br></br>
      <button onClick={() => navigate('/')}>Exercise 2 (Using JS in console)</button><br></br>
      <button>Exercise 3 (Using HTML)</button><br></br>
      <button>Exercise 4 (Using HTML)</button><br></br>
      <PageMultimedia></PageMultimedia>
      <button onClick={() => navigate('/e7')}>Exercise 7 (Using React)</button><br></br>
      <button onClick={() => navigate('/e8')}>Exercise 8 (Using React)</button><br></br>

    </div>
  );
}
