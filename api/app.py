from flask import Flask, Response
app = Flask(__name__)

@app.route('/')
def home():
  return Response('home')

if __name__ == '__main__':
  app.run()
