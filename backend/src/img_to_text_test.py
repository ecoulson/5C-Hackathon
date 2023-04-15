import unittest
from img_to_text import pic_to_text

class TestImgToText(unittest.TestCase):        

    def test_pic_to_text(self):
        expected_text = 'OFFICIAL BALLOT'

        actual_text = pic_to_text('/Users/tobyfrank/Desktop/'
                                  'Spring 2023/5C-Hackathon/'
                                  'backend/src/ballot_imgs/b'
                                  'allot_test1.png', 'ballot_1_text.txt')
        
        self.assertTrue(expected_text in actual_text)

    def test_pic_to_text(self):
        expected_text = 'Demonstration General Election'

        actual_text = pic_to_text(('/Users/amytam/Desktop/'
                                  'HMC_2023_Spring/5C-Hac'
                                  'kathon/backend/src/bal'
                                  'lot_imgs/ballot_test3.'
                                  'jpeg'), 'ballot_3_text.txt')
        
        print(actual_text)
        self.assertTrue(expected_text in actual_text)
    

if __name__ == '__main__':
    unittest.main()

    
