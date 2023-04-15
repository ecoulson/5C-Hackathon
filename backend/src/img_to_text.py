from google.cloud import vision
import io

def detect_text(path: str, output_file: str):
    """Detects text in the file."""
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    image_text = []
    for text in texts:
        image_text.append(text.description)

    paragraph = image_text[0]
    paragraph = paragraph.replace('\n', ' ')
    with open(output_file, "w") as text_file:
        text_file.writelines(paragraph)

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))
    
    return paragraph