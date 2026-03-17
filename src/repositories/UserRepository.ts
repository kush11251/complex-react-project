import { ApiClient } from '../adapters/ApiClient';
import { User } from '../models/User';
/**
 * UserRepository provides methods for user-related data access
 */
class UserRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = new ApiClient();
  }
  /**
   * Retrieves a list of users
   * @returns {Promise<User[]>}
   */
  async getUsers(): Promise<User[]> {
    const response = await this.apiClient.get('users');
    return response.data;
  }
}
export { UserRepository };