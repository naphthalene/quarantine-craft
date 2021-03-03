#!/usr/bin/env python

from distutils.core import setup

setup(
    py_modules=[
        'scrape'
    ],
    install_requires=[
        'Click',
    ],
    entry_points='''
        [console_scripts]
        mc_scraper=mc_scraper:cli
    ''',
)


setup(
    name='mc_scrape',
    version='0.1.0',
    description='Collect minecraft server data, generate',
    author='Pasha Sadikov',
    author_email='sigmat@pm.me',
    url='https://sr.ht/~sigmat/quarantine-craft/',
    packages=['distutils', 'distutils.command'],
)
