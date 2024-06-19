import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import Header from './Components/Header';
import SearchBar from './Components/Searchbar';
import FeaturedJobs from './Components/FeaturedJobs';
import PopularJobs from './Components/PopularJobs';

const HomeScreen = () => {
  const featuredJobs = [
    {
      companyLogo: require('./assets/apple.png'),
      jobTitle: 'Software Engineer',
      company: 'Facebook',
      salary: '$180,000/y',
      location: 'Accra, Ghana',
    },
    // Add more featured jobs here
  ];

  const popularJobs = [
    {
      companyLogo: require('./assets/burger.png'),
      jobTitle: 'Jr Executive',
      company: 'Burger King',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      companyLogo: require('./assets/manager.png'),
      jobTitle: 'Product Manager',
      company: 'Beats',
      salary: '$84,000/y',
      location: 'Florida, US',
    },
    {
      companyLogo: require('./assets/facebook.png'),
      jobTitle: 'Product Manager',
      company: 'Facebook',
      salary: '$86,000/y',
      location: 'Florida, US',
    },
    // Add more popular jobs here
  ];

  return (
    <ScrollView style={styles.container}>
      <Header
        userName="Rizculla"
        userEmail="BiggyBornchis123@gmail.com"
        profilePicture={require('./assets/profile.png')}
      />
      <SearchBar />
      <FeaturedJobs jobs={featuredJobs} />
      <PopularJobs jobs={popularJobs} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
