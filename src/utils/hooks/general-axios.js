import axios from "axios";

let environment = process.env.NODE_ENV == "development" ? process.env.REACT_APP_LOCALAPI : process.env.REACT_APP_API;

export const generalAxios = async (method, endpoint, headers, body) => {
    try {
        const { data } = await axios({
            method: method,
            url: environment+endpoint,
            headers: headers,
            data: body
        })
        return data
    } catch (err) {
        return err;
    }
};

export const login = async (username, password) => {

    let body = {
        "username": username,
        "password": password
    }

    try {
        const data = await axios({
            method: "POST",
            url: environment+process.env.REACT_APP_API_ENDPOINT_LOGIN,
            headers:{
                "Content-Type": "application/json"
            },
            data: body
        })
        return data
    } catch (err) {
        return err;
    }

}

export const getPermissions = async () => {

    try {
        const data = await axios({
            method: "GET",
            url: environment+process.env.REACT_APP_API_ENDPOINT_GETPERMISSIONS,
            headers:{
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (err) {
        return err;
    }

}

export const getPermissionsBySearchValue = async (searchValue) => {

    try {
        const data = await axios({
            method: "GET",
            url: environment+process.env.REACT_APP_API_ENDPOINT_GETPERMISSIONS_BYSEARCHVALUE+searchValue,
            headers:{
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (err) {
        return err;
    }

}

export const updatePermission = async (id, name, lastname, permissionTypeId) => {

    let body = {
        id,
        name,
        lastname,
        permissionTypeId
    }

    try {
        const data = await axios({
            method: "PUT",
            url: environment+process.env.REACT_APP_API_ENDPOINT_UPDATEPERMISSION,
            headers:{
                "Content-Type": "application/json"
            },
            data: body
        })
        return data
    } catch (err) {
        return err;
    }

}

export const getPermissionTypes = async () => {

    try {
        const data = await axios({
            method: "GET",
            url: environment+process.env.REACT_APP_API_ENDPOINT_GETPERMISSIONTYPES,
            headers:{
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (err) {
        return err;
    }

}