# coding: utf-8
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Table, Text
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



class Forum(db.Model):
    __tablename__ = 'forum'

    forum_id = db.Column(db.Integer, primary_key=True)
    forum_name = db.Column(db.String(255, 'utf8_general_ci'))
    OwnUserID = db.Column(db.ForeignKey('user.user_id'), index=True)
    introduce = db.Column(db.String(255))
    picture = db.Column(db.String(255))
    CreateTime = db.Column(db.DateTime)

    user = db.relationship('User', primaryjoin='Forum.OwnUserID == User.user_id', backref='forums')



class Goutu(db.Model):
    __tablename__ = 'goutu'

    goutu_id = db.Column(db.Integer, primary_key=True)
    text_id = db.Column(db.ForeignKey('resource.reosurce_id'), index=True)
    CreateTime = db.Column(db.DateTime)
    paper_id = db.Column(db.ForeignKey('resource.reosurce_id', ondelete='RESTRICT', onupdate='RESTRICT'), index=True)
    title = db.Column(db.String(255))

    paper = db.relationship('Resource', primaryjoin='Goutu.paper_id == Resource.reosurce_id', backref='resource_goutus')
    text = db.relationship('Resource', primaryjoin='Goutu.text_id == Resource.reosurce_id', backref='resource_goutus_0')



t_goutu_resource_link = db.Table(
    'goutu_resource_link',
    db.Column('id', db.Integer),
    db.Column('goutu_id', db.ForeignKey('goutu.goutu_id'), index=True),
    db.Column('resource_id', db.ForeignKey('resource.reosurce_id'), index=True)
)



class Resource(db.Model):
    __tablename__ = 'resource'

    reosurce_id = db.Column(db.Integer, primary_key=True)
    xueke_id = db.Column(db.ForeignKey('xueke.xueke_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)
    down_count = db.Column(db.Integer)
    link_path = db.Column(db.String(255, 'utf8_general_ci'))
    author_id = db.Column(db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)
    type = db.Column(db.String(255, 'utf8_general_ci'))
    introduce = db.Column(db.String(255))
    resource_name = db.Column(db.String(255))
    uploadTime = db.Column(db.DateTime)

    author = db.relationship('User', primaryjoin='Resource.author_id == User.user_id', backref='resources')
    xueke = db.relationship('Xueke', primaryjoin='Resource.xueke_id == Xueke.xueke_id', backref='resources')



class Tiezi(db.Model):
    __tablename__ = 'tiezi'

    tieziID = db.Column(db.Integer, primary_key=True)
    ForumID = db.Column(db.ForeignKey('forum.forum_id'), index=True)
    createtime = db.Column(db.Integer, nullable=False, index=True)
    content = db.Column(db.String(collation='utf8_general_ci'))
    CreateUserID = db.Column(db.ForeignKey('user.user_id'), index=True)

    user = db.relationship('User', primaryjoin='Tiezi.CreateUserID == User.user_id', backref='tiezis')
    forum = db.relationship('Forum', primaryjoin='Tiezi.ForumID == Forum.forum_id', backref='tiezis')



class User(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.Integer, primary_key=True)
    open_id = db.Column(db.Integer)
    phone = db.Column(db.String(0))
    Name = db.Column(db.String(255))



class UserJoinForum(db.Model):
    __tablename__ = 'user_join_forum'

    join_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)
    forum_id = db.Column(db.ForeignKey('forum.forum_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)

    forum = db.relationship('Forum', primaryjoin='UserJoinForum.forum_id == Forum.forum_id', backref='user_join_forums')
    user = db.relationship('User', primaryjoin='UserJoinForum.user_id == User.user_id', backref='user_join_forums')



class Xueke(db.Model):
    __tablename__ = 'xueke'

    xueke_id = db.Column(db.Integer, primary_key=True, index=True)
    parent_id = db.Column(db.Integer)
    level = db.Column(db.Integer)
    name = db.Column(db.String(255))
    introduce = db.Column(db.Text(collation='utf8_general_ci'))
