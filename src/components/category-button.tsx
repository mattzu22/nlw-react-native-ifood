import { View, Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx"
 
//pressable = tmb é um componente pra toque só que sem animação 

interface CategoryProps extends PressableProps{
    title: string;
    isSelected?: boolean;
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps){
    return(
        <Pressable 
            className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10 border-2 border-transparent", 
            isSelected && "border-2 border-lime-300")     
        }
            {...rest}
        >
            <Text className="text-slate-100 font-subtitle text-sm">
                {title}
            </Text>
        </Pressable>
    )
}