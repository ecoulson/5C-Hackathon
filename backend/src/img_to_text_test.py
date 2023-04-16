import unittest
from img_to_text import img_file_to_text


class TestImgToText(unittest.TestCase):
    def test_img_to_text(self):
        expected_text = "OFFICIAL BALLOT"

        actual_text = img_file_to_text("../test/ballot_imgs/ballot_test1.png")

        # print(actual_text)
        self.assertTrue(expected_text in actual_text)

    def test_img_file_to_text_3(self):
        expected_text = "Demonstration General Election"

        actual_text = img_file_to_text("../test/ballot_imgs/ballot_test3.jpeg")

        # print(actual_text)
        self.assertTrue(expected_text in actual_text)

    def test_img_file_to_text_4(self):
        expected_text = "KELLY MARK"

        actual_text = img_file_to_text("../test/ballot_imgs/ballot_test4.jpg")

        # print(actual_text)
        self.assertTrue(expected_text in actual_text)

    def test_img_file_to_text_5(self):
        expected_text = "Official Primary Nonpartisan Ballot"

        actual_text = img_file_to_text("../test/ballot_imgs/ballot_test5.jpg")

        # print(actual_text)
        self.assertTrue(expected_text in actual_text)


if __name__ == "__main__":
    unittest.main()
