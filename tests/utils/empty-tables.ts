import { EntityManager, EntityTarget } from "typeorm";

/**
 * Due to foreign constraints and the TRUNCATE script limitation, some tables need to be cleared record by record
 * @param {EntityTarget[]} entityClasses: The TypeORM entity classes
 * @param {EntityManager} entityManager: The current Data Source's entity manager
 */
export default async function emptyTables(
  entityClasses: EntityTarget<unknown>[],
  entityManager: EntityManager
) {
  for (
    let entityClassIndex = 0;
    entityClassIndex < entityClasses.length;
    entityClassIndex += 1
  ) {
    // eslint-disable-next-line no-await-in-loop
    await entityManager
      .createQueryBuilder()
      .delete()
      .from(entityClasses[entityClassIndex])
      .where("true")
      .execute();
  }
}
