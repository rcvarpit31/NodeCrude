const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const { genrateToken } = require("../config/jwtToken");
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findeUser = await User.findOne({ email: email });
    if (!findeUser) {
        // Create a new User
        const newUser = await User.create(req.body);

        res.json(newUser);
    } else {
        throw new Error("User Alredy Exists")
    }
})

// for lgin  user
const loginUserCtrl = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        // check if  the user exists or not 
        const findeUser = await User.findOne({ email });
        // console.log(findeUser.isPasswordMatched(password),"vfsds"); 
        if (findeUser && await findeUser.isPasswordMatched(password)) {
            res.json(
                {
                    id: findeUser?._id,
                    username: findeUser?.username,
                    lastname: findeUser?.lastname,
                    email: findeUser?.email,
                    mobile: findeUser?.mobile,
                    token: genrateToken(findeUser?._id)
                }
            );
        } else {
            throw new Error("Invalid credenitals");
        }
    }
);
// get All user  user 
  const getAllUser =  asyncHandler( async (req,res)=>{
try {
    const user = await  User.find();
    res.json(user);
    
} catch (error) {
     throw new Error(error)
    
}  })

// get a single user 
 const getSigleUser = asyncHandler( async (req,res)=>{
     const {id} = req.params;
     console.log(id);
    try {
        const singleUser = await User.findById(id);
        res.json(singleUser)
    } catch (error) {
        throw new Error(error)
        
    }

 })

 // delete a single user 
 const deleteSigleUser = asyncHandler( async (req,res)=>{
    const {id} = req.params;
   try {
       const singleUser = await User.findByIdAndDelete(id);
       res.json(singleUser)
   } catch (error) {
       throw new Error(error)
       
   }

})

 // updat a single user 
 const updateSigleUser = asyncHandler( async (req,res)=>{
    const {id} = req.params;
   try {
       const singleUser = await User.findByIdAndUpdate(id,{
        firstname:req?.body.firstname,
        lastname:req?.body.lastname,
        email:req?.body.email,
        mobile:req?.body.mobile,
       },{new:true,}
       );
       res.json(singleUser)
   } catch (error) {
       throw new Error(error)
       
   }

})
module.exports = { createUser, 
    loginUserCtrl,
    getAllUser,
    getSigleUser,
    deleteSigleUser,
    updateSigleUser
 };