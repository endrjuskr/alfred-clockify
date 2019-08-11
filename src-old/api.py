from config import API_URL
import utils
import requests

def get_all_workspaces(token):
    headers = {
        'content-type': 'application/json',
        'X-Api-Key': token
    }

    response = requests.get(API_URL + 'workspaces', headers=headers)
    data = response.json()

    workspaces = list(map(lambda x: { "id": x['id'], "name": x['name'] }, data))
    return workspaces

def get_all_projects(token, workspaceId):
    headers = {
        'content-type': 'application/json',
        'X-Api-Key': token
    }
    response = requests.get(API_URL + "workspaces/" + workspaceId + "/projects", headers=headers)
    data = response.json()

    projects = list(map(lambda x: { "id": x['id'], "name": x['name'] }, data))
    return projects

def put_time_entry(token, workspaceId, projectId, date_str, hours_spent):
    headers = {
        'content-type': 'application/json',
        'X-Api-Key': token
    }
    
    [start, end] = utils.get_timeentry_range(date_str, hours_spent)

    data = {
        "start": start,
        "billable": "true",
        "projectId": projectId,
        "end": end,
    }

    print(data)
    response = requests.post(API_URL + "workspaces/" + workspaceId + "/time-entries", json=data, headers=headers)
    data = response.json()

    print(data)