import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@cicol.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Cathy Yang',
    email: 'cathy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ana Doe',
    email: 'ana@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
