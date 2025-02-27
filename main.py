import flask

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

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)
