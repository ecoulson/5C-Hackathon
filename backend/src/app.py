import json
from img_to_text import img_file_to_text
from translator import translate_text_str
from text_to_speech import synthesize_text
from flask import Flask, request, Response
import os

ENGLISH_LANGUAGE_CODE = "en"
FRENCH_LANGUAGE_CODE = "fr"
PROJECT_ID = "stellar-lock-383803"

# Defines the languages in the glossary
# This list must match the languages in the glossary
# Here, the glossary includes French and English
GLOSSARY_LANGS = [FRENCH_LANGUAGE_CODE, ENGLISH_LANGUAGE_CODE]
# Name that will be assigned to your project's glossary resource
GLOSSARY_NAME = "bistro-glossary"
# uri of .csv file uploaded to Cloud Storage
GLOSSARY_URI = "gs://cloud-samples-data/translation/bistro_glossary.csv"

app = Flask(__name__, static_folder="../public", static_url_path="")


@app.route("/5c-hack-api", methods=["OPTIONS"])
def options_handler():
    response = Response("")
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/5c-hack-api", methods=["POST"])
def post_handler():
    initial_code = request.args["initialCode"]
    translation_code = request.args["translationCode"]
    image = request.files["image"]
    image_path = "../public/images/" + image.filename
    image.save(image_path)
    text = img_file_to_text(image_path)
    translated_text = translate_text_str(
        text_to_translate=text,
        source_language_code=initial_code,
        target_language_code=translation_code,
        project_id=PROJECT_ID,
        glossary_name=GLOSSARY_NAME,
    )
    audio_path = "audios/" + os.path.splitext(image.filename)[0] + ".mp3"
    synthesize_text(translated_text, translation_code, "../public/" + audio_path)
    response = Response(json.dumps({"text": translated_text, "audio_path": audio_path}))
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    response.headers["Content-Type"] = "application/json"
    return response
