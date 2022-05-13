import dotenv from 'dotenv'
dotenv.config()
import { ClientSecretCredential } from '@azure/identity'
import axios from 'axios'
import { getAuthCode } from './getAuthCode.js'

export const credential = new ClientSecretCredential(process.env.TENANT_ID, process.env.CLIENT_ID, process.env.CLIENT_SECRET)

// By default, the callAPI function will return an array containing all the users in the directory.
export async function callAPI(options = {}) {
    options = Object.assign({
        baseURL     : "https://graph.microsoft.com/v1.0/users",
        url         : "",
        scope       : ".default",
        method      : "get",
        headers     : { "Content-Type": "application/json" },
        data        : {}
    }, options)

    try {   
        const token = await getAuthCode()
        options.headers["Authorization"] = `Bearer ${token}`

        const response = await axios(options)
        if (response.data) return response.data
    } catch(error) {
        return error.toJSON()
    }
}