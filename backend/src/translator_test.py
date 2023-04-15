import unittest
from translator import create_glossary, translate_text

ENGLISH_LANGUAGE_CODE = 'en'
FRENCH_LANGUAGE_CODE = 'fr'
PROJECT_ID = 'stellar-lock-383803'

# Defines the languages in the glossary
# This list must match the languages in the glossary
# Here, the glossary includes French and English
GLOSSARY_LANGS = [FRENCH_LANGUAGE_CODE, ENGLISH_LANGUAGE_CODE]
# Name that will be assigned to your project's glossary resource
GLOSSARY_NAME = "bistro-glossary"
# uri of .csv file uploaded to Cloud Storage
GLOSSARY_URI = "gs://cloud-samples-data/translation/bistro_glossary.csv"     

# Language Codes
# https://developers.google.com/admin-sdk/directory/v1/languages
create_glossary(GLOSSARY_LANGS, PROJECT_ID, GLOSSARY_NAME, GLOSSARY_URI) 

class TestImgToText(unittest.TestCase):        

    def test_translate_text(self):  

        translated_text = translate_text(
            path_to_text_file=('/Users/tobyfrank/Desktop/Spring 2023/5C-Hackathon/backend/src/ballot_text.txt'),
            source_language_code=FRENCH_LANGUAGE_CODE,
            target_language_code=ENGLISH_LANGUAGE_CODE,
            project_id=PROJECT_ID,
            glossary_name=GLOSSARY_NAME)
        
        print(translated_text)
        # self.assertTrue(expected_text in actual_text)
    

if __name__ == '__main__':
    unittest.main()

    
