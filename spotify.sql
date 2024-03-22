-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 20 mars 2024 à 14:55
-- Version du serveur : 8.0.33
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `listenme`
--

-- --------------------------------------------------------

--
-- Structure de la table `bots`
--

DROP TABLE IF EXISTS `bots`;
CREATE TABLE IF NOT EXISTS `bots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(45) DEFAULT NULL,
  `botId` varchar(80) DEFAULT NULL,
  `botToken` varchar(500) DEFAULT NULL,
  `addedOn` varchar(200) NOT NULL DEFAULT '0',
  `lastUsed` varchar(200) NOT NULL DEFAULT '0',
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `botId_UNIQUE` (`botId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `musics`
--

DROP TABLE IF EXISTS `musics`;
CREATE TABLE IF NOT EXISTS `musics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `music` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png',
  `inPlaylist` tinyint DEFAULT NULL,
  `playlistId` int DEFAULT NULL,
  `addedTimestamp` datetime DEFAULT NULL,
  `likes` tinytext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `link_UNIQUE` (`music`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `keyPlaylistId_idx` (`playlistId`),
  KEY `keyUserId_idx` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `musics`
--

INSERT INTO `musics` (`id`, `userId`, `music`, `name`, `subtitle`, `image`, `inPlaylist`, `playlistId`, `addedTimestamp`, `likes`) VALUES
(10, 14, 'Invite/OneMoreTime.mp3', 'OneMoreTime', 'Invite', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(11, 14, 'invite/TakeOnMe.mp3', 'TakeOnMe', 'invite', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(12, 14, 'Invite/InspecteurGadget.mp3', 'InspecteurGadget', 'Invite', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(13, 14, 'yeah/FousTaCagoule.mp3', 'FousTaCagoule', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(14, 14, 'yeah/HEYYEYAAEYAAAEYAEYAA.mp3', 'HEYYEYAAEYAAAEYAEYAA', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(15, 14, 'yeah/MrBombastic.mp3', 'MrBombastic', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(16, 14, 'yeah/Buttercup.mp3', 'Buttercup', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(17, 14, 'yeah/LePrésident.mp3', 'LePrésident', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(20, 14, 'drshell/Cupid.mp3', 'Cupid', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(21, 14, 'drshell/Yolo.mp3', 'Yolo', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(24, 14, 'yeah/blabla.mp3', 'blabla', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(25, 14, 'yeah/Gimme.mp3', 'Gimme', 'yeah', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(26, 14, 'drshell/Cyanide.mp3', 'Cyanide', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(27, 14, 'drshell/FunkTribu.mp3', 'FunkTribu', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(28, 14, 'drshell/Ozymandias.mp3', 'Ozymandias', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(29, 14, 'drshell/SpitInMyFace.mp3', 'SpitInMyFace', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(30, 14, 'drshell/BabyImYours.mp3', 'BabyImYours', 'drshell', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(31, 14, 'parfait/RiderTouteLaNight.mp3', 'RiderTouteLaNight', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(32, 14, 'parfait/JohnCena.mp3', 'JohnCena', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(33, 14, 'parfait/LoveLikeThis.mp3', 'LoveLikeThis', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(34, 14, 'parfait/Walmart.mp3', 'Walmart', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(42, 14, 'parfait/MoneyTreeGG.mp3', 'MoneyTreeGG', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(43, 14, 'parfait/Vanished.mp3', 'Vanished', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(44, 14, 'parfait/RougeJauneVert.mp3', 'RougeJauneVert', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(45, 14, 'parfait/Shavkat.mp3', 'Shavkat', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1'),
(46, 14, 'parfait/LesramGrunt54.mp3', 'LesramGrunt54', 'parfait', 'https://cdn.discordapp.com/attachments/1124534948989255761/1131823644159528980/likes.png', 0, NULL, NULL, '1');

-- --------------------------------------------------------

--
-- Structure de la table `parties`
--

DROP TABLE IF EXISTS `parties`;
CREATE TABLE IF NOT EXISTS `parties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `members` varchar(255) DEFAULT NULL,
  `max_members` int DEFAULT '5',
  `status` int DEFAULT '0',
  `owner` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
