import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(apiKey: string) {
    const apiKeys: string[] = ['api-key1', 'api-key2'];
    return apiKeys.find((key) => apiKey == key);
  }
}
