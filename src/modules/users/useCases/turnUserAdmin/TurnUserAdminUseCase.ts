import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exist!");
    }

    Object.assign(user, {
      admin: true,
      update_at: new Date(),
    });

    return user;
  }
}

export { TurnUserAdminUseCase };
