import { ApiService } from "./Apiservice";
import { BaseEmployee, Developer, Manager } from "./Clases/BaseEmployee"; 
export class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {
    // Inyección de ApiService
  }

  async loadEmployeesFromApi(): Promise<void> {
    const users = await this.apiService.getUsers();
    // Crear 2 developers y 1 manager usando los primeros usuarios de la API
    if (users.length >= 3) {
      this.employees.push(
        new Developer(users[0], 1, ["TypeScript", "JavaScript"]),
        new Developer(users[1], 2, ["Python"]),
        new Manager(users[2], 3, Department.HR)
      );
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(emp => emp["id"] === id);
  }

  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }
}
