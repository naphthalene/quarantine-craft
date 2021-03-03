import os
import yaml

class Economy:
    """
    Economy and balance data for all players
    """
    PLUGIN_PATH = 'plugins/Essentials'

    def __init__(self, server_config):
        self.data_dir = data_dir
        self.userdata_dir = os.path.join(self.data_dir, PLUGIN_PATH)

    async def scrape(self):
        """
        Analyze the contents of economy file
        """
        return {
            'total': '5600000',
            'players': [
                {
                    'id': 'abc',
                    'money': '123'
                }
            ]
        }
