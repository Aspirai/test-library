from flask import Flask, render_template, request

DATABASE = "register.db"  # 数据库文件名

app = Flask(__name__)

SPORTS = [
    "Basketball",
    "Soccer",
    "Ultimate Frisbsee",
]

REGISTRANTS = {}


@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)


@app.route("/register", methods=["POST"])
def register():

    name = request.form.get("name")
    if not name:
        return render_template("failure.html", message="Missing name")
    sport = request.form.get("sport")
    if not sport:
        return render_template("failure.html", message="Missing sport")
    if sport not in SPORTS:
        return render_template("failure.html", message="Invalid sport")

    REGISTRANTS[name] = sport

    return render_template("success.html")
    # if not request.form.get("name") or not request.form.get("sport"):
    #   return render_template("failure.html")
    # return render_template("success.html")


@app.route("/registrants")
def registrants():
    return render_template("registrants.html", registrants=REGISTRANTS)
