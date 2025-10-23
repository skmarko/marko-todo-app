import axios from "axios";

export const getTodos = async (req, res) => {
    try {
        const { id } = req.user;
        const { data } = await axios.get(`${process.env.DUMMY_API}/todos`);
        const userTodos = data.todos.filter(todo => todo.userId === id);
        console.log("data", data)
        res.json(data.todos);
    } catch (err) {
        console.error("Error in getTodos:", err.response?.data || err.message);
        res.status(500).json({ message: "Failed to fetch todos" });
    }
};

export const createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        const { id } = req.user;

        const { data } = await axios.post(`${process.env.DUMMY_API}/todos/add`, {
            todo: task,
            completed: false,
            userId: id,
        });

        res.json(data);
    } catch (err) {
        console.error("Error in createTodo:", err.response?.data || err.message);
        res.status(500).json({ message: "Failed to create todo" });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        await axios.delete(`${process.env.DUMMY_API}/todos/${todoId}`);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        console.error("Error in deleteTodo:", err.response?.data || err.message);
        res.status(500).json({ message: "Failed to delete todo" });
    }
};
