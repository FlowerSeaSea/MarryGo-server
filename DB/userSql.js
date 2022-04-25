// 验证数据库中用户数据
const User={
    // 查询用户手机
    queryUserTel(option){
        return 'select * from user where tel='+option.userTel+''; 
    },
    // 查询用户密码
    queryUserPwd(option){
        return 'select * from user where (tel='+option.userTel+') and pwd = '+option.userPwd+''; 
    },
    // 查询用户信息
    queryUserInfo(option){
        return 'select * from user where id='+option.uId+' '; 
    },
    // 新增用户
    inserData(option){
        let userTel=option.userTel,
        userPwd=option.userPwd || "123456",
        imgUrl=option.imgUrl || "",
        nickName=option.nickName || ""
        // 引入token包
        let jwt=require('jsonwebtoken')
        // 用户信息
        let payload={tel:userTel}
        // 口令
        let secret='wenquanhai'
        // 生成token
        let token=jwt.sign(payload,secret,{
            expiresIn:6000
        })

        return 'insert into user (tel,pwd,imgUrl,nickName,token) values ("' +userTel+ '","'+userPwd+'","'+imgUrl+'","'+nickName+'","'+token+'")';
    },

    updataInfo(option){
        let id=option.id,
        pwd=option.pwd,//之前的密码
        userPwd=option.userPwd || pwd
        return 'UPDATE user SET pwd='+userPwd+' WHERE id='+id+''
    },

    updataNickName(option){
        let nickName=option.nickName,
        id=option.id
        return 'UPDATE user SET nickName="'+nickName+'" WHERE id='+id+''
    },

    updataImgUrl(option){
        let id=option.id
        return 'UPDATE user SET imgUrl="'+option.config+'" WHERE id='+id+''
    }
}
exports = module.exports = User