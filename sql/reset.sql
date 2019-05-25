START TRANSACTION;

DELETE FROM ingredient_influence;
DELETE FROM data_product_ingredient;
DELETE FROM ingredient;
DELETE FROM influence;
DELETE FROM data_product;
DELETE FROM data_category;

INSERT INTO `data_category` (`id`, `uuid`, `name`, `url_icon`) VALUES
(1,	'test',	'test',	NULL);

INSERT INTO `data_product` (`id`, `uuid`, `ean`, `category_id`, `name`, `description`, `url_image`, `url_shop`, `price`) VALUES
(1,	'test',	'test',	1,	'test',	'',	'',	'',	4.00);

INSERT INTO `influence` (`id`, `name`, `description`) VALUES
(1,	'Ničí to zvířátka',	'wesferf');

INSERT INTO `ingredient` (`name`, `url_icon`, `featured`) VALUES
('SUGAR',	NULL,	1);

INSERT INTO `data_product_ingredient` (`product_id`, `ingredient_name`, `order`, `amount`) VALUES
(1,	'SUGAR',	0,	0.40000);

INSERT INTO `ingredient_influence` (`ingredient_name`, `influence_id`, `score`) VALUES
('SUGAR',	1,	0.500);

COMMIT;