import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Shop from './src/screens/Shop'
import store from './src/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView>
          <StatusBar />
          <Shop />
        </SafeAreaView>
      </Provider>
    </>
  )
}
