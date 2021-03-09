import os
import yaml

class McMMO:
    """
    Skills data
    """
    PLUGIN_PATH = 'plugins/mcMMO'
    USERDATA_FILE = ''

    def __init__(self, server_config):
        self.data_dir = data_dir
        self.userdata_dir = os.path.join(self.data_dir, PLUGIN_PATH)

    async def scrape(self):
        """
        Analyze the contents of player database file

        0       sigmat          user_id
        1       408             mining
        4       1059            mining_xp
        5       50              woodcutting
        6       1153            woodcutting_xp
        7       9               repair
        8       0               (?)
        9       29              herbalism
        10      130             excavation
        11      10              archery
        12      53              swords
        13      2               axes
        14      107             acrobatics
        15      1010            repair_xp
        16      0               (?)
        17      1497            herbalism_xp
        18      3112            excavation_xp
        19      670             archery_xp
        20      557             swords_xp
        21      555             axes_xp
        22      1491            acrobatics_xp
        24      1               (?) taming
        25      31              taming_xp
        26      0               (?)
        27      1614220086      (?) timestamp
        28      0               
        29      0               
        30      0               
        31      0               
        32      1614220606      
        34      0               
        35      0               
        36      0               
        37      1614740924      
        38      HEARTS          
        39      0               
        40      0               
        41      (uuid)          user_uuid
        42      0               
        43      0               
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
