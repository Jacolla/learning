from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Welcome to my Web page in Python'

@app.route('/home')
def home():
    return "This is home"

@app.route('/profile')
def profile():
    return "This is profile"
    
@app.route('/personal')
def personal():
    return "Here we do have our personal space "
    
@app.route('/posts')
def posts():
    return "And over here is the posts area"
    
@app.route('/comments')
def comments():
    return "Here goes comments of people."

# now i feel some shame tbh...