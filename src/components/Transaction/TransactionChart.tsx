import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { VictoryPie, VictoryTheme } from 'victory-native';
import { earnColor, spendColor } from '../../constants/colors';
import { font } from '../../constants/fonts';
import { getTransactions } from '../../redux/slices/transactionSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from '../../styles/Home';
import getTotalBalance from '../../utils/getTotalBalance';

const ChartLabel: FC<{ label: string; color: string }> = ({ label, color }) => {
  return (
    <View style={tw`flex flex-row`}>
      <View
        style={[{ height: 20, width: 20, backgroundColor: color }, tw`mr-2`]}
      />

      <Text style={{ fontFamily: font.semiBold.fontFamily }}>{label}</Text>
    </View>
  );
};

const TransactionChart = () => {
  const { userTransactions, isLoading } = useSelector(
    (state: RootState) => state.transactions,
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const { expense, earning } = getTotalBalance(userTransactions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [user]);

  if (!expense && !earning) return <></>;

  return (
    <View>
      <Text style={[tw`px-5 mb-6`, styles.heading]}>
        Your transactions status
      </Text>

      <View style={tw`flex flex-row px-5 justify-around`}>
        <ChartLabel label="Earnings" color={earnColor} />
        <ChartLabel label="Expenses" color={spendColor} />
      </View>

      <View style={tw`flex justify-center items-center `}>
        <VictoryPie
          theme={VictoryTheme.material}
          data={[
            { x: `Expenses`, y: expense },
            { x: 'Earnings', y: earning },
          ]}
          padding={30}
          labelComponent={<></>}
          colorScale={[spendColor, earnColor]}
          style={{ labels: { fontFamily: font.semiBold.fontFamily } }}
        />
      </View>
    </View>
  );
};

export default TransactionChart;
