### DATABASE FUNDAMENTALS FINAL PROJECT

# APPLYING MIGRATIONS
In order to apply new migrations run this command:
```
npx prisma migrate dev
```

# UPDATING SCHEMA
This command updates the prisma schema with changes made to the database
```
npx prisma db pull
```
# CREATE NEW MIGRATIONS
When changes are made in the prisma schema, the changes can be applied by creating a new migration, this can be done with the next command:
```
npx prisma migrate dev --name <name of the migration>
```

# APPLY CHANGES TO PROJECT
When some changes are made to schema and database, the PrismaClient needs to be called to recognize the new models, execute the command:
```
npx prisma generate
```
# KNOWN ISSUES
Sometimes can happen that the command npx prisma generate returns an error, this can be solved deleting the node_modules folder and installing the packages again 
