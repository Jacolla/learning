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

# Still not ready at all, but i promise i'll be back

# Gotta re-install FLASK to keep going with this, or look up to do a new project


# nah forget all this shit, build a new one