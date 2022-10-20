import {Layout} from '@ui-kitten/components';
import {useTheme, useStyleSheet, StyleService} from '@ui-kitten/components';

import React from 'react';

type Props = {
  children: any,
  eva?: any,
  style?: any,
};

const Screen = (props: Props) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={[styles.view, {color: theme['color-primary-100']}]}>
      {props.children}
    </Layout>
  );
};

const themedStyles = StyleService.create({
  view: {
    backgroundColor: 'color-primary-500',
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: '5%',
  },
});
export default Screen;
