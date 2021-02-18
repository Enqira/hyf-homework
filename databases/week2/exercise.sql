-- PART 1

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, due_date, status_id, user_id) values ('Shoping', 'Buy milk and bread from netto', CURRENT_TIMESTAMP, '2021-02-15 10:00:00', 2, 1);

-- Change the title of a task
UPDATE task SET title = "Buying" WHERE id=1;

-- Change a task due date
UPDATE task SET due_date = "2021-02-20 10:00:00" WHERE id=1;

-- Change a task status
UPDATE task SET status_id = 1 WHERE id=1;

-- Mark a task as complete
UPDATE task SET status_id = 3 WHERE id=1;

-- Delete a task
DELETE FROM task WHERE id=4;


-- Part 2: School database

-- create class table
CREATE SCHEMA `schooldb` DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE `class` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NULL DEFAULT NULL,
  `ends` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create student table
CREATE TABLE `student` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `class_id` int unsigned,
  FOREIGN KEY (class_id)
        REFERENCES class(id),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.
CREATE INDEX name_index
ON Student(name);

-- Add a new column to the class table named status
ALTER TABLE Class
ADD status enum('not-started','ongoing','finished');

-- Part 3

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title AS user_tasks
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name like 'Donald Duck' AND task.status_id = 1 ;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN user on user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created) = 8 ;

-- Find how many tasks where created in each month
SELECT DATE_FORMAT(task.created, "%m") AS created_month,
	count(task.id) as count
FROM task
GROUP BY created_month;