import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import JobCard from './JobCard'; // Assuming you have a JobCard component

const FeaturedJobs = ({ jobs }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Featured Jobs</Text>
        <View style={styles.cardContainer}>
          {jobs.map((job, index) => (
            <View key={index} style={styles.cardWrapper}>
              <JobCard {...job} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  cardWrapper: {
    marginRight: 10, // Add margin to create space between cards
  },
});

export default FeaturedJobs;
