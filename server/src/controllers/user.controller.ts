const User = require("../models/user.model");
const showUser = async (req: any, res: any) => {
  User.findOne({ _id: req.params.id })
    .then((users: any) => res.json({ users }))
    .catch((error: any) => res.json({ message: "NOPE", error }));
};

const userIndex = async (req: any, res: any) => {
  User.find()
    .then((users: any) => res.json({ users }))
    .catch((error: any) => res.json({ message: "NOPE", error }));
};

const createUser = async (req: any, res: any) => {
  const { username, password, confirmPassword } = req.body;
  User.create({
    username,
    password,
    confirmPassword,
  })
    .then((user: any) => res.json({ user }))
    .catch((error: any) => res.json({ message: "NOPE", error }));
};

export default { showUser, userIndex, createUser };
