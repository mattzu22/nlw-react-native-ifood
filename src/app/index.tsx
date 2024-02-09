import { View, FlatList, SectionList, Text } from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState, useRef } from "react";
import { Product } from "@/components/product";

import { Link } from "expo-router"
import { useCartStore } from "@/stores/cart-store";


//flatlist = exibir om conteudo em lista
//componentes nativos do react
//view = representação de uma div no html
//text = representação de um paragrafo
export default function Home() {
  const [selected, setSelected] = useState(CATEGORIES[0]);
  const cartStore = useCartStore();
  const sectionListRef = useRef<SectionList>(null)

  const cartQunatityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)

  function handleCategorySelect(selectedCategory: string) {
    setSelected(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(category => category === selectedCategory)

    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="bg-slate-900 flex-1 ">
      <Header title="Faça seu pedido" cartQuantity={cartQunatityItems}/>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={selected === item}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
      
      <SectionList 
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({item}) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text className="text-white text-xl font-heading mt-8 mb-3">
            {title}
          </Text>
        )}

        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  );
}
