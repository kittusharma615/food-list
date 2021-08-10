import React, {Fragment, useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Searchbar, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomModal from 'src/Components/Custom/CustomModal/CustomModal';
import Center from 'src/Components/Shared/Center/Center';
import Col from 'src/Components/Shared/Col/Col';
import Padding from 'src/Components/Shared/Padding/Padding';
import Row from 'src/Components/Shared/Row/Row';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function FoodListModal({openFoodList, onDismiss, data}: any) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(0);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        searchStyle: {
          backgroundColor: theme.colors.white,
          elevation: 0.5,
          paddingLeft: scaler(10),
          borderRadius: scaler(10),
        },
        rowStyle: {
          alignItems: 'center',
          backgroundColor: theme.colors.white,
          padding: scaler(5),
        },
      }),
    [theme.colors.white],
  );

  const handleOpenId = (id: number) => {
    openId === id ? setOpenId(0) : setOpenId(id);
  };

  return (
    <CustomModal
      height={700}
      visible={openFoodList}
      title={'Approved Foods List'}
      backgroundColor={'#eae9ef'}
      onDismiss={onDismiss}>
      <Searchbar
        placeholder="Try searching fat, sauces names..."
        value={searchQuery}
        numberOfLines={1}
        allowFontScaling={true}
        placeholderTextColor="rgba(60,60,67,0.6)"
        iconColor={'#8E8E93'}
        style={styles.searchStyle}
        inputStyle={{marginLeft: -scaler(10), fontSize: scaler(14)}}
        onChangeText={setSearchQuery}
        clearIcon={() => <Fragment />}
      />
      <Spacer size={scaler(30)} />
      <Padding size={scaler(16)} horizontal>
        {data
          .filter((item: any) => item.title.includes(searchQuery))
          .map((food: any, index: number) => {
            return (
              <Fragment key={index}>
                <TouchableOpacity onPress={() => handleOpenId(food.id)}>
                  <Row style={styles.rowStyle}>
                    <Center>
                      <Image
                        source={{
                          uri: 'https://picsum.photos/200/300?random=',
                        }}
                        style={{
                          height: scaler(40),
                          width: scaler(40),
                          borderRadius: scaler(5),
                        }}
                        resizeMode={'cover'}
                      />
                    </Center>
                    <Spacer size={scaler(8)} horizontal />
                    <Typography
                      fontSize={scaler(14)}
                      color={theme.colors.primary}
                      fontWeight={'600'}>
                      {food.title}
                    </Typography>
                    <Col right>
                      <Center vertical>
                        <Icon
                          name={
                            food.id === openId ? 'chevron-up' : 'chevron-down'
                          }
                          color={'black'}
                          size={scaler(24)}
                        />
                      </Center>
                    </Col>
                  </Row>
                </TouchableOpacity>
                {food.id === openId ? (
                  food.data.map((item: any) => {
                    return (
                      <Fragment key={`${item.is}${index}`}>
                        <Row style={styles.rowStyle}>
                          <Spacer size={scaler(8)} horizontal />
                          <Spacer size={scaler(28)} />
                          <Typography
                            fontSize={scaler(14)}
                            color={theme.colors.ebony}
                            fontWeight={'600'}>
                            {item.title}
                          </Typography>
                        </Row>
                        <Spacer
                          size={0.5}
                          backgroundColor={theme.colors.secondary}
                        />
                      </Fragment>
                    );
                  })
                ) : (
                  <Fragment />
                )}
                <Spacer size={scaler(20)} />
              </Fragment>
            );
          })}
      </Padding>
    </CustomModal>
  );
}

export default FoodListModal;
