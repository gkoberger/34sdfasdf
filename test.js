/*
 * @oas [get] /pet/{petId}
 * description: Returns all pets from the system that the user has access to
 * parameters:
 *   - (path) petId=2* {Integer} The pet ID
 *   - (query) limit {Integer:int32} The number of resources to return
 */
route.get("/pet/:petId", pet.show);
