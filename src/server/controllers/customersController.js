import CustomerMolel from "../models/customersModel.js";


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export const saveCustomer = async (req, res) => {
    try {
        const { customerName, customerId, customerAddress } = req.body;
        const customerAvatar = `https://i.pravatar.cc/150?u=${generateRandomString(15)}`
        const newUser = new CustomerMolel({ customerName, customerId, customerAddress, customerAvatar })
        const savedUser = await newUser.save()
        res.status(200).send({ savedUser })

    } catch (error) {
        res.status(500).send({ error })
    }
}


export const getCustomers = async (req, res) => {
    try {
        const customer = await CustomerMolel.find()
        res.status(200).send(customer)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateCustomer = async (req, res) => {
    try {
      const { id } = req.params
      const updateData = req.body;
      const updateUser = await CustomerMolel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
      if (!updateUser) {
        return res.status(404).send({ message: "Customer not found" })
      }
      res.status(200).send({ message: "customer updated successfully", updateUser })
    } catch (error) {
      res.status(500).send({ error });
    }
  }


export const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await CustomerMolel.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(404).send({ message: "customer not found" })
        }
        res.status(200).send({ message: "customer deleted successfully", deletedUser })
    } catch (error) {
        res.status(500).send({ error })
    }
}