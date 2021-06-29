import os
import json
import asyncio
import pkg_resources
from jsonschema import (
    validate,
    ValidationError,
    SchemaError,
)
from .economy import Economy
from .mcmmo import McMMO

class ServerConfig:
    """
    The configuration expects environment variables to be set
    Source /etc/default/minecraft or set the manually
    """
    def __init__(self):
        self.data_dir = os.environ['DATA_DIR']
        self.config_dir = os.environ['CONFIG_DIR']
        self.overlay_dir = os.environ['OVERLAY_DIR']
        self.web_dir = os.environ['WEB_DIR']

    @classmethod
    def validate(cls, schema_file, data):
        """
        Validate data against schema
        """
        schema = json.loads(pkg_resources.resource_string(
            __name__,
            os.path.join('schemas', schema_file)))
        validate(instance=data, schema=schema)

    @classmethod
    def output(cls, schema_file, output_file, data):
        """
        Make the data available to the web server
        """
        try:
            cls.validate(schema_file, data)
            with open(output_file, 'w') as f:
                print("Here")
                json.dump(data, f)
        except (ValidationError, SchemaError) as e:
            print(f"Validation error:\n{e.message}")

async def _run():
    config = ServerConfig()
    await asyncio.gather(
        Economy(config).scrape(),
        McMMO(config).scrape()
    )

def run():
    asyncio.run(_run())
