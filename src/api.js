import _ from "lodash";
import axios from "axios";

const API_URL = "https://api.clockify.me/api/v1";

export const get_workspaces = async (token) => {
    const response = await axios.get(`${API_URL}/workspaces`, {
        headers: {
            'content-type': 'application/json',
            'X-Api-Key': token
        }
    });

    const workspaces = _.map(response.data, d => _.pick(d, ["id", "name"]));

    // console.log(workspaces);
    return workspaces;
}
