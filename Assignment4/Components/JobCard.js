import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ companyLogo, jobTitle, company, salary, location }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: String(companyLogo) }} style={styles.companyLogo} />
      </View>
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  logoContainer: {
    marginRight: 16,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  salary: {
    fontSize: 16,
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
});

export default JobCard;
