import axios from 'axios';
import { setAlert} from './alert';
import {
    ERROR_ADD_CV,
    ADD_CV
} from './types';

// Add Cv
export const addCv = ({
    linkedin,
    about,
    university,
    universityYear,
    universityLoc,
    school,
    schoolYear,
    schoolLoc,
    educExptitle,
    educExpyear,
    educExpdescription,
    educExptitleTwo,
    educExpyearTwo,
    educExpdescriptionTwo,
    techExptitle,
    techExpinstOrg,
    techExpyear,
    techExpdescription,
    techExplocation,
    techExptitleTwo,
    techExpinstOrgTwo,
    techExpyearTwo,
    techExpdescriptionTwo,
    techExplocationTwo,

    langname,
    langlevel,

    langnameTwo,
    langlevelTwo, id}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({linkedin,
        about,
        university,
        universityYear,
        universityLoc,
        school,
        schoolYear,
        schoolLoc,
        educExptitle,
        educExpyear,
        educExpdescription,
        educExptitleTwo,
        educExpyearTwo,
        educExpdescriptionTwo,
        techExptitle,
        techExpinstOrg,
        techExpyear,
        techExpdescription,
        techExplocation,
        techExptitleTwo,
        techExpinstOrgTwo,
        techExpyearTwo,
        techExpdescriptionTwo,
        techExplocationTwo,

        langname,
        langlevel,

        langnameTwo,
        langlevelTwo}); //stringify() convertit une valeur JavaScript en chaîne JSON

    try{
      const res = await axios.post(`http://localhost:5000/api/Cv/addCv/${"608815b4fa2a0b5ee8f1547a"}`, body, config);

      dispatch({
          type: ADD_CV,
          payload: res.data
      });
      dispatch(setAlert('Cv added', 'success'));
    }
      catch(err){
          dispatch({
              type: ERROR_ADD_CV,
              payload: {msg: err.response.statusText, status: err.response.status}
  
          });
      }    
};