import csv
import json
import pandas as pd
import sys, getopt, pprint
from pymongo import MongoClient
# CSV to JSON
csvpath = "/Users/Kyung/Documents/dataviz_data.csv"
csvfile = open(csvpath, "r")
reader = csv.DictReader(csvfile)
mongo_client=MongoClient()
db=mongo_client.datavizdb
db.data.drop()
header= ["eventid", "country", "country_txt", "latitude", "longitude", "attacktype", "targtype", "nkill", "nwound"]

for each in reader:
    row={}
    for field in header:
        row[field]=each[field]

    db.data.insert(row)
