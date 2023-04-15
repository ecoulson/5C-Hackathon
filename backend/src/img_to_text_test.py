import unittest
from img_to_text import img_to_text

class TestImgToText(unittest.TestCase):        

    def test_img_to_text(self):
        expected_text = 'OFFICIAL BALLOT'

        actual_text = img_to_text('./ballot_imgs/ballot_test1.png', 
                                  'ballot_1_text.txt')
        
        self.assertTrue(expected_text in actual_text)

    def test_img_to_text_3(self):
        expected_text = 'Demonstration General Election'

        actual_text = img_to_text('./ballot_imgs/ballot_test3.jpeg', 
                                  'ballot_3_text.txt')
        
        # print(actual_text)
        self.assertTrue(expected_text in actual_text)

    def test_img_to_text_4(self):
        expected_text = 'Kelly Mark'

        actual_text = img_to_text('./ballot_imgs/ballot_test4.jpg', 
                                  'ballot_4_text.txt')
        
        # print(actual_text)
        self.assertTrue(expected_text in actual_text)
    

if __name__ == '__main__':
    unittest.main()

    
