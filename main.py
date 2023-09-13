
"""
from flask import Flask, render_template, request
import numpy as np
import tensorflow as tf
from PIL import Image

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# The rest of your Flask code


# Load your trained model
model = tf.keras.models.load_model('new_test_model_cifar100.keras')

labels = [
    'apple', 'aquarium_fish', 'baby', 'bear', 'beaver', 'bed', 'bee', 'beetle',
    'bicycle', 'bottle', 'bowl', 'boy', 'bridge', 'bus', 'butterfly', 'camel',
    'can', 'castle', 'caterpillar', 'cattle', 'chair', 'chimpanzee', 'clock',
    'cloud', 'cockroach', 'couch', 'crab', 'crocodile', 'cup', 'dinosaur',
    'dolphin', 'elephant', 'flatfish', 'forest', 'fox', 'girl', 'hamster',
    'house', 'kangaroo', 'keyboard', 'lamp', 'lawn_mower', 'leopard', 'lion',
    'lizard', 'lobster', 'man', 'maple_tree', 'motorcycle', 'mountain', 'mouse',
    'mushroom', 'oak_tree', 'orange', 'orchid', 'otter', 'palm_tree', 'pear',
    'pickup_truck', 'pine_tree', 'plain', 'plate', 'poppy', 'porcupine',
    'possum', 'rabbit', 'raccoon', 'ray', 'road', 'rocket', 'rose',
    'sea', 'seal', 'shark', 'shrew', 'skunk', 'skyscraper', 'snail', 'snake',
    'spider', 'squirrel', 'streetcar', 'sunflower', 'sweet_pepper', 'table',
    'tank', 'telephone', 'television', 'tiger', 'tractor', 'train', 'trout',
    'tulip', 'turtle', 'wardrobe', 'whale', 'willow_tree', 'wolf', 'woman',
    'worm'
]

@app.route('/', methods=['GET', 'POST'])
def upload_predict():
    if request.method == 'POST':
        image_file = request.files['image']  # Get the uploaded image
        if image_file:
            image = Image.open(image_file)
            # Convert image to the right input shape for your model
            image = image.resize((32, 32))
            image = np.asarray(image)
            image = np.expand_dims(image, axis=0)
            prediction = model.predict(image).argmax()  # Predict the category
            return str(labels[prediction])
    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)
"""

from flask import Flask, render_template, request
import numpy as np
import tensorflow as tf
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load multiple models
models = {
    'model1': tf.keras.models.load_model('new_test_model_cifar100.keras'),
    # You can load more models like:
    'model2': tf.keras.models.load_model('complex_test_model2_cifar100.keras'),
    'model3': tf.keras.models.load_model('simple_test_model4_cifar100.keras')
}

labels = [
    'apple', 'aquarium_fish', 'baby', 'bear', 'beaver', 'bed', 'bee', 'beetle',
    'bicycle', 'bottle', 'bowl', 'boy', 'bridge', 'bus', 'butterfly', 'camel',
    'can', 'castle', 'caterpillar', 'cattle', 'chair', 'chimpanzee', 'clock',
    'cloud', 'cockroach', 'couch', 'crab', 'crocodile', 'cup', 'dinosaur',
    'dolphin', 'elephant', 'flatfish', 'forest', 'fox', 'girl', 'hamster',
    'house', 'kangaroo', 'keyboard', 'lamp', 'lawn_mower', 'leopard', 'lion',
    'lizard', 'lobster', 'man', 'maple_tree', 'motorcycle', 'mountain', 'mouse',
    'mushroom', 'oak_tree', 'orange', 'orchid', 'otter', 'palm_tree', 'pear',
    'pickup_truck', 'pine_tree', 'plain', 'plate', 'poppy', 'porcupine',
    'possum', 'rabbit', 'raccoon', 'ray', 'road', 'rocket', 'rose',
    'sea', 'seal', 'shark', 'shrew', 'skunk', 'skyscraper', 'snail', 'snake',
    'spider', 'squirrel', 'streetcar', 'sunflower', 'sweet_pepper', 'table',
    'tank', 'telephone', 'television', 'tiger', 'tractor', 'train', 'trout',
    'tulip', 'turtle', 'wardrobe', 'whale', 'willow_tree', 'wolf', 'woman',
    'worm'
]

@app.route('/', methods=['GET', 'POST'])
def upload_predict():
    if request.method == 'POST':
        image_file = request.files['image']  # Get the uploaded image
        selected_model = request.form.get('model', 'model1')  # Get the selected model identifier. Default to 'model1'.

        # Check if the model is available
        if selected_model not in models:
            return "Invalid model selected", 400

        if image_file:
            image = Image.open(image_file)
            image = image.resize((32, 32))
            image = np.asarray(image)
            image = np.expand_dims(image, axis=0)

            # Predict using the selected model
            prediction = models[selected_model].predict(image).argmax()
            return str(labels[prediction])
    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)
