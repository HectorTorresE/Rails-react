import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreet } from '../store/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreet());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingSlice.message);

  // console.log(JSON.stringify(message));

  return <h1>{message}</h1>;
};

export default Greeting;
