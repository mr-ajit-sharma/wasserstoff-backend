import User from '../models/user.model.js'

const gettingData = async (req, res) => {
  try {
    const data = await User.find()
    if(!data){
      res.status(404).json(console.log("data not found"))
    }
    console.log('User data:', data)
 return    res.status(200).json(data)
  } catch (error) {
    console.error('Error in fetching the data:', error)
    return res.status(500).json({ message: 'Error fetching data' })
  }
}

export default gettingData
