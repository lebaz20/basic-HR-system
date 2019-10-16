# Database

We use a MySQL database instance to store data. The database is accessed through [sequelize](https://www.npmjs.com/package/sequelize).

## Migrations

Migrations are reversible transformations of the database between two states, acting like a version control system for the database structure.
Refer to the [sequelize manual](http://docs.sequelizejs.com/manual/migrations.html) for a more in-depth introduction to migrations.

### Creating a migration

To create a migration you can run the following command:

```
cd backend; yarn sequelize migration:generate --name add-user
```

In this example, it will create a migration in the `sequelize/Migrations` folder with a prefixed timestamp and the name of the migration, in this case it would be `20180823103138-add-subscrption-id.js`.

The migration has an `up` and `down` method, which should apply and undo the migration respectively.
For example, if you are adding a new column to a table, the `up` method should add the column, and the `down` method should remove it.

Both methods are passed a `QueryInterface` object, through which you interact with and modify the database.
Refer to the [sequelize docs](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html) for the available commands.

### Running a migration

In order to run outstanding migrations that have not yet been applied to the database, use the following command:

```
cd backend; yarn migrate
```

Refer to the [Running Migrations](http://docs.sequelizejs.com/manual/migrations.html#running-migrations) section of the sequelize docs for more information.

## Seeders

Seeders are similar to migrations, but contain actual data to initialise the database with rather than describing changes to its structure.

To apply the seeders to the database, run the following command:

```
cd backend; yarn seed
```

Note that one key difference between seeders and migrations are that sequelize does not (by default) keep track of which seeds have been applied.
