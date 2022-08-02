import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

const usersRepository = UsersRepository.getInstance();
const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
const showUserProfileController = new ShowUserProfileController(
	showUserProfileUseCase
);

export { showUserProfileController };
