import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Layout,
  Text,
  useTheme,
  Button,
  ButtonGroup,
} from '@ui-kitten/components';
import {ICalendarDate, IDot} from '../types/Calendar';
import {
  DINNER1,
  DINNER2,
  DINNER3,
  DINNER4,
  LUNCH1,
  LUNCH2,
  LUNCH3,
  LUNCH4,
} from '../constants/CALENDAR';

type Props = {
  type: string,
  quantity: number,
  addDotToDate: (dataObject: IDot) => void,
  TODAY: string,
};

const Card = (props: Props) => {
  const theme = useTheme();

  const addDots = () => {
    if (props.type === 'dinner') {
      switch (props.quantity) {
        case 1: {
          props.addDotToDate(DINNER2, props.quantity);
          break;
        }
        case 2: {
          props.addDotToDate(DINNER3, props.quantity);
          break;
        }
        case 3: {
          props.addDotToDate(DINNER4, props.quantity);
          break;
        }
        default: {
          props.addDotToDate(DINNER4, props.quantity);
          break;
        }
      }
      return;
    }
    switch (props.quantity) {
      case 1: {
        props.addDotToDate(LUNCH2, props.quantity);
        break;
      }
      case 2: {
        props.addDotToDate(LUNCH3, props.quantity);
        break;
      }
      case 3: {
        props.addDotToDate(LUNCH4, props.quantity);
        break;
      }
      default: {
        props.addDotToDate(LUNCH4, props.quantity);
        break;
      }
    }
  };

  return (
    <Layout
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            props.type === 'dinner'
              ? theme['color-primary-200']
              : theme['color-primary-200'],
        },
      ]}>
      <Layout
        style={[
          styles.topContainer,
          {
            backgroundColor:
              props.type === 'dinner'
                ? theme['color-primary-200']
                : theme['color-primary-200'],
          },
        ]}>
        <Text style={styles.text} category="h4">
          {props.type === 'dinner' ? 'DINNER' : 'LUNCH'}
        </Text>
        <Text style={styles.text} category="h6">
          Qty {props.quantity}
        </Text>
      </Layout>

      <Layout style={styles.buttonContainer}>
        <ButtonGroup style={styles.buttonGroup} appearance="filled">
          <Button
            onPress={() => addDots()}
            style={[styles.button, {backgroundColor: theme['color-info-600']}]}>
            ADD
          </Button>
          <Button
            style={[styles.button, {backgroundColor: theme['color-info-500']}]}>
            EDIT
          </Button>
          <Button
            style={[
              styles.button,
              {backgroundColor: theme['color-primary-900']},
            ]}>
            DELETE
          </Button>
        </ButtonGroup>
      </Layout>
    </Layout>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  topContainer: {
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  buttonGroup: {
    margin: 2,
    flex: 1,
  },
  button: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
});
