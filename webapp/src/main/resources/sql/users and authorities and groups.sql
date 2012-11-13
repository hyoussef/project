drop table `persistent_logins`;
drop table group_members cascade;
drop table group_authorities cascade;
drop table groups cascade;
drop table authorities cascade;
drop table users cascade;


create table `users`(
      `username` nvarchar(50) not null primary key,
      `password` nvarchar(64) not null,
      `enabled`  boolean not null)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
AUTO_INCREMENT=4 ;
;


create table if not exists `authorities` (
      `username` nvarchar(50) not null,
     `authority` nvarchar(50) not null,
     key `fk_authorities_users` (`username`),
UNIQUE KEY `ix_auth_username` (`username`,`authority`)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
AUTO_INCREMENT=4 ;
;

ALTER TABLE `authorities`
 add constraint `fk_authorities_users` foreign key(`username`) REFERENCES `users` (`username`); 

create table if not exists `persistent_logins` (
  `username` nvarchar(50) not null,
  `series` varchar(64) primary key,
  `token` varchar(64) not null,
  `last_used` timestamp not null
)ENGINE=InnoDB
DEFAULT CHARSET=latin1
AUTO_INCREMENT=4 ;
;

-- create table `groups` (
--   `id` bigint(20) not null primary key,
--   `group_name` nvarchar(50) not null)ENGINE=InnoDB
-- DEFAULT CHARSET=latin1
-- AUTO_INCREMENT=4 ;
-- 
-- create table `group_authorities` (
-- `group_id` bigint(20) not null,
-- `authority` varchar(50) not null,
-- KEY `fk_group_authorities_groups`(`group_id`)
-- )ENGINE=InnoDB
-- DEFAULT CHARSET=latin1
-- AUTO_INCREMENT=4 ;
-- 
-- ALTER TABLE `group_authorities`
-- ADD CONSTRAINT `fk_group_authorities_groups` FOREIGN KEY (`group_id`) references `groups` ( `id` )
-- ;
-- 
-- create table `group_members`(
-- `id` bigint(20) not null primary key,
-- `username` nvarchar(50) not null,
-- `group_id` bigint(20) not null,
-- key `fk_group_members_group` (`group_id`),
-- key `fk_group_members_uers` (`username`) 
-- )ENGINE=InnoDB
-- DEFAULT CHARSET=latin1
-- AUTO_INCREMENT=4 ;
-- 
-- alter table `group_members` 
-- add constraint `fk_group_members_group` foreign key (`group_id`) references `groups` (`id`),
-- add constraint `fk_group_members_uers` foreign key (`username`) references `users`(`username`)
--  ;
-- 
-- 


