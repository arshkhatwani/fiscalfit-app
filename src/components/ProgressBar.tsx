import { View } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { progressGradient } from '../constants/colors';
import styles from '../styles/ProgressBar';

interface Props {
  maxVal: number;
  curVal: number;
}

const ProgressBar: FC<Props> = ({ curVal, maxVal }) => {
  const progress = (curVal * 100) / maxVal;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={progressGradient}
        start={{ y: 0.5, x: 0 }}
        end={{ y: 0.5, x: 1 }}
        style={{
          width: `${progress}%`,
          height: '100%',
        }}
      />
    </View>
  );
};

export default ProgressBar;
