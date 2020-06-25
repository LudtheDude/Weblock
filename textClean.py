from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

# need to find a way to get a website's 'text'

tokens = word_tokenize(text)

tokens = [w.lower() for w in tokens]

import string
table = str.maketrans('', '', string.punctuation)
stripped = [w.translate(table) for w in tokens]

words = [word for word in stripped if word.isalpha()]

stop_words = set(stopwords.words('english'))
words = [w for w in words if not w in stop_words]
print(words[:100])

porter = PorterStemmer()
stemmed = [porter.stem(word) for word in tokens]
print(stemmed[:100])
