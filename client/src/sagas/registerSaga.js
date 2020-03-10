import { takeLatest,call, put ,select, delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import {request} from './helper';
import {resetState} from '../actions/resetStateAction';
import {inscriptionError, inscriptionUserSuccess, EmailConfirmationSuccess, EmailConfirmationError} from "../actions/registerAction";
import axios from 'axios'


const inscription =
  function *inscription ({data}) {
    try {

      const response = yield call(request, {
        "url": "http://localhost:5000/register",
        "data": data,
        "method": "post"
      });
      
      
      if(response.data.isValid){
        yield put(inscriptionUserSuccess(data));
        yield put(push("/login"));
      }
      else{
        if(response.data.errPicture)
          yield put(inscriptionError(response.data.errPicture));
        else if(response.data.errUsername && !response.data.errEmail){
          yield put(inscriptionError(response.data.errUsername));
        }
        else if(response.data.errEmail && !response.data.errUsername){
          yield put(inscriptionError(response.data.errEmail));
        }
        else if(response.data.errEmail && response.data.errUsername){
         yield put(inscriptionError('Email and Username Already Exist'));
        }
        else
          yield put(inscriptionError('Invalid input'));
        
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(inscriptionError("error.response.statusText", "error.response.status"));
      }
    }
  };


const emailConfirm =
function *emailConfirm ({token}) {
  try {
    const response = yield axios.post('http://localhost:5000/confirmEmail', {token});
    if(response.data === 'success')
    {
      yield put(EmailConfirmationSuccess());
    }
    else if(response.data === 'error')
    {
      yield put(EmailConfirmationError());
    }
  }catch (error) {
      if (error.response) {
        yield put(EmailConfirmationError());
      }
    }
};

export default function *() {
  yield takeLatest("INSCRIPTION_USER", inscription);

  yield takeLatest("EMAIL_CONFIRMATION", emailConfirm);
}
