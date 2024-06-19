import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ logoSrc, altText, jobTitle, companyName, salary, location }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={logoSrc} style={styles.logo} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{jobTitle}</Text>
        <Text style={styles.subtitle}>{companyName}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const PopularJobs = ({ jobs }) => {
  return (
    <View style={styles.popularJobsContainer}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle}
          companyName={job.companyName}
          salary={job.salary}
          location={job.location}
          logoSrc={job.logoSrc}
          altText={`${job.companyName} logo`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  popularJobsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#1E90FF',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});

export default PopularJobs;
