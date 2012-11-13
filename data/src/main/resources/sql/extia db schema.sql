drop table `project_employee`;
drop table `project_contact`;
drop table `employee`;
drop table  `job`;
drop table `company_contact`;
drop table `company_entity`;
drop table `project`;
drop table `company`;
drop table `villes`;
drop table `country`;

create table if not exists `country`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`country` varchar(20),
`region` varchar(20),
primary key (`id`)
)ENGINE=InnoDB
default charset=latin1;


create table if not exists `villes`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
`zip_code` bigint(5) NOT NULL,
`country_id` bigint(20) NOT NULL,
primary key(`id`),
unique key `unique_uk_1` (`zip_code`),
key `foreign_fk_11` (`country_id`)
)ENGINE=InnoDB
default charset=latin1;

alter table `villes`
add constraint `foreign_fk_11` foreign key (`country_id`) references `country`(`id`);

create table if not exists `company`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`code` nvarchar(5) NOT NULL,
`name` nvarchar(100) NOT NULL,
`adresse` nvarchar(250) NOT NULL,
`ville_id` bigint(20) DEFAULT NULL,
primary key(`id`), 
key `foreign_fk_1` (`ville_id`) 
)ENGINE=InnoDB
default charset=latin1;

ALTER TABLE `company`
add constraint `foreign_fk_1` foreign key (`ville_id`) REFERENCES `villes`(`id`);

create table if not exists `company_entity`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`entity` nvarchar(100),
`company_id` bigint(20) DEFAULT NULL,
primary key(`id`),
key `foreign_fk_2` (`company_id`)
)
ENGINE=InnoDB
default charset=latin1;

ALTER TABLE `company_entity`
add constraint `foreign_fk_2` foreign key (`company_id`) REFERENCES `company`(`id`);

create table if not exists `company_contact`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`first_name` varchar(100),
`last_name` varchar(100),
`gender` char,
`email` nvarchar(250),
`phone_mobile` bigint(10),
`phone_work` bigint(10),
`entity_id` bigint(20) DEFAULT NULL,
primary key(`id`),
key `foreign_fk_3` (`entity_id`)
)ENGINE=InnoDB
default charset=latin1;

ALTER TABLE `company_contact`
add constraint `foreign_fk_3` foreign key (`entity_id`) REFERENCES `company_entity`(`id`);

create table if not exists `job`(
`id` bigint(20) NOT NULL,
`job` varchar(50) NOT NULL,
`level` varchar(50) NOT NULL,
PRIMARY KEY (`id`)
)ENGINE=InnoDB
default charset=latin1;

create table if not exists `employee`(
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`first_name` varchar(100) NOT NULL,
`last_name` varchar(100) NOT NULL,
`gender` char NOT NULL,
`email` nvarchar(250) NOT NULL,
`phone_mobile` bigint(10) DEFAULT NULL,
`phone_work` bigint(10) DEFAULT NULL,
`adresse` nvarchar(250) DEFAULT NULL,
`ville_id` bigint(20) default null,
`job_id` bigint(20) NOT NULL,
`manager_id` bigint(20) DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `foreign_fk_4`(`job_id`),
KEY `foreign_fk_5`(`manager_id`),
KEY `foreign_fk_55`(`ville_id`)
)ENGINE=InnoDB
default charset=latin1;

alter table  `employee` 
add constraint `foreign_fk_4` foreign key (`job_id`) references `job`(`id`),
add constraint `foreign_fk_5` foreign key (`manager_id`) references `employee`(`id`),
add constraint `foreign_fk_55` foreign key (`ville_id`) references `villes`(`id`);

create table if not exists `project`(
`id`bigint(20) NOT NULL auto_increment,
`name` nvarchar(250) NOT NULL,
`description` nvarchar(1000) DEFAULT NULL,
`company_id` bigint(20) NOT NULL,
`start_date` date NOT NULL,
`end_date` date NOT NULL,
PRIMARY KEY (`id`),
KEY `foreign_fk_6` (`company_id`)
)ENGINE=InnoDB
default charset=latin1;

alter table  `project` 
add constraint `foreign_fk_6` foreign key (`company_id`) references `company`(`id`);

create table if not exists `project_employee`(
`employee_id` bigint(20) NOT NULL,
`project_id` bigint(20) NOT NULL,
`start_date` date default NULL,
`end_date` date default NULL,
primary key(`employee_id` , `project_id`),
key `foreign_fk_7`  (`employee_id`),
key `foreign_fk_8`  (`project_id`)
)ENGINE=InnoDB
default charset=latin1;

alter table  `project_employee` 
add constraint `foreign_fk_7` foreign key (`employee_id`) references `employee`(`id`),
add constraint `foreign_fk_8` foreign key (`project_id`) references `project`(`id`);

create table if not exists `project_contact`(
`contact_id` bigint(20) NOT NULL,
`project_id` bigint(20) NOT NULL,
primary key(`contact_id` , `project_id`),
key `foreign_fk_9`  (`contact_id`),
key `foreign_fk_10`  (`project_id`)
)ENGINE=InnoDB
default charset=latin1;

alter table  `project_contact` 
add constraint `foreign_fk_9` foreign key (`contact_id`) references `company_contact`(`id`),
add constraint `foreign_fk_10` foreign key (`project_id`) references `project`(`id`);

