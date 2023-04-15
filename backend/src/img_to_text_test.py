import unittest
from img_to_text import detect_text

class TestImgToText(unittest.TestCase):

    def test_detect_text(self):
        expected_text = 'OFFICIAL BALLOT'

        actual_text = detect_text('/Users/tobyfrank/Desktop/'
                                  'Spring 2023/5C-Hackathon/'
                                  'backend/src/ballot_imgs/b'
                                  'allot_test1.png', "ballot_text.txt")
        print("actual_text", actual_text)
        self.assertTrue(expected_text in actual_text)

if __name__ == '__main__':
    unittest.main()

    
