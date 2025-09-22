import jwt from 'jsonwebtoken';

const jwtSign = (payload, key) => {
    return jwt.sign(payload, key);
};

const jwtVerify = (jwtToken, key) => {
    return jwt.verify(jwtToken, key);
};

export { jwtSign, jwtVerify };
