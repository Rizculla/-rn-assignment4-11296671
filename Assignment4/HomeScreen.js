import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import Header from './Components/Header';
import SearchBar from './Components/Searchbar';
import FeaturedJobs from './Components/FeaturedJobs';
import PopularJobs from './Components/PopularJobs';

const HomeScreen = () => {
const featuredJobs = [

{
companyLogo: require('./assets/facebook.png'),
jobTitle: 'Software Engineer',
company: 'Facebook',
salary: '$180,000/y',
location: 'Accra, Ghana',
cardColor: "#4CAF50"
},
{
companyLogo: require('./assets/apple.png'),
jobTitle: 'Data Analyst',
company: 'Apple',
salary: '$380,000/y',
location: 'Sydney, Australia',
cardColor: '#0000FF'
},
{
companyLogo: require('./assets/burger.png'),
jobTitle: 'Chef',
company: 'Apple',
salary: '$80,000/y',
location: 'Sydney, Australia',
cardColor: '#4CAF50'
},
{
companyLogo: require('./assets/manager.png'),
jobTitle: 'Sales Girl',
company: 'Apple',
salary: '$30,000/y',
location: 'Sydney, Australia',
cardColor: '#8A2BE2'
},
{
companyLogo: require('./assets/google.png'),
jobTitle: 'Software Developer',
company: 'Google',
salary: '$120,000/y',
location: 'Mountain View, CA, USA',
cardColor: '#4285F4'
},
{
companyLogo: require('./assets/facebook.png'),
jobTitle: 'Data Analyst',
company: 'Facebook',
salary: '$90,000/y',
location: 'Redmond, WA, USA',
cardColor: '#F25022'
},
{
companyLogo: require('./assets/facebook.png'),
jobTitle: 'Graphic Designer',
company: 'Adobe',
salary: '$70,000/y',
location: 'San Jose, CA, USA',
cardColor: '#FF0000'
},
{
companyLogo: require('./assets/manager.png'),
jobTitle: 'Project Manager',
company: 'Amazon',
salary: '$110,000/y',
location: 'Seattle, WA, USA',
cardColor: '#FF9900'
}
];

const popularJobs = [

{
  jobTitle: 'Jr Executive',
  companyName: 'Burger King',
  salary: '$96,000/y',
  location: 'Los Angeles, US',
  logoSrc: require('./assets/burger.png'), 
},
{
  jobTitle: 'Product Manager',
  companyName: 'Beats',
  salary: '$84,000/y',
  location: 'Florida, US',
  logoSrc: require('./assets/manager.png'),
},
{
  jobTitle: 'Product Manager',
  companyName: 'Facebook',
  salary: '$86,000/y',
  location: 'Florida, US',
  logoSrc: require('./assets/facebook.png'),  
},
{
 logoSrc: require('./assets/manager.png'),
  jobTitle: 'Sales Girl',
  company: 'Apple',
  salary: '$30,000/y',
  location: 'Sydney, Australia',
  },
  {
  logoSrc: require('./assets/google.png'),
  jobTitle: 'Software Developer',
  company: 'Google',
  salary: '$120,000/y',
  location: 'Mountain View, CA, USA',
  },
  {
  logoSrc: require('./assets/burger.png'),
  jobTitle: 'Data Analyst',
  company: 'Facebook',
  salary: '$90,000/y',
  location: 'Redmond, WA, USA',
  },
  {
  logoSrc: require('./assets/manager.png'),
  jobTitle: 'Graphic Designer',
  company: 'Adobe',
  salary: '$70,000/y',
  location: 'San Jose, CA, USA',
  },
  {
  logoSrc: require('./assets/manager.png'),
  jobTitle: 'Project Manager',
  company: 'Amazon',
  salary: '$110,000/y',
  location: 'Seattle, WA, USA',
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
<ScrollView horizontal>
        <FeaturedJobs jobs={featuredJobs} />
      </ScrollView>
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