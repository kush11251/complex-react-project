import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';
/**
 * UserService provides methods for user-related operations
 */
class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  /**
   * Retrieves a list of users
   * @returns {Promise<User[]>}
   */
  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
export { UserService };