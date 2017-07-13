-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 05 月 20 日 08:41
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `gentleruan`
--
DROP DATABASE `gentleruan`;
CREATE DATABASE `gentleruan` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `gentleruan`;

-- --------------------------------------------------------

--
-- 表的结构 `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(255) NOT NULL auto_increment COMMENT '编号',
  `name` varchar(255) collate utf8_unicode_ci NOT NULL COMMENT '名称',
  `price` varchar(255) collate utf8_unicode_ci NOT NULL COMMENT '价格',
  `count` int(255) NOT NULL default '1' COMMENT '数量',
  `repertory` int(255) NOT NULL default '100' COMMENT '库存',
  `image` varchar(255) collate utf8_unicode_ci NOT NULL COMMENT '图片',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=194 ;

--
-- 导出表中的数据 `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `count`, `repertory`, `image`) VALUES
(1, '新款小毛球耳坠', '￥69', 1, 100, '../imgs/products/fashion.01.jpg'),
(2, '水晶手环', '￥59', 1, 100, '../imgs/products/fashion.02.jpg'),
(4, '女神的眼泪耳坠', '￥79', 1, 100, '../imgs/products/fashion.03.jpg'),
(5, '水晶发卡', '￥39', 1, 100, '../imgs/products/fashion.04.jpg'),
(6, '卡通发带', '￥29', 1, 100, '../imgs/products/fashion.05.jpg'),
(7, '珍珠蝴蝶结手链', '￥69', 1, 100, '../imgs/products/fashion.06.jpg'),
(8, '气质玫瑰吊坠', '￥79', 1, 100, '../imgs/products/fashion.07.jpg'),
(9, '可爱小毛球耳钉', '￥49', 1, 100, '../imgs/products/fashion.08.jpg'),
(10, '女神的眼泪耳坠', '￥79', 1, 100, '../imgs/products/fashion.09.jpg'),
(11, '水晶发卡', '￥39', 1, 100, '../imgs/products/fashion.10.jpg'),
(12, '卡通发带', '￥29', 1, 100, '../imgs/products/fashion.11.jpg'),
(13, '珍珠蝴蝶结手链', '￥69', 1, 100, '../imgs/products/fashion.12.jpg'),
(14, '气质玫瑰吊坠', '￥79', 1, 100, '../imgs/products/fashion.13.jpg'),
(15, '可爱小毛球耳钉', '￥49', 1, 100, '../imgs/products/fashion.14.jpg'),
(16, '女神的眼泪耳坠', '￥79', 1, 100, '../imgs/products/fashion.15.jpg'),
(17, '水晶发卡', '￥39', 1, 100, '../imgs/products/fashion.16.jpg'),
(18, '卡通发带', '￥29', 1, 100, '../imgs/products/fashion.17.jpg'),
(19, '珍珠蝴蝶结手链', '￥69', 1, 100, '../imgs/products/fashion.18.jpg'),
(20, '气质玫瑰吊坠', '￥79', 1, 100, '../imgs/products/fashion.19.jpg'),
(21, '可爱小毛球耳钉', '￥49', 1, 100, '../imgs/products/fashion.20.jpg'),
(22, '女神的眼泪耳坠', '￥79', 1, 100, '../imgs/products/fashion.21.jpg'),
(23, '水晶发卡', '￥39', 1, 100, '../imgs/products/fashion.22.jpg'),
(24, '卡通发带', '￥29', 1, 100, '../imgs/products/fashion.23.jpg'),
(25, '珍珠蝴蝶结手链', '￥69', 1, 100, '../imgs/products/fashion.24.jpg'),
(26, '气质玫瑰吊坠', '￥79', 1, 100, '../imgs/products/fashion.25.jpg'),
(27, '可爱小毛球耳钉', '￥49', 1, 100, '../imgs/products/fashion.26.jpg'),
(136, '泥塑小玩偶', '￥79', 1, 100, '../imgs/products/gift.01.jpg'),
(137, '麋鹿', '￥39', 1, 100, '../imgs/products/gift.02.jpg'),
(138, '玻璃缸里的故事', '￥29', 1, 100, '../imgs/products/gift.03.jpg'),
(139, '埃菲尔铁塔', '￥69', 1, 100, '../imgs/products/gift.04.jpg'),
(140, '小米兔玩偶', '￥79', 1, 100, '../imgs/products/gift.05.jpg'),
(141, '美少女手套', '￥49', 1, 100, '../imgs/products/gift.06.jpg'),
(142, '手套', '￥79', 1, 100, '../imgs/products/gift.07.jpg'),
(143, '发泄表情包', '￥39', 1, 100, '../imgs/products/gift.08.jpg'),
(144, '马克杯', '￥29', 1, 100, '../imgs/products/gift.09.jpg'),
(145, '悠闲的龙猫', '￥69', 1, 100, '../imgs/products/gift.10.jpg'),
(146, '丝绒棉手套', '￥79', 1, 100, '../imgs/products/gift.11.jpg'),
(147, '毛球胸花', '￥49', 1, 100, '../imgs/products/gift.12.jpg'),
(148, '马克杯盆栽', '￥79', 1, 100, '../imgs/products/gift.13.jpg'),
(149, '米兔一家', '￥39', 1, 100, '../imgs/products/gift.14.jpg'),
(150, '居家必备棉拖鞋', '￥29', 1, 100, '../imgs/products/life.01.jpg'),
(151, '麋鹿保温杯', '￥69', 1, 100, '../imgs/products/life.02.jpg'),
(152, '随身小围枕', '￥79', 1, 100, '../imgs/products/life.03.jpg'),
(153, '纯手工泥塑小玩偶', '￥49', 1, 100, '../imgs/products/life.04.jpg'),
(154, '泥塑小玩偶', '￥79', 1, 100, '../imgs/products/life.05.jpg'),
(155, '麋鹿', '￥39', 1, 100, '../imgs/products/life.06.jpg'),
(156, '玻璃缸里的故事', '￥29', 1, 100, '../imgs/products/life.07.jpg'),
(157, '埃菲尔铁塔', '￥69', 1, 100, '../imgs/products/life.08.jpg'),
(158, '小米兔玩偶', '￥79', 1, 100, '../imgs/products/life.09.jpg'),
(159, '美少女手套', '￥49', 1, 100, '../imgs/products/life.10.jpg'),
(160, '手套', '￥79', 1, 100, '../imgs/products/life.11.jpg'),
(161, '发泄表情包', '￥39', 1, 100, '../imgs/products/life.12.jpg'),
(162, '马克杯', '￥29', 1, 100, '../imgs/products/life.13.jpg'),
(163, '悠闲的龙猫', '￥69', 1, 100, '../imgs/products/life.14.jpg'),
(164, '丝绒棉手套', '￥79', 1, 100, '../imgs/products/life.15.jpg'),
(165, '毛球胸花', '￥49', 1, 100, '../imgs/products/life.16.jpg'),
(166, '马克杯盆栽', '￥79', 1, 100, '../imgs/products/life.17.jpg'),
(167, '米兔一家', '￥39', 1, 100, '../imgs/products/life.18.jpg'),
(168, '居家必备棉拖鞋', '￥29', 1, 100, '../imgs/products/life.19.jpg'),
(169, '麋鹿保温杯', '￥69', 1, 100, '../imgs/products/life.20.jpg'),
(170, '随身小围枕', '￥79', 1, 100, '../imgs/products/life.21.jpg'),
(171, '纯手工泥塑小玩偶', '￥49', 1, 100, '../imgs/products/plush.01.jpg'),
(172, '随身小围枕', '￥79', 1, 100, '../imgs/products/plush.02.jpg'),
(173, '纯手工泥塑小玩偶', '￥49', 1, 100, '../imgs/products/plush.03.jpg'),
(174, '泥塑小玩偶', '￥79', 1, 100, '../imgs/products/plush.04.jpg'),
(175, '麋鹿', '￥39', 1, 100, '../imgs/products/plush.05.jpg'),
(176, '玻璃缸里的故事', '￥29', 1, 100, '../imgs/products/plush.06.jpg'),
(177, '埃菲尔铁塔', '￥69', 1, 100, '../imgs/products/plush.07.jpg'),
(178, '小米兔玩偶', '￥79', 1, 100, '../imgs/products/plush.08.jpg'),
(179, '美少女手套', '￥49', 1, 100, '../imgs/products/plush.09.jpg'),
(180, '手套', '￥79', 1, 100, '../imgs/products/plush.10.jpg'),
(181, '发泄表情包', '￥39', 1, 100, '../imgs/products/plush.11.jpg'),
(182, '马克杯', '￥29', 1, 100, '../imgs/products/plush.12.jpg'),
(183, '悠闲的龙猫', '￥69', 1, 100, '../imgs/products/season.10.jpg'),
(184, '丝绒棉手套', '￥79', 1, 100, '../imgs/products/season.01.jpg'),
(185, '毛球胸花', '￥49', 1, 100, '../imgs/products/season.02.jpg'),
(186, '马克杯盆栽', '￥79', 1, 100, '../imgs/products/season.03.jpg'),
(187, '米兔一家', '￥39', 1, 100, '../imgs/products/season.04.jpg'),
(188, '居家必备棉拖鞋', '￥29', 1, 100, '../imgs/products/season.05.jpg'),
(189, '麋鹿保温杯', '￥69', 1, 100, '../imgs/products/season.06.jpg'),
(190, '随身小围枕', '￥79', 1, 100, '../imgs/products/season.07.jpg'),
(191, '纯手工泥塑小玩偶', '￥49', 1, 100, '../imgs/products/season.08.jpg'),
(192, '随身小围枕', '￥79', 1, 100, '../imgs/products/season.09.jpg'),
(193, '纯手工泥塑小玩偶', '￥49', 1, 100, '../imgs/products/season.10.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(255) collate utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) collate utf8_unicode_ci NOT NULL COMMENT '密码',
  `phone` varchar(20) collate utf8_unicode_ci NOT NULL COMMENT '电话号码',
  `email` varchar(100) collate utf8_unicode_ci NOT NULL COMMENT '邮箱',
  `address` varchar(255) collate utf8_unicode_ci default '成都' COMMENT '地址',
  `level` varchar(255) collate utf8_unicode_ci default 'VIP0' COMMENT '会员等级',
  `integral` int(255) default '0' COMMENT '积分',
  PRIMARY KEY  (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 导出表中的数据 `user`
--

INSERT INTO `user` (`username`, `password`, `phone`, `email`, `address`, `level`, `integral`) VALUES
('beauty', '4562792235', '13578951263', '123456789@qq.com', '成都', 'VIP0', 0),
('fly', '0987654321', '13344556677', '7654321@qq.com', '深圳', 'VIP4', 500),
('gentleruan', '5201314', '18161038163', '123456789@qq.com', '成都', 'VIP0', 0),
('kity', 'dfghj85456', '12158946855', '123456789@qq.com', '成都', 'VIP0', 0),
('smile', '1234567890', '13244556677', '1234567@qq.com', '成都', 'VIP0', 0),
('snack', '987654321', '13189652147', '1228086959@qq.com', '成都', 'VIP0', 0),
('痴笑', '5201314', '17760620803', '123456789@qq.com', '成都', 'VIP0', 0);
