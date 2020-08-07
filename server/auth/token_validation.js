import {verify} from 'jsonwebtoken';
export function checkToken(req,res,next){
    let token = req.get("authorization");
    console.log(token);
    if(token){
        token = token.slice(7);
        verify(token, process.env.JWT_KEY,(err,decoded)=>{
            if(err){
                res.json({
                    message:"invalid token"
                });
            }else{
                // console.log(decoded.result[0].email);

                next();
            }
        });
    }else{
        res.json({
            message:"UnAuthorized user!!!!"
        });
    }
}