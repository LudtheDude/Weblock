# ADD BUTTON THAT BEGINS THIS SEQUENCE

from bs4 import BeautifulSoup
from bs4.element import Comment
import urllib.request
import string
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from googlesearch import search 

while True:

	# EXTRACT TEXT FILE FROM HTML OF WEBSITE

	def tag_visible(element):
	    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
	        return False
	    if isinstance(element, Comment):
	        return False
	    return True

	def text_from_html(body):
	    soup = BeautifulSoup(body, 'html.parser')
	    texts = soup.findAll(text=True)
	    visible_texts = filter(tag_visible, texts)  
	    return u" ".join(t.strip() for t in visible_texts)

	html = urllib.request.urlopen(url).read()
	full_text = text_from_html(html)


	# CLEAN UP THE TEXT FILE 

	tokens = word_tokenize(full_text)

	tokens = [w.lower() for w in tokens]

	table = str.maketrans('', '', string.punctuation)
	stripped = [w.translate(table) for w in tokens]

	words = [word for word in stripped if word.isalpha()]

	stop_words = set(stopwords.words('english'))
	words = [w for w in words if not w in stop_words]

	porter = PorterStemmer()
	stemmed_text = [porter.stem(word) for word in tokens]


	# SORT THE WORDS BY FREQUENCY

	single_text = sorted(set(stemmed_text))
	for x in single_text:
	    freq_list = stemmed_text.count(x), x


	# SEARCH THE WEB FOR NEW WEBSITES USING FREQUENT KEYWORDS
	
	i = 0

	while i < 3:
		query = freq_list[i]
		for url in search(query, tld="co.in", num=1, stop=1, pause=2): 
	    	print(url)
	    i = i + 1
