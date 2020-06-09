from flask import Flask,jsonify
from sqlalchemy import create_engine,Integer
from sqlalchemy.orm import sessionmaker
from models import *

app = Flask(__name__)
# db = SQLAlchemy(app)

def gen_xueke_tree(s):
    xueke_tree = {}
    for instance in s.query(Xueke).order_by(Xueke.xueke_id):
        # print(instance.xueke_id)
        if(instance.level=="0"):
            # print()
            xueke_tree[instance.xueke_id] = {"id":instance.xueke_id,"title":instance.name,"childModel":[]}
        if(instance.level=="1"):
            xueke_tree[instance.parent_id]["childModel"].append({
                "id":instance.xueke_id,
                "title":instance.name
            })
    res = {"code":"success","res":(list(xueke_tree.values()))}
    # print (res)
    return res
    # print (xueke_tree)

# 初始化数据库连接:
engine = create_engine('sqlite:///test.sqlite')
# 创建DBSession类型:
DBSession = sessionmaker(bind=engine)

# gen_xueke_tree(s)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/get_xueke")
def get_xueke():
    s = DBSession()
    # res = gen_xueke_tree(s)
    xueke_tree = {}
    for instance in s.query(Xueke).order_by(Xueke.xueke_id):
        # print(instance.xueke_id)
        if(instance.level=="0"):
            # print()
            xueke_tree[instance.xueke_id] = {"id":instance.xueke_id,"title":instance.name,"childModel":[]}
        if(instance.level=="1"):
            xueke_tree[instance.parent_id]["childModel"].append({
                "id":instance.xueke_id,
                "title":instance.name
            })
    res = {"code":"success","res":(list(xueke_tree.values()).copy())}
    s.close()
    # print (res)
    # return res
    # res = {"asdas":"asdad"}
    return jsonify((res))

@app.route("/upload",methods=['POST'])
def upload():
    # f = request.files['content']
    # user_input = request.form.get("name")
    # basepath = os.path.dirname(__file__)  # 当前文件所在路径
    # src_imgname = str(uuid.uuid1()) + ".jpg"
    # upload_path = os.path.join(basepath, 'static/resImg/')
    # # if os.path.exists(upload_path)==False:
    # #     os.makedirs(upload_path)
    # f.save(upload_path + src_imgname)
    # # im = cv2.imread(upload_path + src_imgname, 0)
    # # save_path = os.path.join(basepath, 'static/resImg/')
    # # if os.path.exists(save_path) == False:
    # #     os.makedirs(save_path)
    # # save_imgname = str(uuid.uuid1()) + ".jpg"
    # # cv2.imwrite(save_path + save_imgname, im)
    # # resSets["value"] = 10
    # resSets = {}
    # resSets["resurl"] = "http://127.0.0.1:5000" +'/static/resImg/' + resSets
    # return json.dumps(resSets, ensure_ascii=False)
    # print(request)
    print('123')
    pass





if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=5000)


    # class Role(db.Model):
#     __tablename__ = 'roles'
#     id = db.Column(db.Integer, )
#     name = db.Column(db.String(64), unique=True)
#     def __repr__(self):
#         return '<Role %r>' % self.name
        
# class User(db.Model):
#     __tablename__ = 'user'
#     user_id = db.Column(db.Integer, )
#     open_id = db.Column(db.Integer)
#     phone = db.Column(db.VarChar)
#     self_introduction = db.Column(db.Integer)
#     Name = db.Column(db.Integer, )

#     def __repr__(self):
#         return '<User %r>' % self.Name


# class Xueke(db.Model):
#     __tablename__ = "xueke"
#     xueke_id = db.Column(db.Integer, primary_key=True)
#     parent_id = db.Column(db.Integer )
#     level = db.Column(db.smallint )
#     name = db.Column(db.VarChar )
#     introduce = db.Column(db.text )
#     def __repr__(self):
#         return '<User %r>' % self.name



# app.config['SQLALCHEMY_DATABASE_URI'] =\
# "mysql://root:zxcxzcz123@localhost/kyg"
# # app.config['SQLALCHEMY_DATABASE_URI'] =\
# # 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
# app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

