
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  1NF (First Normal Form) Rules
//  Each table cell should contain a single value.
//  Each record needs to be unique.

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// What is a Primary Key?
// A primary is a single column value used to identify a database record uniquely.

// It has following attributes

// A primary key cannot be NULL
// A primary key value must be unique
// The primary key values should rarely be changed
// The primary key must be given a value when a new record is inserted.

//What is Composite Key?
//A composite key is a primary key composed of multiple columns used to identify a record uniquely

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2NF (Second Normal Form) Rules
//Rule 1- Be in 1NF
//Rule 2- Single Column Primary Key that does not functionally dependant on any subset of candidate key relation

//Database – Foreign Key
//Foreign Key references the primary key of another Table! It helps connect your Tables

//A foreign key can have a different name from its primary key
//It ensures rows in one table have corresponding rows in another
//Unlike the Primary key, they do not have to be unique. Most often they aren’t
//Foreign keys can be null even though primary keys can not