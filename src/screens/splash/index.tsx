import AppData from 'components/splash/AppData';
import {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {appConfigActions} from 'redux/nodes/appConfig/slice';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const [isAppReady, setIsAppReady] = useState(false);

  const checkAppDataInitSuccess = (isDataInitSuccess: boolean) => {
    setIsAppReady(isDataInitSuccess);
  };

  useEffect(() => {
    if (isAppReady) {
      dispatch(appConfigActions.setIsAppInit(false));
    }
  }, [isAppReady]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('assets/images/splash/logo.png')} />
      <AppData checkAppDataInitSuccess={checkAppDataInitSuccess} />
    </View>
  );
};

export default SplashScreen;
