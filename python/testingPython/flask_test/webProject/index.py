from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def entrada():
    return render_template('index.html')
if __name__ == '__main__':
   app.run(debug=True)


# @app.route('/home')
# def home():
#     return "This is home"

# @app.route('/profile')
# def profile():
#     return "This is profile"
    
# @app.route('/personal')
# def personal():
#     return "Here we do have our personal space "
    
# @app.route('/something')
# def posts():
#     return "And over here is the posts area"


# Has been a pleasure i5 2500k, you have hold some really good OC's.
# I'll bury you next to the Q6600, the two queens.