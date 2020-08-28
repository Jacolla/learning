from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def entrada():
    return render_template('index.html')
if __name__ == '__main__':
   app.run(debug=True)




# Creo que deberia fraccionarlo en partes, es decir, la barra una seccion,
# cursos otra seccion
# skills otra seccion.

# aprendiendo nuevo oficio para poder financiar mis estudios.

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
