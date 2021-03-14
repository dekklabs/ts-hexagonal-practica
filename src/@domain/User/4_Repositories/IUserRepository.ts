import {IUser} from "../2_Entities/UserEntity";

export default interface IUserRepository {
	listUser():Promise<IUser[]>
}
