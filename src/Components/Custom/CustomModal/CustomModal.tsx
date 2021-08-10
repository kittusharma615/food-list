import React, {useMemo} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import scaler from 'src/Utils/Shared/scaler';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Padding from 'src/Components/Shared/Padding/Padding';
import Col from 'src/Components/Shared/Col/Col';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type PropType = {
  visible: boolean;
  title: string;
  onDismiss?: any;
  onDone?: any;
  children?: any;
  height?: number;
  backgroundColor?: string;
};

const CustomModal = ({
  visible,
  title,
  onDismiss,
  children,
  height,
  backgroundColor,
}: PropType) => {
  const theme = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        itemsRow: {
          flexDirection: 'column',
          borderColor: 'white',
          borderBottomWidth: scaler(1),
        },
        modalContent: {
          borderTopLeftRadius: scaler(25),
          borderTopRightRadius: scaler(25),
          backgroundColor: backgroundColor ?? 'white',
          height: scaler(height ?? 470),
        },
        modalView: {
          flex: 1,
          backgroundColor: '#0000006b',
          justifyContent: 'flex-end',
        },
        btnStyle: {
          fontSize: scaler(16),
          color: theme.colors.white,
        },
        textStyle: {
          alignSelf: 'center',
        },
        minus: {
          right: scaler(4),
          position: 'absolute',
        },
        doneBtnView: {
          position: 'absolute',
          bottom: scaler(0),
          right: scaler(0),
          zIndex: 1,
        },
        doneBtnStyle: {
          height: scaler(42),
          width: scaler(100),
          borderRadius: scaler(5),
          backgroundColor: theme.colors.primary,
        },
        btnText: {
          fontSize: scaler(14),
          color: theme.colors.white,
          textTransform: 'none',
        },
        justifyCenter: {
          justifyContent: 'center',
        },
        alignItemCenter: {
          alignItems: 'center',
        },
      }),
    [backgroundColor, height, theme.colors.primary, theme.colors.white],
  );

  if (visible) {
    return (
      <Modal
        hardwareAccelerated
        visible={visible}
        transparent={true}
        onRequestClose={onDismiss}
        animationType="slide"
        presentationStyle="overFullScreen">
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Spacer size={scaler(12)} />
            <Padding size={scaler(22)} horizontal>
              <Row style={styles.itemsRow}>
                <Col flex={0.2} style={{paddingHorizontal: scaler(10)}}>
                  <Spacer size={scaler(4)} backgroundColor={'#DEDEDE'} />
                </Col>
                <Spacer size={scaler(28)} />
                <Row
                  style={{...styles.justifyCenter, ...styles.alignItemCenter}}>
                  <Icon
                    onPress={onDismiss}
                    name={'close-thick'}
                    style={styles.minus}
                    color={theme.colors.ebony}
                    size={scaler(20)}
                  />
                  <Typography
                    fontSize={scaler(24)}
                    fontWeight={'700'}
                    type={'medium'}
                    color={theme.colors.ebony}>
                    {title}
                  </Typography>
                </Row>
                <Spacer size={20} />
                {children}
              </Row>
            </Padding>
          </View>
        </View>
      </Modal>
    );
  }
  return <View />;
};

export default CustomModal;
