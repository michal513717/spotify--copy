import { IError, IResponseData } from '../../../models';

const axios = require('axios');

export async function postAxios<R>(url:string, data:any): Promise< IResponseData<R> | IError > {
    try{

        const response = await axios.post(url, data);

        const returnData = { response: response.data, status: response.status };

        return returnData;
        
    } catch (err) {

        if(axios.isAxiosError(err)){

            console.log('error message: ', err.message);

            return {err: err.message};
        } else {

            console.log('unexpected error: ', err);

            return {err: err.message};
        }
    }
};

export async function getAxios<R>(url:string, data:any): Promise< IResponseData<R> | IError > {
    try{

        const response = await axios.post(url, data);

        const returnData = { response: response.data, status: response.status };

        return returnData;
        
    } catch (err) {

        if(axios.isAxiosError(err)){

            console.log('error message: ', err.message);

            return {err: err.message};
        } else {

            console.log('unexpected error: ', err);

            return {err: err.message};
        }
    }
};