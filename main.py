import flask
import requests

def create_app():
    app = flask.Flask(__name__)

    @app.route('/check')
    def check():
        JsonStructure = {
            "Code": 200,
            "Status": "OK"
        }
        return JsonStructure
    
    @app.route('/info')
    def info():
        JsonStructure = {
            "Instancia": "1",
            "Curso": "Seminario de sistemas 1 A",
            "Grupo": "9",
        }
        return JsonStructure

    return app