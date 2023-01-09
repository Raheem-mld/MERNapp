-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 15 juin 2022 à 15:57
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `checkin`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

CREATE TABLE `annonce` (
  `id_annonce` int(11) NOT NULL,
  `firstname` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `cin` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `location` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `price` float DEFAULT NULL,
  `property` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`id_annonce`, `firstname`, `lastname`, `cin`, `email`, `phone`, `location`, `date`, `price`, `property`, `description`) VALUES
(1, 'oussma', 'messaoudi', 'AZ123', 'oussama@gmail.com', '0605040302', 'Oujda', '2022-05-20', 200, 'Room', 'A room in the middle of the city, with a small kitchen and a bachtroom.'),
(2, 'Mohammed', 'Salah', 'A123', 'mosalah@gmail.com', '0612345456', 'Qairo', '2022-05-21', 300, 'Appartment', 'An appartment with two rooms and a kitchen.'),
(3, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '212696284644', 'oujda', '2022-05-06', 11, 'Room', 'azerty'),
(4, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', 'casa', '2022-05-03', 123, 'Room', 'fffff'),
(5, 'abderrahim', 'Mouloudi', 'aa111', 'abderrahim.md99@gmail.com', '6284644', 'figuig', '2022-07-02', 122, 'Room', 'Azerrttyipfjdhjsfnsfgnsgfnfgnfgn'),
(6, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '212696284644', 'Fes', '2022-06-17', 1, 'Room', 'asdcvfrtg'),
(7, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', 'azsd', '2022-06-17', 11, 'Appartment', 'wxcvbbnb'),
(8, 'samir', 'elk', 'aa1111', 'samir@gmail.com', '12333333', 'figuig', '2022-06-16', 222, 'Room', 'saimir nnamir'),
(9, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', 'AAA', '2022-06-09', 1223450, 'Room', 'mimonzz'),
(10, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', 'taza', '2022-06-16', 1112, 'Room', 'taza'),
(11, 'mimoun', 'zouhri', 'aa1111', 'mimoun@gmail.com', '1111111111112', 'taza', '2022-06-17', 11, 'Room', 'wqssss'),
(12, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', 'taza', '2022-07-01', 1112, 'Room', 'zzzzzzzzzzzzeee');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` int(11) NOT NULL,
  `firstname` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `cin` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_annonce` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id_reservation`, `firstname`, `lastname`, `cin`, `email`, `phone`, `id_user`, `id_annonce`) VALUES
(1, 'Abderrahim', 'mouloudi', 'AA11111', 'abdo@gmail.com', '55558865', NULL, NULL),
(3, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '111111111111', NULL, NULL),
(4, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '111111111111', NULL, NULL),
(5, 'abderrahim', 'Mouloudi', 'aa11', 'abderrahim.md99@gmail.com', '2696284644', NULL, NULL),
(6, 'mimon', 'zouhri', 'aa1111', 'mim@gmail.com', '111111111111', NULL, NULL),
(7, 'oussama', 'messaoudi', 'am1111', 'ouss@gmail.com', '0612344565', NULL, NULL),
(8, 'abderrahim', 'Mouloudi', 'aa111', 'abderrahim.md99@gmail.com', '2696284644', NULL, NULL),
(9, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', NULL, NULL),
(10, 'abderrahim', 'Mouloudi', 'aa1111', 'abderrahim.md99@gmail.com', '12696284644', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `firstname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `cin` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `id_annonce` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `firstname`, `lastname`, `cin`, `email`, `phone`, `id_annonce`) VALUES
(1, 'admin', 'admin', 'Abderrahim', 'MOULOUDI', 'AA11111', 'abdo@gmail.com', '55558865', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD PRIMARY KEY (`id_annonce`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_annonce` (`id_annonce`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_annonce` (`id_annonce`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonce`
--
ALTER TABLE `annonce`
  MODIFY `id_annonce` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_annonce`) REFERENCES `annonce` (`id_annonce`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_annonce`) REFERENCES `annonce` (`id_annonce`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
