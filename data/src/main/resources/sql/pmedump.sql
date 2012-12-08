-- MySQL dump 10.13  Distrib 5.5.28, for Win64 (x86)
--
-- Host: localhost    Database: pme
-- ------------------------------------------------------
-- Server version	5.5.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `adresse` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `ville_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_fk_1` (`ville_id`),
  CONSTRAINT `foreign_fk_1` FOREIGN KEY (`ville_id`) REFERENCES `villes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'FT','FT',NULL,NULL),(2,'Echosens','Echosens',NULL,NULL),(3,'MATERIS','MATERIS',NULL,NULL),(4,'Alcatel-Lucent','Alcatel-Lucent',NULL,NULL),(5,'ByT','ByT',NULL,NULL),(6,'Wunderman','Wunderman',NULL,NULL),(7,'Globecast','Globecast',NULL,NULL),(8,'HP','HP',NULL,NULL),(9,'HUB TELECOM','HUB TELECOM',NULL,NULL),(10,'Prosodie','Prosodie',NULL,NULL),(11,'DALKIA','DALKIA',NULL,NULL),(12,'M6','M6',NULL,NULL),(13,'TF1','TF1',NULL,NULL),(14,'Overlap','Overlap',NULL,NULL),(15,'Avancial','Avancial',NULL,NULL),(16,'Kernix','Kernix',NULL,NULL);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_contact`
--

