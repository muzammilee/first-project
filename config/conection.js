const mongoose =require ('mongoose')

async function dbConnect () {
    await mongoose.connect(process.env.MONGO_URL,{
        dbname:'HudaBooks'

    })

.then(()=>{
    console.log ('mongoDb connected sucessfully')
})

.catch((err)=>{
    console.log ('eroor when connecting MongoDb',err)
})

}

module.exports= dbConnect