-- create tables
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE `status` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `task` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int unsigned NOT NULL,
  `user_id` int unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- fill tables
insert into user ( name, email) values ('Mohammed', 'mohammed@gmail.com');
insert into user ( name, email) values ('Hyf', 'hyf@gmail.com');
insert into user ( name, email) values ('Enqira', 'enqira@gmail.com');
insert into user ( name, email) values ('Lamis', 'lamis@gmail.com');

insert into task (title, description, created, due_date, status_id, user_id) values ('Shoping', 'Buy milk and bread from netto', CURRENT_TIMESTAMP, '2021-02-15 10:00:00', 2, 1);
insert into task (title, description, created, due_date, status_id, user_id) values ('Cleaning', 'Clean my car', CURRENT_TIMESTAMP, '2021-02-10 10:00:00', 2, 2);
insert into task (title, description, created, due_date, status_id, user_id) values ('Homeworks', 'finish HYF databases homeworks', CURRENT_TIMESTAMP, '2021-02-12 10:00:00', 2, 3);
insert into task (title, description, created, due_date, status_id, user_id) values ('Play Games', 'Play Call Of Duty', CURRENT_TIMESTAMP, '2021-02-12 10:00:00', 3, 4);


insert into status (id, name) values (1, 'Not started');
insert into status (id, name) values (2, 'In progress');
insert into status (id, name) values (3, 'Done');

-- Homeworks
--1 Find out how many tasks are in the task table
SELECT COUNT(0)
FROM task; 
-- 3

-- 2 Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) - COUNT(due_date) 
FROM task;
-- 0

-- 3 Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = 3;
-- 1


-- 4 Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE NOT status_id = 3;
-- 3

-- 5 Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created desc;
-- 4

-- 6 Get the single most recently created task
SELECT *
FROM task
ORDER BY created desc
LIMIT 1;
-- 1

-- 7 Get the title and due date of all tasks where the title or description contains database
SELECT * 
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- 0

-- 8 Get the title and status (as text) of all tasks
SELECT title, 
CASE 
	WHEN status_id = 1 THEN 'Not started'
    WHEN status_id = 2 THEN 'In progress'
    WHEN status_id = 3 THEN 'Done'
    ELSE ''
END AS status
FROM task;
-- 4


--9 Get the name of each status, along with a count of how many tasks have that status
SELECT name, COUNT(status_id) as NumberOfTasks  FROM status
INNER JOIN task
ON status.id = task.status_id
GROUP BY status_id;
-- in progress 3
-- done 1

-- 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT name, COUNT(status_id) as NumberOfTasks  FROM status
INNER JOIN task
ON status.id = task.status_id
GROUP BY status_id
ORDER BY COUNT(status_id) DESC;
-- in progress 3
-- done 1
