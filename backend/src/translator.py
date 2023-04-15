"""Converts from source language to target language.

The source text is located in a text file, and the target
text is also put into it's own specified text file.

    Example Usage:
        translate_text(
            path_to_text_file=(
                '/Users/tobyfrank/Desktop/Spring 2023/'
                '5C-Hackathon/backend/src/ballot_text.txt'),
            source_language_code=FRENCH_LANGUAGE_CODE,
            target_language_code=ENGLISH_LANGUAGE_CODE,
            project_id=PROJECT_ID,
            glossary_name=GLOSSARY_NAME
        )
"""
# Imports the Google Cloud client libraries
from google.cloud import translate_v3beta1 as translate

def create_glossary(languages, project_id, glossary_name, glossary_uri):
    """Creates a GCP glossary resource
    Assumes you've already manually uploaded a glossary to Cloud Storage

    ARGS
    languages: list of languages in the glossary
    project_id: GCP project id
    glossary_name: name you want to give this glossary resource
    glossary_uri: the uri of the glossary you uploaded to Cloud Storage

    RETURNS
    nothing
    """

    # Instantiates a client
    client = translate.TranslationServiceClient()

    # Designates the data center location that you want to use
    location = "us-central1"

    # Set glossary resource name
    name = client.glossary_path(project_id, location, glossary_name)

    # Set language codes
    language_codes_set = translate.Glossary.LanguageCodesSet(
        language_codes=languages
    )

    gcs_source = translate.GcsSource(input_uri=glossary_uri)

    input_config = translate.GlossaryInputConfig(gcs_source=gcs_source)

    # Set glossary resource information
    glossary = translate.Glossary(
        name=name, language_codes_set=language_codes_set, input_config=input_config
    )

    parent = f"projects/{project_id}/locations/{location}"

    # Create glossary resource
    # Handle exception for case in which a glossary
    #  with glossary_name already exists
    try:
        operation = client.create_glossary(parent=parent, glossary=glossary)
        operation.result(timeout=90)
        print("Created glossary " + glossary_name + ".")
    except Exception as e:
        print(e)

def translate_text(
    path_to_text_file, source_language_code, target_language_code, project_id, glossary_name, output_file
):
    """Translates text to a given language using a glossary

    ARGS
    path_to_text_file: path for the text file to translate
    source_language_code: language of input text
    target_language_code: language of output text
    project_id: GCP project id
    glossary_name: name you gave your project's glossary
        resource when you created it
    output_file: the name of the file to write the translated text to

    RETURNS
    String of translated text
    """

    with open(path_to_text_file, "r") as text_file:
        text = text_file.read()

    # Instantiates a client
    client = translate.TranslationServiceClient()

    # Designates the data center location that you want to use
    location = "us-central1"

    glossary = client.glossary_path(project_id, location, glossary_name)

    glossary_config = translate.TranslateTextGlossaryConfig(glossary=glossary)

    parent = f"projects/{project_id}/locations/{location}"

    result = client.translate_text(
        request={
            "parent": parent,
            "contents": [text],
            "mime_type": "text/plain",  # mime types: text/plain, text/html
            "source_language_code": source_language_code,
            "target_language_code": target_language_code,
            "glossary_config": glossary_config,
        }
    )

    translation = result.glossary_translations[0].translated_text

    with open(output_file, "w") as text_file:
        text_file.writelines(translation)

    # Extract translated text from API response
    return translation

def translate_text_str(
    text_to_translate:str, source_language_code, target_language_code, project_id, glossary_name, output_file
):
    """Translates text to a given language using a glossary

    ARGS
    path_to_text_file: path for the text file to translate
    source_language_code: language of input text
    target_language_code: language of output text
    project_id: GCP project id
    glossary_name: name you gave your project's glossary
        resource when you created it
    output_file: the name of the file to write the translated text to

    RETURNS
    String of translated text
    """
    text = text_to_translate

    # Instantiates a client
    client = translate.TranslationServiceClient()

    # Designates the data center location that you want to use
    location = "us-central1"

    glossary = client.glossary_path(project_id, location, glossary_name)

    glossary_config = translate.TranslateTextGlossaryConfig(glossary=glossary)

    parent = f"projects/{project_id}/locations/{location}"

    result = client.translate_text(
        request={
            "parent": parent,
            "contents": [text],
            "mime_type": "text/plain",  # mime types: text/plain, text/html
            "source_language_code": source_language_code,
            "target_language_code": target_language_code,
            "glossary_config": glossary_config,
        }
    )

    translation = result.glossary_translations[0].translated_text

    with open(output_file, "w") as text_file:
        text_file.writelines(translation)

    # Extract translated text from API response
    return translation
