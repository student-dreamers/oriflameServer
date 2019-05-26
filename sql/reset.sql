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
(1,	'test',	'1234',	1,	'test',	'',	'https://media-ce-cdn.oriflame.com/-/media/Images/Editorials/2019/C07/Four-Ways-to-Better-Bone-Health/Top.ashx?u=0101010000&w=484&q=90',	'https://cz.oriflame.com/beautyedit/health-beauty/four-ways-to%20better-bone-health',	4.00),
(2,	'test2',	'4567',	1,	'test2',	'',	'https://media-ce-cdn.oriflame.com/-/media/Images/Editorials/2019/C07/Five-Weight-Bearing-Exercises-for-Strong-Healthy-Bones/Top.ashx?u=0101010000&w=484&q=90',	'https://cz.oriflame.com/beautyedit/health-beauty/five-weight-bearing-exercises-for-strong-healthy-bones',	2.00),
(3,	'test3',	'00000000',	2,	'test3',	'',	'https://media-ce-cdn.oriflame.com/-/media/Images/Catalog/Products/_global/4/41/415/41566.ashx?u=0101010000&q=90',	'https://cz.oriflame.com/products/product?code=41566',	22.00),
(4,	'test4',	'11111111',	1,	'test4',	'',	'https://media-ce-cdn.oriflame.com/-/media/Images/Editorials/2019/C07/Five-Weight-Bearing-Exercises-for-Strong-Healthy-Bones/Top.ashx?u=0101010000&w=484&q=90',	'https://cz.oriflame.com/beautyedit/health-beauty/five-weight-bearing-exercises-for-strong-healthy-bones',	2.00)
;


INSERT INTO `influence` (`id`, `name`, `description`, `score`) VALUES
(1,	'Ničí to zvířátka',	'helpppp' , 0.3),
(2,	'Ničí to stromečky',	'pomoooooooc', 0.4),
(3,	'Ničí to želvičky',	'wtfffff', 0.7);

INSERT INTO `ingredient` (`name`, `url_icon`, `featured`) VALUES
('SUGAR',	NULL,	1),
('SALT',	NULL,	1);

INSERT INTO `data_product_ingredient` (`product_id`, `ingredient_name`, `order`, `amount`) VALUES
(1,	'SUGAR',	0,	1),
(1,	'SALT',	1,	0.6),
(2,	'SALT',	0,	0.4),
(3,	'SUGAR',	1,	0.1),
(3,	'SALT',	0,	0.9);

INSERT INTO `ingredient_influence` (`ingredient_name`, `influence_id`, `score`) VALUES
('SUGAR',	1,	0.500),
('SUGAR',	2,	0.500),
('SALT',	1,	0.400),
('SALT',	2,	0.300),
('SALT',	3,	0.300);

COMMIT;