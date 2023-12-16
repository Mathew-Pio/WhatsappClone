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
};

export const onBoardUser = async (req, res) => {
    try{
        const {email, name, about, profilePicture} = req.body;
        if(!email || !name || !profilePicture){
            return res.status(404).json({message:'Email, Name, Image are required.'})
        }
        const user = new User({
            email,
            name,
            about,
            profilePicture
        })
        await user.save();

        return res.status(201).json({user})
    }catch(err){

    }
}