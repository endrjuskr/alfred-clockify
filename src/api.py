from config import API_URL
import datetime
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
    response = requests.get(API_URL + f"workspaces/{workspaceId}/projects", headers=headers)
    data = response.json()

    projects = list(map(lambda x: { "id": x['id'], "name": x['name'] }, data))
    return projects

def put_time_entry(token, workspaceId, projectId, date, numHours):
    headers = {
        'content-type': 'application/json',
        'X-Api-Key': token
    }
    start_date = datetime.datetime.strptime(date, '%Y-%m-%d') +  datetime.timedelta(hours=7)
    end_date = start_date + datetime.timedelta(hours=numHours)

    date_format = "%Y-%m-%dT%H:%M:%S.%fZ"

    data = {
        "start": start_date.strftime(date_format),
        "billable": "true",
        "projectId": projectId,
        "end": end_date.strftime(date_format),
    }

    print(data)
    response = requests.post(API_URL + f"workspaces/{workspaceId}/time-entries", json=data, headers=headers)
    data = response.json()

    print(data)