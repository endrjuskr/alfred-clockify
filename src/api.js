import _ from "lodash";
import axios from "axios";

const API_URL = "https://api.clockify.me/api/v1";

export const get_workspaces = async (token) => {
    const response = await axios.get(`${API_URL}/workspaces`, get_headers(token));
    return response.data;
}

export const get_projects_from_workspace = async (token, workspace) => {
    const response = await axios.get(`${API_URL}/workspaces/${workspace}/projects`, get_headers(token));
    return response.data;
}

const get_headers = (token) => {
    return  {
        'content-type': 'application/json',
        'X-Api-Key': token
    };
}
