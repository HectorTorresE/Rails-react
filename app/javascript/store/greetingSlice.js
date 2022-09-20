import axios from "axios";
const GETGREET_START = 'hello-rails/greeting/GETGREETSTART';
const GETGREET_UPDATE = 'hello-rails/greeting/GETGREETUPDATE';
export const GETGREET = 'hello-rails/greeting/GETGREET';
const API_URL = 'http://localhost:3000/greetings';
const INITIAL_STATE = {
  message: "mmg",
}
export function getGreetStart() {
  return {
    type: GETGREET_START,
  };
}

export function getGreetingUpdate(message) {
  return {
    type: GETGREET_UPDATE,
    payload: message,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  let message = '';
  switch (action.type) {
    case GETGREET:
      console.log('Start');
      getGreet();
    case GETGREET_UPDATE:
      console.log('Success');
      return {
        message: action.payload
      };
    default: return state;
  }
}

export function getGreet() {
  return (dispatch) => {
    console.log('Getting greeting');
    axios(API_URL).then(function (response) {
      console.log(response.data);
      dispatch(getGreetingUpdate(response.data));
    }).catch(function (error) {
      console.log(error);
    });
  };
}