DROP TABLE IF EXISTS `company_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_contact` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `phone_mobile` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone_work` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `entity_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_fk_3` (`entity_id`),
  CONSTRAINT `foreign_fk_3` FOREIGN KEY (`entity_id`) REFERENCES `company_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_contact`
--

LOCK TABLES `company_contact` WRITE;
/*!40000 ALTER TABLE `company_contact` DISABLE KEYS */;
INSERT INTO `company_contact` VALUES (1,'Allard','Stephanie',NULL,'stephanie.allard@orange.Com','0155225112',NULL,1),(2,'Allouche','Miriame',NULL,'miriame.allouche@echosens.com',NULL,NULL,2),(3,'ANDRE','Yanis',NULL,NULL,NULL,NULL,3),(4,'Bakhti','Fatima',NULL,'fatima.bakhti@alcatel-lucent.com',NULL,NULL,4),(5,'Benoit','Mathieu',NULL,'mathieu.benoit@orange.com','0615803907',NULL,5),(6,'BOCQUET','Mai',NULL,'mai.bocquet@orange.Com',NULL,NULL,6),(7,'BOUGIE','Christophe',NULL,'cbougie@bouyguestelecom.fr','0659553212',NULL,7),(8,'Buffin','Celeste',NULL,'celeste.buffin@wunderman.com',NULL,NULL,8),(9,'Bury','Emmanuel',NULL,'emmanuel.bury@orange.com',NULL,NULL,9),(10,'Carval','Olivier',NULL,'olivier.carval@orange.com','0688212520',NULL,9),(11,'Casanova','Nicolas',NULL,'nicolas.casanova@orange.com','0681685289',NULL,10),(12,'CHARPENTIER','Sylvain',NULL,'sylvain.charpentier@orange.com',NULL,NULL,11),(13,'Chastagner','Pierre',NULL,'pierre.chastagner@orange.com','0608967704',NULL,12),(14,'CHICHA','Marc Olivier',NULL,'marcolivier.chicha@orange.com',NULL,NULL,13),(15,'Couchon','David',NULL,'david.couchon@orange.com','0689661895',NULL,14),(16,'Daviaud','Anne',NULL,'anne.daviaud@orange.com','0674932266',NULL,15),(17,'De Bantel','Hervé',NULL,'herve.debantel@globecast.com',NULL,NULL,16),(18,'DERRIEN','Nathalie',NULL,'nathalie.derrien@orange.com',NULL,NULL,17),(19,'DIPIETRO','Laurent',NULL,'laurent.dipietro@orange.com',NULL,NULL,18),(20,'Domanico','Saverio',NULL,'saverio.domanico@orange.com','0686560210',NULL,19),(21,'Dufau',NULL,NULL,NULL,NULL,NULL,20),(22,'Duigou','Jean Marc',NULL,'jeanmarc.duigou@orange.com','0155228733',NULL,21),(23,'Eyrignoux','Vincent',NULL,'vincent.eyrignoux@orange.com','0145294955',NULL,19),(24,'FERRACCANE','Romain',NULL,'romain.ferraccane@orange.com','0682857855',NULL,22),(25,'Foinels','Laurent',NULL,'laurent.foinels@orange.com','0672831440',NULL,9),(26,'Fonteniaud','Paul',NULL,'paul.fonteniaud@orange.com','0675251391',NULL,23),(27,'FOUQUET','Stephane ',NULL,'stephane.fouquet@orange.com',NULL,NULL,24),(28,'GHANEM','Gilbert',NULL,'gghanem@orange.com',NULL,NULL,25),(29,'GIRARD','Laurent',NULL,'laurent.girard@orange.com',NULL,NULL,26),(30,'Girault','Stanislas',NULL,'stanislas.girault@orange.com','0607599955',NULL,27),(31,'Graziani','Jean Luc',NULL,'jeanluc.graziani@orange.com',NULL,NULL,15),(32,'Greuet','Jean Pascal',NULL,'jeanpascal.greuet@orange.com','0155222319',NULL,28),(33,'Gueguen','Ronan',NULL,'ronan.gueguen@orange.com','0685723771',NULL,29),(34,'Guyot','Roland',NULL,'roland.guyot@orange.com','0680051994',NULL,15),(35,'HAINNNAUX','Eric',NULL,'ehainnaux@prosodie.fr',NULL,NULL,30),(36,'Heizinger','Mickael',NULL,'mickael.heizinger@orange.com','0673893902',NULL,31),(37,'Herve-Gruyer','Guillaume',NULL,'guillaume.hervegruyer@orange.com',NULL,NULL,9),(38,'KAMOGNE','Yannick',NULL,NULL,NULL,NULL,32),(39,'Kerignard','Philippe',NULL,'pkerigna@bouyguestelecom.fr',NULL,NULL,33),(40,'KHUOY','Victor',NULL,'vkhuoy@orange.com','0628405449',NULL,34),(41,'LABRANCHE','Miguel',NULL,'miguel.labranche@orange.com',NULL,NULL,9),(42,'Laspougeas','Philippe',NULL,'philippe.laspougeas@orange.com','0681686401',NULL,17),(43,'Le courtois','Yann',NULL,'ylecourtois@m6.fr',NULL,NULL,35),(44,'Lebeuz','Dominique',NULL,'dominique.lebeuz@orange.com','0685931334',NULL,36),(45,'LEGRAND','Sebastien',NULL,'sebastien.legrand@orange.Com',NULL,NULL,37),(46,'Lemoisson','Thierry',NULL,'thierry.lemoisson@orange.com',NULL,NULL,38),(47,'Lesgo','Jean Pierre',NULL,'jeanpierre@lesgo@orange.com',NULL,NULL,39),(48,'Levy','Benoit',NULL,'benoit.levy@orange.com','0607172416',NULL,40),(49,'Loir','Xavier',NULL,'xavier.loir@orange.com','0682699776',NULL,9),(50,'Lourioux','Eric',NULL,'eric.lourioux@orange.com','0676486753',NULL,9),(51,'Maillot','Cécile',NULL,'cecile.maillot@orange.com','0684336215',NULL,9),(52,'Mainard','Jacky',NULL,'jacky.mainard@orange.com','0608882562',NULL,41),(53,'MAINE','Philippe',NULL,'pmaine@dalkia.com',NULL,NULL,42),(54,'Mazoué','Marc',NULL,'marc.mazoue@orange.com',NULL,NULL,9),(55,'Megnin','Sebastien',NULL,'sebastien.megnin@orange.com','0688212520',NULL,19),(56,'MISTRETTA','Adrien',NULL,'amistretta@hubtelecom.com','0671923173',NULL,43),(57,'Morand','Pierrick',NULL,'pierrick.morand@orange.com',NULL,NULL,9),(58,'Neyroumande','Nicolas',NULL,'nicolas.neyroumande@orange.Com','0155222604',NULL,17),(59,'Nicolic','Emmanuel',NULL,'enicolic@tf1.fr',NULL,NULL,44),(60,'Pascual','Juan',NULL,'juan.pascual@orange.com','0670747885',NULL,9),(61,'Pattin','Fréderic',NULL,'frederic.pattin@orange.com',NULL,NULL,45),(62,'Pelé','Stéphane',NULL,'stephane.pele@orange.com','0680474953',NULL,27),(63,'Perrin','Denis  ',NULL,'denis.perrin@orange.com','0682255817',NULL,24),(64,'Pham','Thuyen',NULL,'thuyen.pham@overlap.com',NULL,NULL,46),(65,'POLART','Philippe ',NULL,'ppolart@orange.com',NULL,NULL,47),(66,'Polouchkine','Stephane',NULL,'stephane.polouchkine@orange.com',NULL,NULL,9),(67,'Quenaudon','Olivier',NULL,'olivier.quenaudon@echosens.com',NULL,NULL,48),(68,'REIGNIER','Sylvie ',NULL,'sreignier@dalkia.com',NULL,NULL,49),(69,'Roger','Anne Flore',NULL,'anneflore.roger@orange.com','0155229462',NULL,22),(70,'Schneider','Mathieu',NULL,'mathieu.schneider@orangE.com','0155221806',NULL,50),(71,'Segond','Hubert',NULL,'hubert.segond@orange.com',NULL,NULL,51),(72,'Sibaud','Benoit',NULL,'benoit.sibaud@orange.com','0145295731',NULL,19),(73,'Soumoy','Isabelle',NULL,'isabelle.soumoy@orange.com','0671603032',NULL,14),(74,'STEHLY','Jean Noël',NULL,'jeannoel.stehly@orange.com',NULL,NULL,52),(75,'Tarabishi','Susana',NULL,'susana.tarabishi@orange.com','0642036151',NULL,24),(76,'Tarrier','Damien',NULL,'damien.tarrier@orange.com','0676711498',NULL,53),(77,'TAYAMOUTOU','Jean Pierre',NULL,'jptayamoutou@dalkia.com','0622457838',NULL,54),(78,'Tchepnda','Christian',NULL,'christian.tchepnda@orange.com',NULL,NULL,55),(79,'Tremel','Jean Yves',NULL,'jeanyves.tremel@orange.com','0608688683',NULL,56),(80,'Valverde','Thierry',NULL,'thierry.valverde@orange.com',NULL,NULL,15),(81,'VANACKER','Luc',NULL,'lvanacker@hubtelecom.com','0672090312',NULL,57),(82,'VERDIER','Loic',NULL,NULL,'0157235033',NULL,58),(83,'Verleyen','Aurélien',NULL,'averleyen@kernix.com',NULL,NULL,59),(84,'VIGNAL','Rémi',NULL,'remi.vignal@orange.com','01467901700688407098',NULL,60),(85,'Vincent','Jerome',NULL,'jerome.vincent@orange.com','0607012006',NULL,61),(86,'WAGNER','Thomas',NULL,'twagner@prosodie.fr',NULL,NULL,62),(87,'Wajsberg','Julien',NULL,'julien.wajsberg@orange.com','0145294032',NULL,63),(88,'Wittmann','Michele',NULL,'michele.wittmann@orange.com','0686077275',NULL,64),(89,'Zimmerman','Julien',NULL,'julien.zimmerman@orange.com',NULL,NULL,9);
/*!40000 ALTER TABLE `company_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_entity`
--

DROP TABLE IF EXISTS `company_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_entity` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `entity` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `company_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_fk_2` (`company_id`),
  CONSTRAINT `foreign_fk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_entity`
--

LOCK TABLES `company_entity` WRITE;
/*!40000 ALTER TABLE `company_entity` DISABLE KEYS */;
INSERT INTO `company_entity` VALUES (1,'DTRS/DIM/3IS/ABI',1),(2,'R&D',2),(3,'BE colorimétrie',3),(4,'direction technique',4),(5,'R&D/SIRP/',1),(6,'R&D/BUC',1),(7,'Département Test reseaux et terminaux',5),(8,'Pôle Technique',6),(9,'R&D/BIZZ/BUC',1),(10,'DEX/DEPFS/POQ',1),(11,'DEX/DEI/SIP',1),(12,'DEX/DEI/MAPPI',1),(13,'DEX/DEI',1),(14,'R&D/SIRP/MEDIA',1),(15,'DTRS/DIM/PCD',1),(16,'Resp Tech',7),(17,'DTRS/DIM/PIRA',1),(18,'DTF/DES/SEO/SEC',1),(19,'R&D/SIRP/ASF',1),(20,NULL,8),(21,'DTRS/DIM/DAS',1),(22,'DTRS/DIM/EDRA',1),(23,'DEX/DEPFS/ERM',1),(24,'R&D/BIZZ',1),(25,'Direction du déploiement',9),(26,'DTRS/AES',1),(27,'DEX/DEI/',1),(28,'DTRS/DIM/ETIQ',1),(29,'DEX/DEI/SIP/PID',1),(30,'DIP',10),(31,'DTRS/DIM/3IS/APS',1),(32,'BE logistique',3),(33,'DINT',5),(34,NULL,11),(35,'M6 Web/Direction technique/BU Vidéo',12),(36,'DES/',1),(37,'DTF/DEX/DEI/SIP',1),(38,'R&D/BIZZ/BUC/NCIS',1),(39,'R&D/SIRP/INTI',1),(40,'DTRS/DIM/',1),(41,'DEX/DEII/PIRL',1),(42,'Direction des opérations',11),(43,'Direction Système et sécurité',9),(44,'DIS',13),(45,'R&D/BIZZ/BUC/CUM',1),(46,'Cdp',14),(47,'BTP',11),(48,'Dir Tech',2),(49,'Finance',11),(50,'DTRS/DIM/3IS/APA',1),(51,'R&D/BIZZ/BUC/MMI',1),(52,'R&D/SIRP',1),(53,'DEX/MAPPI',1),(54,'Achat',11),(55,'DEX/DEI/SIP/EIM',1),(56,'DES/SMC',1),(57,'Direction des programmes',9),(58,NULL,15),(59,'Direction projet',16),(60,'DECI/NOSC',1),(61,'DTRS/DIM',1),(62,'DSV',10),(63,'R&D/BIZZ/CMC',1),(64,'DTRS/DRIMS/',1);
/*!40000 ALTER TABLE `company_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `country` varchar(20) DEFAULT NULL,
  `region` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` char(1) NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 NOT NULL,
  `phone_mobile` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone_work` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `adresse` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `ville_id` bigint(20) DEFAULT NULL,
  `job_id` bigint(20) NOT NULL,
  `manager_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_fk_4` (`job_id`),
  KEY `foreign_fk_5` (`manager_id`),
  KEY `foreign_fk_55` (`ville_id`),
  CONSTRAINT `foreign_fk_4` FOREIGN KEY (`job_id`) REFERENCES `job` (`id`),
  CONSTRAINT `foreign_fk_5` FOREIGN KEY (`manager_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `foreign_fk_55` FOREIGN KEY (`ville_id`) REFERENCES `villes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job` (
  `id` bigint(20) NOT NULL,
  `job` varchar(50) NOT NULL,
  `level` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `company_id` bigint(20) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_fk_6` (`company_id`),
  CONSTRAINT `foreign_fk_6` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Responsable de département','infrastructure mutualisé, backbone IP',1,NULL,NULL),(2,'resp developpement logiciel','dev de logiciel interne',2,NULL,NULL),(3,'chef de projet colorimétrie','gestion des système pour l\'utilisation des applications sur les points de vente',3,NULL,NULL),(4,'directrice technique','design et optimisation radio AMEA',4,NULL,NULL),(5,'Chef de projet','virtualisation, test validation, convergence fixe/mobile',1,NULL,NULL),(6,'responsable URD','service VOIX, pabx, virtualisation',1,NULL,NULL),(7,'Département Test reseaux et terminaux',NULL,5,NULL,NULL),(8,'Directeur de projet','développement de site internet ,évenementiel etc..',6,NULL,NULL),(9,'Chef de projet','Test et validation end to end, box multilink, fax etc',1,NULL,NULL),(10,'Responsable projet managed hotspot','Projet Hotspot Wifi AMEA',1,NULL,NULL),(11,'Responsable de département','exploitation des PFS',1,NULL,NULL),(12,'Responsable pôle+cdp','llogiciel de couplage telephonique pour les centres d\'appels',1,NULL,NULL),(13,'Responsable de département','hebergement et exploitation(proxi), réseaux sécurtié (Nazih,caillet), réseaux interne',1,NULL,NULL),(14,'Responsable pôle outils','pole outils, deploiement d\'outils exploitant le reseaux, assure le skill center',1,NULL,NULL),(15,'Responsable URD','Portail web, portail audiovisuel',1,NULL,NULL),(16,'Responsable département','dimensionnement du cœur de réseaux, etude prévisionnelle et réelle du trafic ',1,NULL,NULL),(17,'resp technique','web tv, transfert image ',7,NULL,NULL),(18,'Responsable de département','sécurité logique - porter la sécu en phase de build',1,NULL,NULL),(19,'Responsable de l\'entité SEC','Système ecocenter et outils, admin des plateforme de virtualisation et stockage',1,NULL,NULL),(20,'Responsable URD','Gestion d\'une equipe de chef de projet qui pioche des ressources dans les autres URD',1,NULL,NULL),(21,NULL,NULL,8,NULL,NULL),(22,'Responsable de département',NULL,1,NULL,NULL),(23,'Dev, concepteur','comment utilisé les réseaux IMS dans le réseaux Web',1,NULL,NULL),(24,'Responsable de département','Ingénierie des sites et des produits, expertise produit, couverture indoor',1,NULL,NULL),(25,'responsable projet','gestion des numéro spéciaux reseaux tel traditionnel',1,NULL,NULL),(26,'Responsable département','Prise en compte en amont des contraintes d\'exploitabilité',1,NULL,NULL),(27,'Responsable projet innovation','qualification de nouveaux produit etdude archi et validation',1,NULL,NULL),(28,'Responsable déploiement','déploiement reseaux et telecom dans les aeroport',9,NULL,NULL),(29,'Responsable pôle AES','anticipation et etude stratégique, acces fixe et mobile',1,NULL,NULL),(30,'Responsable de département','réseaux interne voix',1,NULL,NULL),(31,'Responsable de département','tourner vers la trans et les interco avec autre opérateur. Gestion du raccordement',1,NULL,NULL),(32,'Responsable de département','responsable du département QoS, reseaux mobile, contribuer aux lancement des terminaux',1,NULL,NULL),(33,'Responsable PID','charge MOE reseaux interne, homogeneiser different centre sous une seule infra',1,NULL,NULL),(34,'Responsable de département','Architecture sonde, sniffer de réseaux, déploiement ',1,NULL,NULL),(35,'directeur adjoint DIP','exploitation des réseaux, telecom,serveur vocaux',10,NULL,NULL),(36,'Responsable de département','architecture des plateforme de service',1,NULL,NULL),(37,'Responsable de projet','Projet audioconf',1,NULL,NULL),(38,'chef de projet logistique','gestion des SI logistique pour les nouveaux clients',3,NULL,NULL),(39,'Responsable pôle innovation','direction des innovations nouvelles technologies',5,NULL,NULL),(40,'Responsable offres applicative','Responsable relation applicative',11,NULL,NULL),(41,'Cdp cloud','idem Mathieu Benoit',1,NULL,NULL),(42,'Responsable de département','dimensionnement réseaux d\'acces mobile',1,NULL,NULL),(43,'Cdp flux vidéo','coordination et expertise partie design des flux video',12,NULL,NULL),(44,'Responsable SIP','reseaux interne, en charge de l\'equipe d\'architecte, etude et conception deploiement',1,NULL,NULL),(45,'Responsable URD','Supporte toute les parties recherche ou anticip, réseaux colaboratif dans les entreprise, réseaux sociaux',1,NULL,NULL),(46,'Chef de projet','Access intégration test et qualification, intégration de développement des autres URD',1,NULL,NULL),(47,'Responsable de département','Grands compte acquisition immo',1,NULL,NULL),(48,'valideur','validation des centres d\'appels GENESYS',1,NULL,NULL),(49,'Responsable URD',NULL,1,NULL,NULL),(50,'Responsable URD','Validation et integratio de solution à vendre pour le client',1,NULL,NULL),(51,'Responsable d\'équipe','Gestion des sites Idf LAN',1,NULL,NULL),(52,'Dreciteur des opérations','Outils métiers, outils, infra, reseaux, support',11,NULL,NULL),(53,'Responsable URD','solution de téléphonie, validation bout en bout, test nouvelle version',1,NULL,NULL),(54,'Responsable système et sécurité','developpement des produit avec le marketing, nouvelles offres, normalisation de la partie supervision',9,NULL,NULL),(55,'Responsable URD','Téléphonie et vision sur IP, conf et audio',1,NULL,NULL),(56,'Responsable de département','Outils d\'investigation et de performance, mesue, , gestion de l\'adaptation des outils à l\'évolution ',1,NULL,NULL),(57,'Responsable pôle architecture','architecture technique,, hébergement, applicatif métier transverse',13,NULL,NULL),(58,'Chef de projet','validation des offres VOIP',1,NULL,NULL),(59,'SIP, Microsoft LINK, MS Exchange, MS server, AD','communication unifié microsoft link',1,NULL,NULL),(60,'Chef de projet centrex','migration H323 vers SIP',1,NULL,NULL),(61,'cdp','??',14,NULL,NULL),(62,'Responsable du pole','Pole ingénierie en batiment',11,NULL,NULL),(63,'Chef de projet','Multiligne pro acces haut débit, validation bout en bout des offres avant prod',1,NULL,NULL),(64,'directeur technique',NULL,2,NULL,NULL),(65,'Responsable Pôle Applicatif Finance','Gestion et maintenant niveau 1 des applications liés à la finance',11,NULL,NULL),(66,'Responsable de département','Evolution des réseaux d\'accès, test et validation des versions de déploiement',1,NULL,NULL),(67,'Responsable de département','archi et expertise technique, bout en bout, archi plateforme d\'acces, optim QoS, déploiement de bout en bout LTE',1,NULL,NULL),(68,'Second Resp URD','Test nouvelles versions messagerie',1,NULL,NULL),(69,'responsable de projet','projet IKEA, boite à outils pour gerer de la voix depuis le web',1,NULL,NULL),(70,'Responsable URD','travaille sur les activité jeux et transmedia, tablette et mobile',1,NULL,NULL),(71,'responsable de programme','reseaux, équipe de dev back lourd, projet wifi, appli legère embarqué mobile',1,NULL,NULL),(72,'Responsable de programme','Projet Hotspot wifi AMEA, audioconf, contact avec MMI',1,NULL,NULL),(73,'Responsable PMO','equipe de PMO en charge de consolider les diffrents projet (programme)',1,NULL,NULL),(74,'Responsable du pole ','responsable des reférents applicatifs sur la partie achat energie',11,NULL,NULL),(75,'resp équipe ingénierie','Build, ingénieur conception archi, ingénieurie, qualification',1,NULL,NULL),(76,'Responsable d\'équipe','Test sur les terminaux mobiles',1,NULL,NULL),(77,'Responsable de département','déploiement des équipements réseaux cœur',1,NULL,NULL),(78,'Directeur de programmes','grands projets, technique, plannification, avancée technologique',9,NULL,NULL),(79,NULL,NULL,15,NULL,NULL),(80,'Responsable pôle projet','developpement de site internet et conseil',16,NULL,NULL),(81,NULL,'support et exploitation réseaux fixe et mobile',1,NULL,NULL),(82,'Responsable de département','parametrage du réseaux d\'acces mobile',1,NULL,NULL),(83,'Chef de projet','gestion de projet, ',10,NULL,NULL),(84,'Concepteur Scrummaster','destination des grands comptes acceder au bureau depuis le web tablette multidevice',1,NULL,NULL),(85,'Responsable de département','l\'enjeu projet FBN',1,NULL,NULL),(86,'Chef de projet',NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_contact`
--

DROP TABLE IF EXISTS `project_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_contact` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contact_id` bigint(20) NOT NULL,
  `project_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`,`contact_id`,`project_id`),
  KEY `foreign_fk_9` (`contact_id`),
  KEY `foreign_fk_10` (`project_id`),
  CONSTRAINT `foreign_fk_10` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `foreign_fk_9` FOREIGN KEY (`contact_id`) REFERENCES `company_contact` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_contact`
--

LOCK TABLES `project_contact` WRITE;
/*!40000 ALTER TABLE `project_contact` DISABLE KEYS */;
INSERT INTO `project_contact` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10),(11,11,11),(12,12,12),(13,13,13),(14,14,14),(15,15,15),(16,16,16),(17,17,17),(18,18,18),(19,19,19),(20,20,20),(21,21,21),(22,22,22),(23,23,23),(24,24,24),(25,25,25),(26,26,26),(27,27,27),(28,28,28),(29,29,29),(30,30,30),(31,31,31),(32,32,32),(33,33,33),(34,34,34),(35,35,35),(36,36,36),(37,37,37),(38,38,38),(39,39,39),(40,40,40),(41,41,41),(42,42,42),(43,43,43),(44,44,11),(45,45,44),(46,46,45),(47,47,46),(48,48,47),(49,49,48),(50,50,49),(51,51,50),(52,52,51),(53,53,52),(54,54,53),(55,55,49),(56,56,54),(57,57,55),(58,58,56),(59,59,57),(60,60,58),(61,61,59),(62,62,30),(63,63,60),(64,64,61),(65,65,62),(66,66,63),(67,67,64),(68,68,65),(69,69,66),(70,70,67),(71,71,68),(72,72,69),(73,73,70),(74,74,71),(75,75,72),(76,76,73),(77,77,74),(78,78,75),(79,79,76),(80,80,77),(81,81,78),(82,82,79),(83,83,80),(84,84,81),(85,85,82),(86,86,83),(87,87,84),(88,88,85),(89,89,86);
/*!40000 ALTER TABLE `project_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_employee`
--

DROP TABLE IF EXISTS `project_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_employee` (
  `employee_id` bigint(20) NOT NULL,
  `project_id` bigint(20) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`employee_id`,`project_id`),
  KEY `foreign_fk_7` (`employee_id`),
  KEY `foreign_fk_8` (`project_id`),
  CONSTRAINT `foreign_fk_7` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `foreign_fk_8` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_employee`
