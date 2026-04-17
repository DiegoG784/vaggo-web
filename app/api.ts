import { request } from "http"
import { RequestHeaders } from "next/dist/client/components/router-reducer/fetch-server-response"

const API_ADDRESS = "http://localhost:3000/"

type contentTypeSupport = "json"

const contentTypeTable : Record<contentTypeSupport, string> = {
    'json': 'application/json'
}

interface ApiResponse {
    success?: boolean,
    message?: string,
    data?: DataResponse | DataResponse[]
}

interface DataResponse {
    id?: number,
    user?: UserResponse | UserPreview | Pick<UserResponse, "id" | "email" | "permissionLevel">
}

export interface UserResponse extends DataResponse {
    email: string,
    lastLogin: string, //JS Date Object string format
    isBlocked: boolean,
    isAdmin: boolean,
    permissionLevel: number,
    personId?: number,
    PES_INT_ID?: number,
    person: PersonResponse
}

type UserPreview = Pick<UserResponse, "id" | "email" >

interface PersonResponse {
    id: number,
    name: string,
    cpf: string,
    gender: string,
    phone: string,
    birthDate: string, //yyyy-mm-dd
    registrationDate: string, //yyyy-mm-dd
    isActive: boolean
}

export interface VehicleResponse extends DataResponse {
    brand: string,
    model: string,
    color: string,
    licensePlate: string,
    manufactureYear: string,
    isActive: boolean,
    userId?: number,
    USU_INT_ID?: number,
}

// type DataResponses = UserResponse | VehicleResponse

interface IcallParams {
    header?: HeadersInit,
    body?: any,
    method?: any,
    rawResponse?:boolean,
    dataOnly?: boolean,
    contentType?: contentTypeSupport
}


function isEmpty(obj:object): boolean {
    return Object.keys(obj).length === 0
}

/**
 * Fetch the application's API data and returns based on demand
 * @param uri API URI
 * @param useToken Insert Login Token on request
 * @param params Request Parameters
 * @returns API Response or Raw Response from fetch function. Returns undefined on anormalities
 */
export async function call(uri:string, useToken?:boolean) : Promise<ApiResponse | undefined>
export async function call(uri:string, useToken:boolean, params?:IcallParams) : Promise<ApiResponse | DataResponse | Response | undefined>
export async function call(uri:string, useToken:boolean = true, params?:IcallParams) : Promise<ApiResponse | DataResponse | Response | undefined>
{
    console.log(`params: -URI:${uri}, -Token?:${useToken}, Params:${JSON.stringify(params)}, content-type: ${params?.contentType}`)

    let requestHeader: HeadersInit = {}
    let requestBody: any = {}
    let requestMethod = params?.method ? params.method : "GET"

    useToken ? requestHeader['Authorization'] = `Bearer ${localStorage.getItem('token')}` : null

    if (params) {
        params.contentType ? requestHeader['Content-Type'] = contentTypeTable[params.contentType] : null
        
        params.body ? requestBody = params.body : null
        params.header ? Object.assign(requestHeader, params.header) : null
        params.method ? null : params.method = "GET"
        // params.header ? requestHeader = {...requestHeader, ...params.header} : null
        // params.body ? requestBody = {...requestBody, ...params.body} : null
    }

    requestHeader = isEmpty(requestHeader) ? {mode: "no-cors"} : requestHeader
    requestBody = isEmpty(requestBody) ? undefined : requestBody

    const res = await fetch(`${API_ADDRESS}${uri}`, {headers: requestHeader, body: requestBody, method:requestMethod})
    
    // console.log(res)

    if (params && params.rawResponse) return res

    if (res.ok) {
        if (params?.dataOnly) {
            const data = await res.json() as ApiResponse

            return data.data as DataResponse
        }
        return await res.json() as ApiResponse
    }

    return undefined
}
// export async function calla(uri:string, header={}, options:fetchOptions = {contentType: 'json'}) {
//     const requestHeader : Record<string, string> = {...header}

//     requestHeader["Content-Type"] = contentTypeTable[options.contentType]

//     options.useToken ? requestHeader['Authorization'] = `Bearer ${localStorage.getItem('token')}` : null



//     // console.log(header)
//     // console.log(options)

//     const res = await fetch(`${API_ADDRESS}${uri}`, {
//         headers: requestHeader
//     })

//     if (options.returnResponse) {
//         return res
//     }

//     if (res.ok) {
//         switch  (options.contentType) {
//             case 'json':
//                 const data = await res.json()
//                 return data
//         }
//     }


//     // check if fetch was success and return the data fetched from API
//     // if API says that token is expired, redirects user directly to login page?
//     // if API returns 404, tries to resolve into another ips?
//     // if fetch returns any error, returns undefined or null
    

//     // return fetch(`${API_ADDRESS}${uri}`, {
//         // headers: requestHeader
//     // })

// }