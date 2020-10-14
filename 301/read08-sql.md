# What is SQL?
SQL, or Structured Query Language, is a language designed to allow both technical and non-technical users query, manipulate, and transform data from a relational database. And due to its simplicity, SQL databases provide safe and scalable storage for millions of websites and mobile applications.

## SELECT queries 101
To retrieve data from a SQL database, we need to write SELECT statements, which are often colloquially refered to as queries. A query in itself is just a statement which declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned. 

- To select a column from 'mytable'
`SELECT column, another_column, …
FROM mytable;`

- To retrieve all columns:
`SELECT * 
FROM mytable;`

##  Queries with constraints
In order to filter certain results from being returned, we need to use a WHERE clause in the query. The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.

When writing WHERE clauses with columns containing text data, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching.

## Operator - Condition - Example
- `=` - Case sensitive exact string comparison (notice the single equals) - col_name = "abc"
- `!= or <>` - Case sensitive exact string inequality comparison - col_name != "abcd"
- `LIKE` - Case insensitive exact string comparison - col_name LIKE "ABC"
- `NOT LIKE` - Case insensitive exact string inequality comparison	 - 	col_name NOT LIKE "ABCD"
- `%` - 	Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) - col_name LIKE "%AT%"
(matches "AT", "ATTIC", "CAT" or even "BATS")
- `-` - 	Used anywhere in a string to match a single character (only with LIKE or NOT LIKE) - col_name LIKE "AN_"
(matches "AND", but not "AN")
- `IN (…)` - 	String exists in a list - 	col_name IN ("A", "B", "C")
- `NOT IN (…)` - String does not exist in a list - col_name NOT IN ("D", "E", "F")

## Filtering and sorting Query results
Even though the data in a database may be unique, the results of any particular query may not be – take our Movies table for example, many different movies can be released the same year. In such cases, SQL provides a convenient way to discard rows that have a duplicate column value by using the DISTINCT keyword.

### Query unique results : 
`SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);`
 ### Query with ordered results : 
 `SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;`

### Query with limited rows :
`SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;`


# Inserting rows
## What is a Schema?
In SQL, the database schema is what describes the structure of each table, and the datatypes that each column of the table can contain.

### Insert statement with values for all columns
`INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;`

##  Updating rows
In addition to adding new data, a common task is to update existing data, which can be done using an UPDATE statement. Similar to the INSERT statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.

### Update statement with values
`UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;`

## Deleting rows
When you need to delete data from a table in the database, you can use a DELETE statement, which describes the table to act on, and the rows of the table to delete through the WHERE clause.

### Delete statement with condition
`DELETE FROM mytable
WHERE condition;`

## Creating tables
When you have new entities and relationships to store in your database, you can create a new database table using the CREATE TABLE statement.

### Create table statement w/ optional table constraint and default value
`CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);`

## Altering tables
As your data changes over time, SQL provides a way for you to update your corresponding tables and database schemas by using the ALTER TABLE statement to add, remove, or modify columns and table constraints.

### Altering table to add new column(s)
`ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;`

### Altering table to remove column(s)
`ALTER TABLE mytable
DROP column_to_be_deleted;`

### Renaming the table - Altering table name
`ALTER TABLE mytable
RENAME TO new_table_name;`

## Dropping tables
In some rare cases, you may want to remove an entire table including all of its data and metadata, and to do so, you can use the DROP TABLE statement, which differs from the DELETE statement in that it also removes the table schema from the database entirely.

### Drop table statement
`DROP TABLE IF EXISTS mytable;`

