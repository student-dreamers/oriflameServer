START TRANSACTION;

DELETE FROM ingredient_influence;
DELETE FROM data_product_ingredient;
DELETE FROM ingredient;
DELETE FROM influence;
DELETE FROM data_product;
DELETE FROM data_category;

INSERT INTO `data_category` (`id`, `uuid`, `name`, `url_icon`) VALUES
(1,	'test',	'test',	NULL),
(2,	'test2',	'test2',	NULL);


INSERT INTO `data_product` (`id`, `uuid`, `ean`, `category_id`, `name`, `description`, `url_image`, `url_shop`, `price`) VALUES
(1,	'test',	'test',	1,	'test',	'',	'',	'',	4.00),
(2,	'test2',	'test2',	1,	'test2',	'',	'',	'',	2.00);

INSERT INTO `influence` (`id`, `name`, `description`, `score`) VALUES
(1,	'Ničí to zvířátka',	'helpppp' , 0.3),
(2,	'Ničí to stromečky',	'pomoooooooc', 0.4),
(3,	'Ničí to želvičky',	'wtfffff', 0.7);

INSERT INTO `ingredient` (`name`, `url_icon`, `featured`) VALUES
('SUGAR',	NULL,	1),
('SALT',	NULL,	1);

INSERT INTO `data_product_ingredient` (`product_id`, `ingredient_name`, `order`, `amount`) VALUES
(1,	'SUGAR',	0,	0.40000),
(1,	'SALT',	1,	0.60000),
(2,	'SALT',	0,	1);

INSERT INTO `ingredient_influence` (`ingredient_name`, `influence_id`, `score`) VALUES
('SUGAR',	1,	0.500),
('SUGAR',	2,	0.500),
('SALT',	1,	0.400),
('SALT',	2,	0.300),
('SALT',	3,	0.300);

COMMIT;