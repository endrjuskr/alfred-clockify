import json

def read_local_env():
    with open('.env') as json_file:
        data = json.load(json_file)
        return data