import IUserRepository from "../4_Repositories/IUserRepository";

export default class GetListuserUsecase {
  private _repository: IUserRepository;

  constructor(repository:IUserRepository) {
    this._repository = repository;
  }

  public async execute() {
    const data = await this._repository.listUser();
    return data;
  }
}