--

LOCK TABLES `project_employee` WRITE;
/*!40000 ALTER TABLE `project_employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_technologies`
--

DROP TABLE IF EXISTS `project_technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_technologies` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `technology_id` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_project_technologies_pk` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=395 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_technologies`
--

LOCK TABLES `project_technologies` WRITE;
/*!40000 ALTER TABLE `project_technologies` DISABLE KEYS */;
INSERT INTO `project_technologies` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,1),(6,6,1),(7,7,1),(8,8,2),(9,9,2),(10,10,2),(11,11,2),(12,12,2),(13,8,3),(14,13,3),(15,14,3),(16,15,4),(17,16,4),(18,17,4),(19,8,5),(20,18,5),(21,19,5),(22,20,5),(23,15,6),(24,21,6),(25,22,6),(26,23,6),(27,24,6),(28,25,7),(29,26,7),(30,8,8),(31,18,8),(32,27,8),(33,28,8),(34,29,8),(35,30,8),(36,31,8),(37,32,8),(38,15,9),(39,33,9),(40,34,9),(41,35,9),(42,36,9),(43,15,10),(44,37,10),(45,38,10),(46,39,10),(47,1,11),(48,2,11),(49,40,11),(50,8,12),(51,41,12),(52,42,12),(53,43,12),(54,1,13),(55,2,13),(56,44,13),(57,45,13),(58,46,13),(59,47,13),(60,5,13),(61,4,13),(62,48,13),(63,49,13),(64,1,14),(65,2,14),(66,50,14),(67,51,14),(68,52,14),(69,53,14),(70,8,15),(71,25,15),(72,54,15),(73,55,15),(74,56,15),(75,57,15),(76,58,15),(77,59,15),(78,15,16),(79,60,16),(80,61,16),(81,62,16),(82,63,16),(83,64,16),(84,15,17),(85,44,17),(86,65,17),(87,66,17),(88,67,17),(89,68,17),(90,1,18),(91,2,18),(92,69,18),(93,1,19),(94,70,19),(95,71,19),(96,72,19),(97,73,19),(98,74,19),(99,75,19),(100,76,19),(101,77,19),(102,78,19),(103,79,19),(104,25,20),(105,80,20),(106,15,21),(107,37,21),(108,81,21),(109,15,22),(110,82,22),(111,22,22),(112,83,22),(113,84,22),(114,85,22),(115,86,22),(116,87,22),(117,8,23),(118,88,23),(119,89,23),(120,90,23),(121,91,23),(122,92,24),(123,44,24),(124,93,24),(125,8,25),(126,18,25),(127,94,25),(128,95,25),(129,96,25),(130,97,25),(131,8,26),(132,18,26),(133,98,26),(134,15,27),(135,22,27),(136,99,27),(137,100,27),(138,101,27),(139,15,28),(140,102,28),(141,103,28),(142,25,29),(143,104,29),(144,15,30),(145,37,30),(146,81,30),(147,92,31),(148,44,31),(149,105,31),(150,8,32),(151,18,32),(152,27,32),(153,106,32),(154,107,32),(155,108,32),(156,92,33),(157,44,33),(158,109,33),(159,110,33),(160,111,33),(161,15,34),(162,112,34),(163,113,34),(164,114,34),(165,115,34),(166,15,35),(167,25,35),(168,116,35),(169,1,36),(170,2,36),(171,117,36),(172,25,37),(173,80,37),(174,21,38),(175,80,38),(176,8,39),(177,21,39),(178,118,39),(179,119,39),(180,8,40),(181,120,40),(182,121,40),(183,122,40),(184,123,40),(185,124,40),(186,1,41),(187,70,41),(188,125,41),(189,15,42),(190,126,42),(191,61,42),(192,127,42),(193,128,42),(194,129,42),(195,8,43),(196,18,43),(197,27,43),(198,130,43),(199,131,43),(200,15,11),(201,132,11),(202,133,11),(203,134,11),(204,1,44),(205,2,44),(206,135,44),(207,8,45),(208,18,45),(209,136,45),(210,137,45),(211,138,45),(212,8,46),(213,18,46),(214,139,46),(215,140,46),(216,92,47),(217,44,47),(218,141,47),(219,15,48),(220,33,48),(221,34,48),(222,142,48),(223,143,48),(224,144,48),(225,15,49),(226,132,49),(227,145,49),(228,146,49),(229,8,50),(230,18,50),(231,147,50),(232,148,50),(233,149,50),(234,1,51),(235,2,51),(236,150,51),(237,151,51),(238,5,51),(239,152,51),(240,92,52),(241,44,52),(242,153,52),(243,154,52),(244,15,53),(245,33,53),(246,34,53),(247,35,53),(248,155,53),(249,156,53),(250,8,49),(251,41,49),(252,157,49),(253,158,49),(254,159,49),(255,160,49),(256,161,49),(257,162,49),(258,1,54),(259,70,54),(260,163,54),(261,164,54),(262,165,54),(263,15,55),(264,33,55),(265,166,55),(266,35,55),(267,167,55),(268,25,56),(269,80,56),(270,1,57),(271,2,57),(272,168,57),(273,169,57),(274,15,58),(275,33,58),(276,110,58),(277,150,58),(278,170,58),(279,15,59),(280,33,59),(281,34,59),(282,171,59),(283,172,59),(284,173,59),(285,174,59),(286,15,60),(287,37,60),(288,175,60),(289,38,60),(290,4,60),(291,176,60),(292,177,60),(293,178,60),(294,179,61),(295,180,61),(296,181,61),(297,182,62),(298,183,62),(299,184,62),(300,15,63),(301,33,63),(302,185,63),(303,21,64),(304,25,64),(305,186,64),(306,1,65),(307,21,65),(308,187,65),(309,92,66),(310,44,66),(311,188,66),(312,15,67),(313,25,67),(314,189,67),(315,8,68),(316,41,68),(317,190,68),(318,15,69),(319,33,69),(320,191,69),(321,192,69),(322,193,69),(323,194,69),(324,195,69),(325,8,70),(326,18,70),(327,196,70),(328,197,70),(329,198,70),(330,199,70),(331,21,71),(332,25,71),(333,200,71),(334,15,72),(335,132,72),(336,201,72),(337,92,73),(338,202,73),(339,203,73),(340,8,74),(341,21,74),(342,204,74),(343,205,74),(344,15,75),(345,21,75),(346,206,75),(347,207,76),(348,208,76),(349,209,76),(350,210,76),(351,92,77),(352,44,77),(353,211,77),(354,212,77),(355,213,77),(356,214,77),(357,1,78),(358,70,78),(359,215,78),(360,151,78),(361,216,78),(362,217,78),(363,218,78),(364,8,79),(365,41,79),(366,219,79),(367,8,80),(368,18,80),(369,27,80),(370,220,80),(371,221,80),(372,222,80),(373,25,81),(374,223,81),(375,15,82),(376,16,82),(377,224,82),(378,225,82),(379,21,83),(380,25,83),(381,118,83),(382,119,83),(383,8,84),(384,41,84),(385,226,84),(386,227,84),(387,74,84),(388,228,84),(389,92,85),(390,44,85),(391,229,85),(392,15,86),(393,33,86),(394,230,86);
/*!40000 ALTER TABLE `project_technologies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technologies`
--

DROP TABLE IF EXISTS `technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technologies` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` tinytext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_technologies_pk` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technologies`
--

LOCK TABLES `technologies` WRITE;
/*!40000 ALTER TABLE `technologies` DISABLE KEYS */;
INSERT INTO `technologies` VALUES (1,'SIR        '),(2,'Reseaux        '),(3,'expert réseaux'),(4,' cisco'),(5,' juniper'),(6,' maitrise protocole de routage'),(7,' exp terrain déploiement et archi ou ingénierie                 \r\n'),(8,'Dev        '),(9,'.net           '),(10,'c#'),(11,' wpf'),(12,' windows                                                                                                              \r\n'),(13,'JDE            '),(14,'developpeur sur l\'environnement JDE                                                                                           \r\n'),(15,'Telecom    '),(16,'Radio          '),(17,'ingénieur radio avec forte expertise                                                                                          \r\n'),(18,'Web            '),(19,'HTML 5'),(20,' expert VMWare                                                                                                         \r\n'),(21,'divers         '),(22,'validation'),(23,' maquettage'),(24,' prototypage                                                                                           \r\n'),(25,'           '),(26,'similaiire Rassim Baghli                                                                                                      \r\n'),(27,'Php'),(28,' Html 5'),(29,' .net'),(30,' wordpress'),(31,' drupal'),(32,' Ez Publish                                                                              \r\n'),(33,'VOIP           '),(34,'SIP'),(35,' H323'),(36,' QC                                                                                                                 \r\n'),(37,'TOIP           '),(38,' centrex'),(39,' PABX                                                                                                           \r\n'),(40,'Ingénieur réseaux et sécurité                                                                                                 \r\n'),(41,'Java           '),(42,'J2EE Swing'),(43,' html 5 + Exp telecom                                                                                              \r\n'),(44,'cdp'),(45,' dir projet'),(46,'  expert réseaux lan'),(47,' wan'),(48,' nortel'),(49,' bluecoat                                                   \r\n'),(50,'ingénieur reseaux'),(51,' cacti'),(52,' syslog'),(53,' BNA                                                                                         \r\n'),(54,'API'),(55,' windows 8'),(56,' autodidacte'),(57,' Cdp'),(58,' concepteur de service'),(59,' Agile                                                                \r\n'),(60,'Cœur de réseaux'),(61,'lte'),(62,' epc'),(63,' dimensionnement'),(64,' trafic                                                                                             \r\n'),(65,'ingénieur et chef de projet réseaux ip'),(66,' web tv'),(67,' streaming'),(68,' H264..                                                             \r\n'),(69,'Arc hitecte reseaux sécurité coté Build                                                                                       \r\n'),(70,'Système        '),(71,'Admin système'),(72,' virtualisation et stockage'),(73,' 3 ans XP'),(74,' cloud'),(75,' vmware'),(76,' netapp'),(77,' emc'),(78,' ibm svc'),(79,'                                     \r\n'),(80,'                                                                                                                              \r\n'),(81,'Pabx alcatel                                                                                                                  \r\n'),(82,'paquets        '),(83,' connaissance paquets'),(84,' sonde'),(85,' QoS'),(86,' core'),(87,' Cisco                                                                     \r\n'),(88,'IMS            '),(89,'dev serveur applicatif'),(90,' IMS'),(91,' intégration media en temps réel                                                                  \r\n'),(92,'Fonctionnel'),(93,'cdp avec grosse composante Réseaux Acces et connaissance Orange.                                                              \r\n'),(94,'Dev web interface (ihm)'),(95,' Php/Java'),(96,' framework interne OpenSource'),(97,'                                                              \r\n'),(98,'cdp                                                                                                                           \r\n'),(99,'expertise sur domaine on maitrisé'),(100,' ou validation de produit et service innovation testfonctionnel'),(101,' qualification protocolaire.\r\n'),(102,'dessinateur    '),(103,'Dessinateur projeteur en FTTH                                                                                                 \r\n'),(104,'Exceptionnel mais pas impossible                                                                                              \r\n'),(105,'Cdp avec background deploiement ou Trans                                                                                      \r\n'),(106,' mobile'),(107,' analyse de trace ip'),(108,' connaissance des réseaux télécom                                                            \r\n'),(109,'cdp reseaux'),(110,' TOIP'),(111,' très bon relationnel                                                                                       \r\n'),(112,'Sonde          '),(113,' tektronic'),(114,' tequelec'),(115,' déploiement architecture sonde                                                                    \r\n'),(116,'besoins spécifiques en fonction des opportunités                                                                              \r\n'),(117,'architecte réseaux ou archi technique/                                                                                        \r\n'),(118,'en fonction des besoins'),(119,' expert dans certaines techno anticipé                                                                \r\n'),(120,'EAI            '),(121,'developpeur EAI'),(122,' SOA'),(123,' BPM'),(124,' TIPCO                                                                                              \r\n'),(125,'SIR reseaux et système +dev                                                                                                   \r\n'),(126,'Réseaux acces  '),(127,' Alu'),(128,' UTRAN'),(129,'                                                                                                              \r\n'),(130,' zend'),(131,' J2ee                                                                                                               \r\n'),(132,'PFS            '),(133,'besoins divers dans ses équipes'),(134,' voir avec Cdp                                                                                \r\n'),(135,'Expert sur certaines composantes réseaux                                                                                      \r\n'),(136,'API réseaux sociaux'),(137,' web RTC'),(138,'                                                                                                 \r\n'),(139,' SIP/SIP+'),(140,' HTML 5                                                                                                         \r\n'),(141,'Transverse SI et Telecom en fonction beuz                                                                                     \r\n'),(142,' Genesys'),(143,' fixe'),(144,' pabx                                                                                                      \r\n'),(145,'architecte'),(146,' concepteur de service (intgr PFS)                                                                                 \r\n'),(147,'Web (J2EE)'),(148,' Mobile (IOS'),(149,' Android)                                                                                             \r\n'),(150,' pabx'),(151,' ip'),(152,' ccna                                                                                              \r\n'),(153,'En fonctiond des projets'),(154,' besoins spécifiques                                                                                 \r\n'),(155,' microsoft'),(156,' projet OVP                                                                                              \r\n'),(157,'dev c/c++'),(158,' API réseaux sociaux'),(159,' Java/J2EE'),(160,' API webservices'),(161,' Agile'),(162,' architecture fonctionnelle                                 \r\n'),(163,'Ingénieur système'),(164,' supervision'),(165,' scripting                                                                                     \r\n'),(166,'validation SIP'),(167,' support pour valider patch correctif                                                                    \r\n'),(168,'altiris'),(169,' besoins spé et très rare car pas les ressources en interne                                                           \r\n'),(170,' profil validation VOIP                                                                                      \r\n'),(171,' Microsoft LINK'),(172,' MS Exchange'),(173,' MS server'),(174,' AD                                                                               \r\n'),(175,'PABX'),(176,' avaya'),(177,' service'),(178,' SIP à connaitre                                                                         \r\n'),(179,'??         '),(180,'à appronfondir'),(181,' rappel en septembre pour parler présentation                                                                  \r\n'),(182,'BTP        '),(183,'Projecteur     '),(184,'Dessinateur projeteur en BTP                                                                                                  \r\n'),(185,'Ex: Olivier GIRARD                                                                                                            \r\n'),(186,'à voir en fonction des beuz                                                                                                   \r\n'),(187,'technicien support niveau 1 avec un de bonne base en finance                                                                  \r\n'),(188,'Chef de projet transverse                                                                                                     \r\n'),(189,'ex Abou Ndiaye + exp                                                                                                          \r\n'),(190,' C++                                                                                                                     \r\n'),(191,'voix'),(192,' http'),(193,' SIP ex audioconf'),(194,' à approfondir'),(195,' avec Bertrand Goareguer                                                          \r\n'),(196,' php/html5/CSS'),(197,' Android'),(198,' iphone'),(199,' Zend                                                                                     \r\n'),(200,'IOS                                                                                                                           \r\n'),(201,'validation de PFS                                                                                                             \r\n'),(202,'PMO            '),(203,' chef de projet transverse avec verni telecom reseaux                                                                     \r\n'),(204,'referent applicatif'),(205,' experience en TMA et gestion de projet                                                                   \r\n'),(206,'recherche des expert dans des techno ou équipement spé                                                                        \r\n'),(207,'Test       '),(208,'terminaux      '),(209,'technicien dans le domaine des test'),(210,' forfait                                                                                  \r\n'),(211,'bverni telecom'),(212,' cœur de réseaux et ip'),(213,' bonne perso'),(214,' Junior                                                                    \r\n'),(215,'Architecte système'),(216,' MPLS'),(217,' Wifi'),(218,' radio                                                                                     \r\n'),(219,'similaire Tissam  TIZAOUI - contact pour presta                                                                               \r\n'),(220,' html5'),(221,' IOS'),(222,' Android                                                                                                      \r\n'),(223,'deploiement relais etc… similaire Poaty                                                                                       \r\n'),(224,'parametrage LTE'),(225,' QoS                                                                                                          \r\n'),(226,'dev java'),(227,' javascript'),(228,' virtualisation bureau virtuel                                                                    \r\n'),(229,'transverse type Mallegol                                                                                                      \r\n'),(230,'SIP et nouvelles technologies dans le domaine VOIP                                                                            \r\n');
/*!40000 ALTER TABLE `technologies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `villes`
--

DROP TABLE IF EXISTS `villes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `villes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `zip_code` bigint(5) NOT NULL,
  `country_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_uk_1` (`zip_code`),
  KEY `foreign_fk_11` (`country_id`),
  CONSTRAINT `foreign_fk_11` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `villes`
--

LOCK TABLES `villes` WRITE;
/*!40000 ALTER TABLE `villes` DISABLE KEYS */;
/*!40000 ALTER TABLE `villes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-12-07 21:21:54
