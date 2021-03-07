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

        # Calculate total server balance
        balance = sum([p['balance'] for p in players])

        return {
            'balance': balance,
            'players': players
        }

    async def scrape(self):
        scraped_data = await self._scrape()
        print(json.dumps(scraped_data))
