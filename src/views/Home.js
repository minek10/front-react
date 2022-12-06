import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../containers/HomeContainer/action';
import { makeSelectHomeContainerCounter } from '../containers/HomeContainer/selector';
import 'bootstrap/dist/css/bootstrap.css';

function Home(){
  const counter = useSelector(makeSelectHomeContainerCounter())
  const dispatch = useDispatch()

  return (
    <div class="text-center">
     <h3>Le counter est à <label class="text-light bg-dark px-2 pb-1">{counter}</label></h3>
      <button class="btn btn-primary mx-2" onClick={() => dispatch(incrementAction())}>
        Increment
      </button>
      <button class="btn btn-secondary mx-2"onClick={() => dispatch(decrementAction())}>
        Decrement
      </button>
    </div>
  );
};

export default Home;
