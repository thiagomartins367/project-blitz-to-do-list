import IUser from './IUser';

interface IUSerDb extends Omit<IUser, 'userId' | 'fisrtName' | 'lastName'> {
  user_id: number,
  first_name: string,
  last_name: string,
}

export default IUSerDb;