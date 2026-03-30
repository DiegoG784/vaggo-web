import { KeyObjectType } from "crypto"

const API_ADDRESS = "http://localhost:3000/"

interface fetchOptions {
    useToken?: boolean
    contentType: string | 'json'
    returnResponse?: boolean
}

const contentTypeTable : Record<string, string> = {
    'json': 'application/json'
}

export interface VehicleResponse {
    id: number,
    brand: string,
    model: string,
    color: string,
    licensePlate: string,
    manufactureYear: string,
    isActive: boolean,
    userId: number,
    USU_INT_ID: number,
    user: {
        id: number,
        email: string
    }
}

export interface UserResponse {
    id: number,
    brand: string,
    model: string,
    color: string,
    licensePlate: string,
    manufactureYear: string,
    isActive: boolean,
    userId: number,
    USU_INT_ID: number,
    user: {
        id: number,
        email: string
    }
}

/**
 * Calls API
 * @param uri API route
 * @param header Extra header options
 * @param options Response and Returnal options
 * @returns API Response
 */
export async function call(uri:string, header={}, options:fetchOptions = {contentType: 'json'}) {
    const requestHeader : Record<string, string> = {...header}

    requestHeader["Content-Type"] = contentTypeTable[options.contentType]

    options.useToken ? requestHeader['Authorization'] = `Bearer ${localStorage.getItem('token')}` : null



    // console.log(header)
    // console.log(options)

    const res = await fetch(`${API_ADDRESS}${uri}`, {
        headers: requestHeader
    })

    if (options.returnResponse) {
        return res
    }

    if (res.ok) {
        switch  (options.contentType) {
            case 'json':
                const data = await res.json()
                return data
        }
    }


    // check if fetch was success and return the data fetched from API
    // if API says that token is expired, redirects user directly to login page?
    // if API returns 404, tries to resolve into another ips?
    

    // return fetch(`${API_ADDRESS}${uri}`, {
        // headers: requestHeader
    // })

}