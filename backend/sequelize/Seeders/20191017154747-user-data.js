import { POSITIONS, DEPARTMENTS } from "../../src/entity/User";

/*
Seeder for the `source` entity.
*/

export default {
  up: queryInterface =>
    queryInterface.bulkInsert("user", [
      {
        id: 1,
        name: "Admin",
        email: "admin@test.com",
        password:
          "$2a$10$sTCLVrUzMpTZgzifk0jW3e8fIsu9hP6CmThvEqGNOJrG51i7zgPEe", // password is 1234
        position: POSITIONS.HR_ASSISSTANT,
        department: DEPARTMENTS.HR,
        manager: null
      }
    ]),

  down: queryInterface => queryInterface.bulkDelete("user", null, {})
};
