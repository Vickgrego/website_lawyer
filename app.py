from tempfile import mkdtemp
import os
from flask import Flask, request, url_for, jsonify
from flask_basicauth import BasicAuth
from flask_session import Session

from helpers import *


ERROR = "I feel disturbance in force {}"

# configure application
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/")
def contacts():
    return render_template("contacts.html")


@app.route("/law")
def law():
    return render_template("law.html")


@app.route("/mediation")
def mediation():
    return render_template("mediation.html")


@app.route("/school")
def school():
    return render_template("school.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True)
