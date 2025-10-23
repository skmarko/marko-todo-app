import axios from "axios";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const dummyUser = {
            id: Math.floor(Math.random() * 10000),
            email,
            username,
            password
        };
        const token = jwt.sign(dummyUser, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, user: dummyUser });
    } catch (err) {
        res.status(500).json({ message: "Signup failed" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Using API:", process.env.DUMMY_API);
        const response = await axios.post(`${process.env.DUMMY_API}/auth/login`, { username, password });
        const dummyData = response.data;

        const token = jwt.sign(
            { id: dummyData.id, username: dummyData.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token, user: { id: dummyData.id, username: dummyData.username } });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(401).json({ message: "Invalid DummyJSON credentials" });
    }
};
