from flask import Flask, render_template
app = Flask(__name__)
@app.route('/entrada')
def home():
    return render_template("home.html")
if __name__ == '__main__':
   app.run()




# @app.route('/home')
# def home():
#     return "This is home"

# @app.route('/profile')
# def profile():
#     return "This is profile"
    
# @app.route('/personal')
# def personal():
#     return "Here we do have our personal space "
    
# @app.route('/posts')
# def posts():
#     return "And over here is the posts area"
    
# @app.route('/comments')
# def comments():
#     return "Here goes comments of people."
