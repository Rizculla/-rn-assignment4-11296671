import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JobCard from './JobCard';

const PopularJobs = ({ jobs }) => {
  return (
    <View style={styles.popularJobsContainer}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  popularJobsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PopularJobs;
