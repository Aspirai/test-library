from flask import Flask, render_template, redirect, request, session
from flask_session import Session

app = Flask(__name__)

# 用户的会话数据应该在用户关闭浏览器后立即失效
app.config["SESSION_PERMANENT"] = False

# 告诉 Flask 将用户会话数据存储在服务器文件系统中，会话数据将被序列化并保存为文件，而不是存储在内存中，这样即使服务器重启，会话数据也不会丢失
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/")
def index():
    return render_template("index.html", name=session.get("name"))


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        session["name"] = request.form.get("name")
        return redirect("/")
    return render_template("login.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")
