import os
import asyncio

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

async def run():
    config = ServerConfig()
    await asyncio.gather(
        Economy(config).scrape(),
        # McMMO(config).scrape()
    )
