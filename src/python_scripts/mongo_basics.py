"""
instalar todos estos paquetes
pip install  pymongo pandas numpy ipython cython
pymongo es para mongo
pandas y numpy son para manejo de tablas (Dataframes)
ipython es una terminal de python para ir corriendo tu codigo (sirve para debugguear, cuando esta en produccion ya no es necesario)
cython es una libreria que ayuda a conectar python y c; es dependencia de pandas
"""

# importar los modulos que instalamos
import pymongo
import pandas
import numpy
from pymongo import MongoClient


#client = MongoClient('localhost', 27017)
client = MongoClient()
db = client.get_database('local')
coll=db.get_collection('startup_log')

