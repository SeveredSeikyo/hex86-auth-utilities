import bcrypt from 'bcrypt';

const hashPwd = async (saltRounds, password) => {
    return bcrypt.hash(password, saltRounds);
};

const comparePwd = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

export { hashPwd, comparePwd };
