import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { headerGradient } from '../../constants/colors';
import styles from '../../styles/FeatureCard';

interface Props {
  heading: string;
  subHeading: string;
}

const FeatureCard: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <View style={[styles.container, tw`mx-auto`]}>
      <LinearGradient
        style={tw`p-5`}
        colors={headerGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}>
        <View>
          <Text style={[styles.heading, tw`mb-6`]}>{heading}</Text>

          <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FeatureCard;
