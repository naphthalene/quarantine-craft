import os

from .economy import Economy
from .mcmmo import McMMO

class ServerConfig:
    """
    The configuration expects environment variables to be set
    Source /etc/default/minecraft or set the manually
    """
    def __init__(self):
        print(os.environ)
        self.data_dir = os.environ['DATA_DIR']
        self.config_dir = os.environ['CONFIG_DIR']
        self.overlay_dir = os.environ['OVERLAY_DIR']

def run():
    server = ServerConfig()
    data = asyncio.run(asyncio.gather(
        Economy(server).scrape(),
        # McMMO(server).scrape()
    ))
    print(data)
