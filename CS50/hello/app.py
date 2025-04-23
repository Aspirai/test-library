from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    # if "name" in request.args:
    #     name = request.args["name"]
    # else:
    #     name = "world"

    # return render_template("index.html")

    if request.method == "POST":
        return render_template("greet.html", name=request.form.get("name", "world"))
    else:
        return render_template("index.html")


# @app.route("/greet", methods=["GET", "POST"])
# def greet():
#     name = request.form.get("name", "world")
#     return render_template("greet.html", name=name)
