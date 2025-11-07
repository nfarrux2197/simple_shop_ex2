from flask import Flask, render_template 
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shop.db'

db = SQLAlchemy(app)


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, default=0)
    product_count = db.Column(db.Integer, default=True)
    brand = db.Column(db.String(255))
    description = db.Column(db.Text)
    image = db.Column(db.Text, default='kalonka.jpg')


@app.route('/')
def index():
    popular_products = Product.query.all()
    return render_template('index.html', popular_products=popular_products)


@app.route('/product_detail/<int:id>')
def product_detail(id):
    product = Product.query.get_or_404(id)
    popular_products = Product.query.all()
    return render_template('product_detail.html', product=product, popular_products=popular_products)


@app.route('/product_list')
def product_list():
    products = Product.query.all()
    return render_template('product_list.html', products=products)


@app.route('/product_add')
def product_add():
    return render_template('product_add.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)
