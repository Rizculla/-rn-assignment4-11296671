import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ companyLogo, jobTitle, company, salary, location, cardColor }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: cardColor }]}>
      <View style={styles.logoContainer}>
        <Image source={companyLogo} style={styles.companyLogo} />
      </View>
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.company}>{company}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: 280,
    height: 186,
  },
  logoContainer: {
    marginRight: 16,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  company: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  location: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default JobCard;
