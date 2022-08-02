import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { ListAllUsersController } from "./ListAllUserController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };
