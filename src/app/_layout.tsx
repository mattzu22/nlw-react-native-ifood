import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/loading"

//slot- insere todas as rotas aqui
//safe - escapar de detalhes fisicos, como detalhes dos celulares
//usefonts = serve pra cerregar as fonts 
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
}
