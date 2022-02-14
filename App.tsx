import React, {useEffect} from 'react';
import StackPages from './src/routes';
import * as Updates from "expo-updates";
export default function App() {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);

  return (
    <StackPages/>
  );
}
