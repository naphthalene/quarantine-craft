import re
import os
import yaml
import json
import asyncio

class Economy:
    """
    Economy and balance data for all players
    """
    PLUGIN_PATH = 'plugins/Essentials'
    OUTPUT_FILE = 'v1/economy.json'

    def __init__(self, config):
        self.userdata_dir = os.path.join(
            config.data_dir,
            self.PLUGIN_PATH,
            'userdata'
        )
        self.output_file = os.path.join(config.web_dir, 'api', self.OUTPUT_FILE)

    async def _scrape(self):
        """
        Iterate over all of the user files to get player's balance
        """
        def _fmt_nick(nick):
            return re.sub(r'§[0-9a-f]([^§]+)', r'\g<1>', nick)

        async def _scrape_file(user_data_file):
            with open(user_data_file, 'r') as f:
                try:
                    user_data = yaml.safe_load(f)
                    return {
                        'id': _fmt_nick(user_data.get(
                            'nickname',
                            user_data.get(
                                'lastAccountName',
                                'Unknown'))),
                        'balance': float(user_data.get('money', '0.0'))
                    }
                except yaml.YAMLError as exc:
                    print(exc)

        players = await asyncio.gather(
            *[_scrape_file(os.path.join(self.userdata_dir, user_file))
              for user_file in os.listdir(self.userdata_dir)])

        return {
            'balance': sum([p['balance'] for p in players]),
            'players': players
        }

    async def scrape(self):
        """
        Generate a scrape and write it to output file
        """
        scraped_data = await self._scrape()
        with open(self.output_file, 'w') as f:
            json.dump(scraped_data, f)
