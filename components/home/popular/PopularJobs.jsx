import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import {
  jobCountryCode,
  jobRadius,
  popularJobTerm,
} from '../../../constants/config';

const PopularJobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: popularJobTerm,
    country: jobCountryCode,
    radius: jobRadius,
    num_pages: 1,
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (job) => {
    router.push(`/job-details/${job.job_id}`);
    setSelectedJob(job.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trending</Text>
        <TouchableOpacity
          onPress={() => router.push(`/popular-jobs/${popularJobTerm}`)}
        >
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                job={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(job) => job?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
