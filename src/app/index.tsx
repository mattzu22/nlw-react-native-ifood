import { View, FlatList } from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

//flatlist = exibir om conteudo em lista
//componentes nativos do react
//view = representação de uma div no html
//text = representação de um paragrafo
export default function Home() {
  const [selected, setSelected] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setSelected(selectedCategory);
  }

  return (
    <View className="bg-slate-900 flex-1 ">
      <Header title="Faça seu pedido" cartQuantity={2}/>

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
    </View>
  );
}
