const {Router} = require("express")
const router = new Router()
const { v2, auth } = require('osu-api-extended')



router.get("/oAuth",(req,res)=>{
  try{
    const redirect_page = () => {
      const SCOPE_LIST = ['identify' , 'public']
      // Auth via client
      const url = auth.build_url(23699, 'http://localhost:3000/user', SCOPE_LIST)
      console.log(url)
      return url;
    }
    res.json({url:redirect_page()})
  }catch(e){
    console.error(e)
  }
})
router.get("/oAuth/callback",async(req,res)=>{
  try{
    console.log(req.query.code)
    const auth_page = async (code) => {
      const user_data = await auth.authorize(code, 'osu', 23699, 'o7II0oTGVIFponfQOi6zaBOwX1yYOLt3EvaUMoo7', 'http://localhost:3000/user')
      return user_data;
    };
    const data = await auth_page(req.query.code)
    console.log(data)
    res.json(data)
  }catch(e){
    console.error(e)
  }
})









module.exports = router

