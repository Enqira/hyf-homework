CREATE SCHEMA `transport_db` ;

-- create cars table
CREATE TABLE `cars` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create routes
CREATE TABLE `routes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- create drivers table
CREATE TABLE `driver` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `assigned_car` int unsigned,
  FOREIGN KEY (`assigned_car`)
        REFERENCES cars(id),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `routes_drivers` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
  `drivers_id` int unsigned NOT NULL,
  `route_id` int unsigned NOT NULL,
    FOREIGN KEY (`drivers_id`)
        REFERENCES driver(id),
    FOREIGN KEY (`route_id`)
        REFERENCES routes(id),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INNER JOIN routes_drivers
ON drivers.id = routes_drivers.drivers_id
INNER JOIN routes
ON routes_drivers.route_id = routes.id