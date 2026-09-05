const userModel = require("../model/userModel");

// CREATE USER
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({ name, email, password });
        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET SINGLE USER
exports.getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User retrieved successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE USER
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updated = await userModel.findByIdAndUpdate(
            id,
            { name, email, password },
            { returnDocument: 'after', runValidators: true }   // ← fixed
        );
        if (!updated) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User updated successfully",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await userModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User deleted successfully",
            data: deleted
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};