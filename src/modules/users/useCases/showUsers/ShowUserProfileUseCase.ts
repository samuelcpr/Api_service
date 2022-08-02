import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/iusersRespository";

interface IRequest {
	user_id: string;
}

class ShowUserProfileUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ user_id }: IRequest): User {
		const user = this.usersRepository.findById(user_id);
		if (!user) {
			throw new Error("User not found");
		}
		return this.usersRepository.findById(user_id);
	}
}

export { ShowUserProfileUseCase };