--create table meals
CREATE TABLE `meals`(
 `id` int unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `location` varchar(255),
 `when` DATETIME NULL DEFAULT NULL,
 `max_reservations` int,
 `price` decimal,
 `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`)
)

-- create table reservations
CREATE TABLE `reservations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` int NOT NULL,
  `meal_id` int unsigned NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `contact_phonenumber` varchar(20) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact-email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `meal_id` (`meal_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- create table reviews
CREATE TABLE `reviews`(
 `id` int unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
  `meal_id` INT unsigned NOT NULL,
  `stars` INT,
 `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 FOREIGN KEY (`meal_id`)
        REFERENCES meal(id)
)

-- insert into meals
INSERT INTO meals 
(`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
values (3, 'Paella', 'Famous spanish dish', 'Spain', '2021-02-10 10:00:00', 8, 150, CURRENT_TIMESTAMP);
-- Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal SET `description` = 'A popular street food & taste sensation.' WHERE id = 6;
-- Delete a meal with any id, fx 1
DELETE FROM MEAL WHERE id = 7;

-- insert into reservations
INSERT INTO `meal-sharing`.`reservations`
(`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact-email`)
VALUES (1, 4, 1, CURRENT_TIMESTAMP, 666666666, 'Jose', 'Jose@gmail.com');
-- Get a reservations with any id, fx 1
SELECT * FROM reservations WHERE id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservations SET number_of_guests = 2 WHERE id = 2;
-- Delete a reservation with any id, fx 1
DELETE FROM reservations WHERE meal_id = 1;

-- insert into reviews
INSERT INTO reviews
(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
values (1, 'dish review', 'tastes very good', 2, 4, CURRENT_TIMESTAMP);
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reviews SET stars = 5, meal_id = 2 WHERE id = 4;
-- Delete a review with any id, fx 1
DELETE FROM reviews WHERE id = 5;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meals WHERE price < 100 ORDER BY created_date desc;

-- Get meals that still has available reservations
SELECT meals.id, meals.title, meals.max_reservations, reservations.id AS reservation_id, reservations.number_of_guests FROM meals
LEFT JOIN Reservation
ON reservation.meals_id = meals.id WHERE meals.max_reservations > (
    SELECT SUM(number_of_guests)
    FROM reservations
    WHERE reservations.meals_id = meals.id
) ORDER BY meals.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meals WHERE title LIKE '%dish%';

-- Get meals that has been created between two dates
SELECT * FROM meals WHERE created_date > '2021-01-02' AND created_date < '2021-01-05';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meals ORDER BY price LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM meals WHERE id IN (
	SELECT meal_id FROM reviews WHERE stars  = 5
);

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservations
 WHERE meal_id IN (SELECT id FROM meals WHERE title = 'dish') 
 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meals.id, meals.title, reviews.title, reviews.stars FROM meals 
RIGHT JOIN reviews 
ON meals.id = reviews.meal_id
ORDER BY reviews.stars; 