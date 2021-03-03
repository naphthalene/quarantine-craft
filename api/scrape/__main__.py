import asyncio

from scrape import *

async def run():
    server = ServerConfig()
    data = await asyncio.gather(
        Economy(server).scrape(),
        # McMMO(server).scrape()
    )

asyncio.run(run())
