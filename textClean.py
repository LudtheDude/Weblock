# CLEAN THE TEXT
import string
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

# need to find a way to get a website's 'text'

tokens = word_tokenize(text)

tokens = [w.lower() for w in tokens]

table = str.maketrans('', '', string.punctuation)
stripped = [w.translate(table) for w in tokens]

words = [word for word in stripped if word.isalpha()]

stop_words = set(stopwords.words('english'))
words = [w for w in words if not w in stop_words]


porter = PorterStemmer()
stemmed_text = [porter.stem(word) for word in tokens]



# SORT THE WORDS BY FREQUENCY

single_text = sorted(set(stemmed_text)) #remove duplicate words and sort
for x in single_text:
    freq_list = stemmed_text.count(x), x
