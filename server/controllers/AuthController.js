import User from '../models/User.js';

export const login = async (req, res) => {
    const {email} = req.body;
    try{
        const user = await User.find({email});
        if(!user){
            return res.status(404).json({message:'No user with this email'})
        }
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({message:'Login failed'})
    }
}