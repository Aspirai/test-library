import sqlite3

conn = sqlite3.connect("register.db")
conn.execute(
    "CREATE TABLE register (id INT AUTO_INCREMENT PRIMARY KEY,name TEXT NOT NULL, sport TEXT NOT NULL)"
)
conn.close()
