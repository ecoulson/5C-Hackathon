"""Converts text from an image to a string.

    Example Usage:
         img_to_text('/Users/tobyfrank/Desktop/'
                     'Spring 2023/5C-Hackathon/'
                     'backend/src/ballot_imgs/b'
                     'allot_test1.png', 'ballot_text.txt')
"""

from google.cloud import vision
import io


def img_file_to_text(infile: str) -> str:
    """Detects text in an image file

    Args:
        infile: a string of the path to image file.

    Returns a string of text detected in image.
    """

    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # Opens the input image file
    with io.open(infile, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # For dense text, use document_text_detection
    # For less dense text, use text_detection
    response = client.document_text_detection(image=image)
    text = response.full_text_annotation.text

    return text
