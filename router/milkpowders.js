const expess = require("express")
const router=expess.Router()
const MilkPowder=require("../model/milkpowders")

router.get("/",async(req,res)=>{

    //console.log("get method")
    //res.send("Get request")
try{
const milkpowder=await MilkPowder.find()
res.json(milkpowder)

}catch(err){
res.send("Error ",err)
}

})

router.get("/:id",async(req,res)=>{
    const mpId=await MilkPowder.findById(req.params.id)
    try{
    res.json(mpId)}catch(err){
        res.send("Error ",err)
    }
})


router.post("/",async(req,res)=>{
    const mp=new MilkPowder({
        name:req.body.name,
        colour:req.body.colour,
        weight:req.body.weight,
        recommended:req.body.recommended
    })
    try{
        const m1=await mp.save()
        res.json(m1)

    }catch(err){
        res.send("Error ",err)
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const mpchId=await MilkPowder.findById(req.params.id)
    mpchId.weight=req.body.weight
    const m2=await mpchId.save()
    res.json(m2)
    }catch(err){
        res.send("eRROR")
    }
})

router.delete("/:id",async(req,res)=>{
    try{
    const mpdelId=await MilkPowder.findById(req.params.id)
    const m3=await mpdelId.remove()
    res.json(m3)
    }catch(err)
    {
        res.send("Error"+err)
    }
})
module.exports=router