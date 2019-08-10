import env
import api

def main():
    local_env = env.read_local_env()
    token = local_env["token"]
    workspaces = api.get_all_workspaces(token)
    for workspace in workspaces:
        projects = api.get_all_projects(token, workspace['id'])
        project = list(filter(lambda x: x['name'] == 'TTT', projects))[0]
        api.put_time_entry(token, workspace['id'], project['id'], "2019-08-06", 4)


if __name__ == '__main__':
    main()