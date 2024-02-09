import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-current";

import { Button } from "@/components/button"; 

import {Feather} from "@expo/vector-icons"
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";
 
export default function Product() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const cartStore = useCartStore();

  const product = PRODUCTS.filter((product) => product.id === id)[0];
  
  function handleAddToCart(){
    cartStore.add(product)

    navigation.goBack()
  }

  return (
    <View className="flex-1 pt-20">
      <Image
        source={product.cover}
        className="w-full h-52 cover"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((item) => (
          <Text key={item} className="text-slate-400 font-body text-base leading-6">
            {"\u2022"}{item}
           </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
            <Button onPress={handleAddToCart}>
                <Button.Icon>
                    <Feather name="plus-circle" size={20} />
                </Button.Icon>
                <Button.Text>
                    Adicionar ao pedido 
                </Button.Text>
            </Button>
            <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
