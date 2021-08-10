import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import Layout from 'src/Components/Custom/Layout/Layout';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import useApiFetch from 'src/Hooks/Shared/useApiFetch';
import scaler from 'src/Utils/Shared/scaler';
import FoodListModal from '../FoodListModal/FoodListModal';

function Dashboard() {
  const theme = useTheme();
  const [openFoodList, setOpenFoodList] = useState(false);
  const {data} = useApiFetch(
    ['https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970'],
    {},
  );
  const {data: foodListData} = data?.data ?? {data: []};
  const styles = useMemo(
    () =>
      StyleSheet.create({
        labelStyle: {
          color: theme.colors.white,
          fontSize: scaler(14),
        },
        searchStyle: {
          backgroundColor: theme.colors.white,
          elevation: 0.5,
          paddingLeft: scaler(10),
        },
        view: {
          height: '95%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [theme.colors.white],
  );
  return (
    <Layout>
      <Padding size={scaler(20)}>
        <View style={styles.view}>
          <Typography fontSize={scaler(16)} fontWeight="700" variant="primary">
            To Open Food List, Click below button
          </Typography>
          <Spacer size={scaler(30)} />
          <Button
            onPress={() => setOpenFoodList(true)}
            labelStyle={styles.labelStyle}
            mode={'contained'}>
            Open List
          </Button>
          <FoodListModal
            data={foodListData}
            openFoodList={openFoodList}
            onDismiss={() => setOpenFoodList(false)}
          />
        </View>
      </Padding>
    </Layout>
  );
}
export default Dashboard;
