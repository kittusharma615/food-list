import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function AppHeader() {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        row: {
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'center',
          height: scaler(60),
          paddingHorizontal: scaler(16),
        },
        logout: {
          paddingLeft: scaler(10),
          paddingVertical: scaler(10),
        },
      }),
    [],
  );
  return (
    <Row style={styles.row}>
      <Typography type={'regular'} fontWeight={'500'} fontSize={scaler(20)}>
        Food List App
      </Typography>
    </Row>
  );
}

export default AppHeader;
