import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../../redux/slices/planSlice';
import PlanCard from './PlanCard';
import tw from 'twrnc';
import PillBtn from '../Buttons/PillBtn';
import { Text, Switch } from 'react-native-paper';
import styles from '../../styles/UserTransactions';
import { NEW_PLAN } from '../../constants/navigationLinks';
import DepositModal from './DepositModal';
import EmptyState from '../General/EmptyState';

const UserPlans = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch<AppDispatch>();
  const { userPlans, depositModalShow } = useSelector(
    (state: RootState) => state.plans,
  );
  const navigation = useNavigation();

  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const onToggleSwitch = () => setShowCompleted(!showCompleted);

  useEffect(() => {
    if (!isFocused) return;
    if (depositModalShow) return;

    dispatch(getPlans());
  }, [isFocused, depositModalShow]);
  return (
    <View style={tw`px-5`}>
      <View
        style={tw`flex flex-row items-center justify-between mt-2 mb-4 px-3`}>
        <Text style={styles.heading}>Plans</Text>

        <PillBtn
          label="Create Plan +"
          onPress={() => navigation.navigate(NEW_PLAN)}
        />
      </View>

      {userPlans.length === 0 && <EmptyState label="No plans" />}

      {userPlans.length > 0 && (
        <View style={tw`flex flex-row items-center mb-4`}>
          <Text style={tw`mr-2`}>Completed Plans</Text>
          <Switch value={showCompleted} onValueChange={onToggleSwitch} />
        </View>
      )}

      {userPlans.map(item => {
        return (
          item.completed === showCompleted && (
            <PlanCard
              key={item.pid}
              heading={item.name}
              curDeposit={item.deposit}
              target={item.target}
              category={item.category}
              pid={item.pid}
              completed={item.completed}
            />
          )
        );
      })}

      <DepositModal />
    </View>
  );
};

export default UserPlans;
