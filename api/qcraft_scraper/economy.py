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
    SCHEMA_FILE = 'economy.json'

    def __init__(self, config):
        self.config = config
        self.worth_file = os.path.join(
            self.config.overlay_dir,
            self.PLUGIN_PATH,
            'worth.yml'
        )
        self.userdata_dir = os.path.join(
            self.config.overlay_dir,
            self.PLUGIN_PATH,
            'userdata'
        )
        self.output_file = os.path.join(
            self.config.web_dir,
            'api',
            self.OUTPUT_FILE)

    async def scrape(self):
        """
        Iterate over all of the user files to get player's balance
        """
        def _fmt_nick(nick):
            return re.sub(r'§[0-9a-f]([^§]+)', r'\g<1>', nick)

        async def _scrape_user_data_file(user_data_file):
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
                    raise

        async def _scrape_worth_file(worth_file):
            with open(worth_file, 'r') as f:
                try:
                    worth = yaml.safe_load(f)
                    return [
                        {
                            'id': item,
                            'worth': price
                        } for (item, price) in worth['worth'].items()
                    ]
                except yaml.YAMLError as exc:
                    print(exc)
                    raise

        players = await asyncio.gather(
            *[_scrape_user_data_file(os.path.join(self.userdata_dir, user_file))
              for user_file in os.listdir(self.userdata_dir)])

        items = await _scrape_worth_file(self.worth_file)

        data = {
            'balance': sum([p['balance'] for p in players]),
            'players': players,
            'items': items
        }
        print(data)
        self.config.output(self.SCHEMA_FILE, self.output_file, data)