CREATE TABLE IF NOT EXISTS `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `playlistUserId_idx` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `playlists`
--

INSERT INTO `playlists` (`id`, `userId`, `name`) VALUES
(1, 1, 'Likes'),
(2, 1, 'Bonjour'),
(3, 1, 'Rap'),
(4, 2, 'Likes'),
(5, 2, 'Rap');

-- --------------------------------------------------------

--
-- Structure de la table `servers`
--

DROP TABLE IF EXISTS `servers`;
CREATE TABLE IF NOT EXISTS `servers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serverId` varchar(100) NOT NULL,
  `userAccount` varchar(45) DEFAULT NULL,
  `serverUsed` int NOT NULL DEFAULT '0',
  `lastUsed` varchar(200) NOT NULL DEFAULT '0',
  `addedOn` varchar(200) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idservers_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `audioQuality` int NOT NULL DEFAULT '3',
  `audioDefaultVolume` int NOT NULL DEFAULT '50',
  `audioStatus` int NOT NULL DEFAULT '0',
  `audioAutoDownload` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_UNIQUE` (`userId`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `settings`
--

INSERT INTO `settings` (`id`, `userId`, `audioQuality`, `audioDefaultVolume`, `audioStatus`, `audioAutoDownload`) VALUES
(1, 14, 75, 50, 0, 0),
(2, 1, 3, 50, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `isVerified` tinyint NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `isAdmin` int NOT NULL DEFAULT '0',
  `registerDate` varchar(255) NOT NULL,
  `lastConnection` varchar(255) DEFAULT NULL,
  `songsAdded` int DEFAULT NULL,
  `songsPlayed` int DEFAULT NULL,
  `discordState` varchar(255) DEFAULT NULL,
  `discordDetails` varchar(255) DEFAULT NULL,
  `discordStartTimestamp` varchar(255) DEFAULT NULL,
  `discordLargeImageText` varchar(255) DEFAULT NULL,
  `discordSmallImageText` varchar(45) DEFAULT NULL,
  `discordPartyId` varchar(255) DEFAULT NULL,
  `discordPartySize` int DEFAULT '1',
  `discordPartyMax` int DEFAULT NULL,
  `discordJoinSecret` varchar(255) DEFAULT 'sCKdsokjdsocdsCDScjdsoz',
  `2fa` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `bio`, `isVerified`, `token`, `isAdmin`, `registerDate`, `lastConnection`, `songsAdded`, `songsPlayed`, `discordState`, `discordDetails`, `discordStartTimestamp`, `discordLargeImageText`, `discordSmallImageText`, `discordPartyId`, `discordPartySize`, `discordPartyMax`, `discordJoinSecret`, `2fa`) VALUES
(1, 'alsetnetwork@gmail.com', 'drshell', 'bonjour', 'hey!', 1, '1', 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(2, 'ad.design.payement@gmail.com', 'invité', 'invité', 'Hey!', 1, '2', 0, '', '1695063006295', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(13, 'zaertyg@gmail.com', 'yeah', 'yeah', NULL, 0, NULL, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(14, 'parfait@gmail.com', 'parfait', '*', NULL, 0, NULL, 0, '1690334645539', '1704724461948', 8, 385, 'parfait', 'LesramGrunt54', '1704724483653', 'https://melosync.fr', 'Titre: ', 'Melosync', 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(15, 'bonjour@gmail.com', 'bonjour', 'bonjour', NULL, 0, NULL, 0, '1690388667100', '1690388667100', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(16, 'parfaita@gmail.com', 'parfaita', 'parfaita', NULL, 0, NULL, 0, '1690388986934', '1690388986934', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL),
(17, 'ad.design.spayement@gmail.com', 'parfaits', 'parfaits', NULL, 0, NULL, 0, '1690389088684', '1690391984549', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'sCKdsokjdsocdsCDScjdsoz', NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `musics`
--
ALTER TABLE `musics`
  ADD CONSTRAINT `keyUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlistUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `settings`
--
ALTER TABLE `settings`
  ADD CONSTRAINT `settingsUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
