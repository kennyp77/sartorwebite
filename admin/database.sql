-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2022 at 01:28 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `email`) VALUES
(85, 'kui@gmail.com'),
(86, 'kziwsbdweb@gmail.com'),
(87, 'kudsdi@gmail.com'),
(88, 'kehinde.popoola@pm.me'),
(89, 'j@gmail.com'),
(90, 'jui@gmail.com'),
(91, 'taip56@pm.me'),
(92, 'kpopol@gmail.com'),
(93, 'KPOP@GMAIL.COM'),
(94, 'H@I.COM'),
(95, 'press@sartor.io');

-- --------------------------------------------------------

--
-- Table structure for table `brandinfo`
--

CREATE TABLE `brandinfo` (
  `id` int(11) NOT NULL,
  `first` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brandinfo`
--

INSERT INTO `brandinfo` (`id`, `first`, `last`, `email`) VALUES
(5, '', '', 'KPOP@GMAIL.COM'),
(6, 'fff', 'fff', 'KPOP@GMAIL.COM'),
(7, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(8, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(9, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(10, 'fdg', 'gfdggfgfdg', 'kpopol@gmail.com'),
(11, 'fdg', 'gfdggfgfdg', 'kpopolgfg@gmail.com'),
(12, 'fdg', 'gfdggfgfdg', 'kpopolgfg@gmail.com'),
(13, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(14, 'fdg', 'gfdgdsad', 'kpopol@gmail.comdsad'),
(15, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(16, 'fdg', 'gfdgdsad', 'kpopol@gmail.comdsad'),
(17, 'fdg', 'gfdgdsad', 'kpopol@gmail.comdsad'),
(18, 'fdg', 'gfdg', 'kpopol@gmail.comdsad'),
(19, 'fdg', 'gfdgdsad', 'kpopol@gmail.com'),
(20, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(21, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(22, 'fdg', 'gfdg', 'kpopol@gmail.com'),
(23, 'fdg', 'gfdg', 'kpopol@gmail.comdsad'),
(24, 'fdg', 'gfdgdsad', 'kpopol@gmail.comdsad'),
(25, 'fdg', 'gfdg', 'kpopol@gmail.comdsad'),
(26, 'fdg', 'gfdg', 'kpopol@gmail.comdsad'),
(27, 'fff', 'fff', 'KPOP@GMAIL.COM'),
(28, 'fff', 'fff', 'KPOP@GMAIL.COM'),
(29, 'fff', 'fff', 'KPOP@GMAIL.COM'),
(30, 'taiwo', 'popoola', 't.popoola@sartor.io');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `name`, `email`, `message`) VALUES
(1, 'taiwo', 'gghg', ' FDSFDSF'),
(2, 'taiwo', 'gghg@GMAIL', ' FDSFDSF SADSADF ASDF ASFAS '),
(3, 'fsaf', 'SDSAD', ' SDSADA'),
(4, 'sartorfit', 'press@sartor.io', ' gfdgfe'),
(5, 'sartorfit', 'press@sartor.ioyyt', ' yu tytyjyt jytjtyjty jytjtyjt yjytyjtyjt rg ergerg'),
(6, 'sartorfit', 'press@sartor.io', ' dsadasd'),
(7, 'Press unsucribe group', 'press@sartor.io', 'mkgj hgfj nfgjeh nrgjn rrjebfebrg '),
(8, 'BRAND Reject', 'press@sartor.io', ' dfdfdsfsd'),
(9, 'fgd', 'press@sartor.io', ' fgdfgdg'),
(10, 'fgd', 'press@sartor.io', ' fgdfgdg');

-- --------------------------------------------------------

--
-- Table structure for table `em`
--

CREATE TABLE `em` (
  `em_id` int(10) NOT NULL,
  `business_email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `em`
--

INSERT INTO `em` (`em_id`, `business_email`) VALUES
(155, 'kpopoola70@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `rsv`
--

CREATE TABLE `rsv` (
  `user_id` int(10) NOT NULL,
  `first` varchar(225) NOT NULL,
  `last` varchar(225) NOT NULL,
  `business_email` varchar(225) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `company` varchar(225) NOT NULL,
  `revenue` varchar(225) NOT NULL,
  `wesite_url` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  `city` varchar(225) NOT NULL,
  `state` varchar(225) NOT NULL,
  `zip_code` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rsv`
--

INSERT INTO `rsv` (`user_id`, `first`, `last`, `business_email`, `phone`, `company`, `revenue`, `wesite_url`, `address`, `city`, `state`, `zip_code`) VALUES
(26, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(27, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '100k- 1million', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(28, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(29, 'taiwoutry', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(30, 'taiwoutry', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(31, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(32, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(33, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034'),
(34, 'taiwo', 'popoola', 't.popoola@sartor.io', '3145832694', 'Assistance Home Care', '0-100k', 'https://www.sartor.io', '652 foxtail dr', 'St. Louis', 'KS', '63034');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brandinfo`
--
ALTER TABLE `brandinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `em`
--
ALTER TABLE `em`
  ADD PRIMARY KEY (`em_id`);

--
-- Indexes for table `rsv`
--
ALTER TABLE `rsv`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `brandinfo`
--
ALTER TABLE `brandinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `em`
--
ALTER TABLE `em`
  MODIFY `em_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `rsv`
--
ALTER TABLE `rsv`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
