import React from 'react';
import { ActivityIndicator, withTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const DisplayLoading = () => {
  const styles = createStyles();
  return /*#__PURE__*/React.createElement(ActivityIndicator, {
    animating: true,
    size: "large",
    style: styles.container
  });
};

const createStyles = () => StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default withTheme(DisplayLoading);
//# sourceMappingURL=index.js.map