INSERT INTO `hiv.enit.biz`.`Domain` (`id`, `owner_id`, `name`, `emailAddressFromRegistrar`, `claimingToken`) VALUES ('3', NULL, 'spiegel.hiv', 'kb@web.de', NULL);
INSERT INTO `hiv.enit.biz`.`DomainAlternative` (`id`, `domain`, `trusted`, `hivDomain_id`) VALUES (NULL, 'spiegel.de', '1', '3');

-- I want to see icons changing for facebook.com -> heise.de
INSERT INTO `hiv.enit.biz`.`Domain` (`id`, `owner_id`, `name`, `emailAddressFromRegistrar`, `claimingToken`) VALUES ('3', NULL, 'heise.de', 'kb@web.de', NULL);
INSERT INTO `hiv.enit.biz`.`DomainAlternative` (`id`, `domain`, `trusted`, `hivDomain_id`) VALUES (NULL, 'facebook.com', '1', '4');