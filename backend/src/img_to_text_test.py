import unittest
from img_to_text import detect_text, pic_to_text

class TestImgToText(unittest.TestCase):        

    def test_pic_to_text(self):
        expected_text = 'OFFICIAL BALLOT'

        actual_text = pic_to_text('/Users/tobyfrank/Desktop/'
                                  'Spring 2023/5C-Hackathon/'
                                  'backend/src/ballot_imgs/b'
                                  'allot_test1.png')
        
        self.assertTrue(expected_text in actual_text)
    

if __name__ == '__main__':
    unittest.main()

    
