import unittest
from document_img_to_text import quickstart

# TODO(developer): Uncomment these variables before running the sample.
project_id = 'stellar-lock-383803'
location = 'us'
processor_id = 'fe10beffb1e51643'
file_path = './ballot_imgs/ballot_test5.jpg'
mime_type = 'image/jpeg' # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types

class TestDocumentImgToText(unittest.TestCase):        

    def test_document_img_to_text(self):
        # expected_text = 'OFFICIAL BALLOT'

        actual_text = quickstart(project_id, location, processor_id, file_path,
                                 mime_type, 'ballot_5_doc_text.txt')

        # print(actual_text)
        # self.assertTrue(expected_text in actual_text)

if __name__ == '__main__':
    unittest.main()

    
