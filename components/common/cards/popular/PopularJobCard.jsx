import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

import { images } from '../../../../constants';

import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ job, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, job)}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, job)}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo
              : images.DEFAULT_EMPLOYER_LOGO_URL,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, job)} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {job.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
