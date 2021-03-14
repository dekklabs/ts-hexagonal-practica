import UserEntity, { IUser } from "./UserEntity";

export const userEntity = (params:IUser) =>
    new UserEntity({...params});