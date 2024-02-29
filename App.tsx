import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { GlobalStyles }                                    from './SRC/style/GlobalStyle';
import { useState }                                        from 'react';


export default function App() {

  const [textoFrase, setTextoFrase] = useState<string>('')

  const [frases,         setFrases] = useState<string[]>(

    [
      "O sucesso está na jornada, não apenas no destino",
      "Grandes oportunidades surgem quando menos esperamos.",
      "Acredite no impossível e torne-o realidade.",
      "A persistência é a chave para alcançar seus sonhos.",
      "Seja corajoso o suficiente para seguir seu coração.",
      "Seja corajoso o suficiente para seguir seu coração.",
      "Sua sorte está prestes a mudar para melhor.",
      "A vida é uma aventura - aproveite cada momento.",
      "Seja gentil consigo mesmo e com os outros; isso trará paz e harmonia."
    ]
  )

  const handleQuebraBiscoito = ()=>{

    let numberRandom = Math.floor(Math.random() * frases.length)

    setTextoFrase('"' + frases[numberRandom] + '"')
  }

  return (

    <View style={GlobalStyles.container}>

        <Image
          style={GlobalStyles.img}
          source={require('./SRC/assets/CookieClosed copy.png')}
        />

      <Text style={GlobalStyles.textFrase}>{textoFrase}</Text>

      <TouchableOpacity style={GlobalStyles.button} onPress={handleQuebraBiscoito}>

            <View style={GlobalStyles.btnArea}>

                <Text style={GlobalStyles.btnText}>Quebrar biscoito</Text>

            </View>

      </TouchableOpacity>

    </View>
  );
}


