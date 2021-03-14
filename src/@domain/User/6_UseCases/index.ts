import {httpUserRepository} from "../5_infrastructure";
import GetListuserUsecase from "./GetListUserUseCase";

export const getListUserUsecase = () =>
	new GetListuserUsecase(httpUserRepository());
