from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def entrada():
    return render_template('index.html')
if __name__ == '__main__':
   app.run(debug=False)



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


#      i5 or i7?
# 6C 12T  vs 8C 16T

# problably the i5 10600k... or the 10700k?..