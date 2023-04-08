import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import tw from 'twrnc';
import BackBtn from '../components/Buttons/BackBtn';
import styles from '../styles/Help';
import Markdown from '@ronradtke/react-native-markdown-display';
import helpContent from '../constants/helpContent';

const Help = () => {
  return (
    <ScrollView>
      <View style={tw`p-5`}>
        <View style={tw`flex flex-row items-center mb-7`}>
          <BackBtn style={tw`mr-1.5`} />
          <Text style={[styles.heading, tw`pb-1`]}>Help</Text>
        </View>

        <View>
          <Markdown
            style={{
              body: styles.contentBody,
              heading1: styles.contentHeading,
              heading2: styles.contentHeading,
              heading3: styles.contentHeading,
            }}>
            {helpContent}
          </Markdown>
        </View>
      </View>
    </ScrollView>
  );
};

export default Help;
