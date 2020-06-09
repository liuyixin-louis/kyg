#  导入:
from sqlalchemy import Column, String, create_engine,Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models import *


# # 创建对象的基类:
# Base = declarative_base()

# # 定义User对象:
# class Test(Base):
#     # 表的名字:
#     __tablename__ = 'test'

#     # 表的结构:
#     id = Column(Integer, primary_key=True)
#     name = Column(String(255))

# class Test(Base):
#     # 表的名字:
#     __tablename__ = 'test'

#     # 表的结构:
#     id = Column(Integer, primary_key=True)
#     name = Column(String(255))


