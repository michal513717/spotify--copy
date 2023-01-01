import { ErrorResponse, IError, IResponseData, RequestResponse, SuccessfulResponse } from '../../../models';

const axios = require('axios');

// export async function postAxios<R>(url:string, data:any): Promise< IResponseData<R> | IError > {
//     try{

//         const response = await axios.post(url, data);

//         const returnData = { response: response.data, status: response.status };

//         return returnData;
        
//     } catch (err) {

//         if(axios.isAxiosError(err)){

//             console.log('error message: ', err.message);

//             return {status: err.response.status, response: err.response.data};
//         } else {

//             console.log('unexpected error: ', err);

//             return {err: err.message};
//         }
//     }
// };

// export async function getAxios<R>(url:string): Promise< IResponseData<R> | IError > {
//     try{
//         console.log(url);

//         const response = await axios.get(url);

//         const returnData = { response: response.data, status: response.status };

//         return returnData;
        
//     } catch (err) {

//         if(axios.isAxiosError(err)){

//             console.log('error message: ', err.message);

//             return {status: err.response.status, response: err.response.data};
//         } else {

//             console.log('unexpected error: ', err);

//             return {err: err.message};
//         }
//     }
// };

export async function postAxios<Data extends Record<string, any>>(url: string, data:any): Promise<RequestResponse<Data>> {
    try {

        const response = await axios.post(url, data);

        if (!response.data.isActionSuccess) {
            throw new Error(response.statusText);
        }

        return {
            ok: true,
            responseData: response.data,
        }
    } catch (error) {
        return {
            ok: false,
            responseData: error?.response?.data ? error.response.data : undefined,
        }
    }
};

export async function getAxios<Data extends Record<string, any>>(url: string): Promise<RequestResponse<Data>> {
    try {

        const response = await axios.get(url);
    
        if (!response.data.isActionSuccess) {
            throw new Error(response.statusText);
        }

        return {
            ok: true,
            responseData: response.data,
        }
    } catch (error) {
        return {
            ok: false,
            responseData: error?.response?.data ? error?.response?.data : undefined,
        }
    }
};