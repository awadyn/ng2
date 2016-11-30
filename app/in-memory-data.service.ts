/**
 *  class that primes an in-memory database
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {first_name: 'Yara', last_name: 'Awad', role: 'ILI', email: 'awadyn@bu.edu', password: 'somepassword', pin: 12345, id: 1},
            {first_name: 'Antonio', last_name: 'Nehme', role: 'ILI', email: 'anehme@interactivelife.com', password: 'somepassword', pin: 123456, id: 2},
            {first_name: 'Adnan', last_name: 'Utayyim', role: 'ILI', email: 'mmu00@mail.aub.edu', password: 'somepassword', pin: 1234567, id: 3}
        ];
        return {users};
    }
}
