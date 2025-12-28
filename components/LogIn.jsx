import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckIcon } from "./Icons";
import { useState } from "react";
import { router } from "expo-router";
import Constants from "expo-constants";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { ADMIN_EMAIL, ADMIN_PASSWORD } = Constants.expoConfig.extra;

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/arena-negra.jpg")}
        style={{ flex: 1 }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            {/* <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Pedidos</Text> */}
          </View>

          <View
            className="flex-row bg-black/20 p-4 m-2 rounded-2xl w-80 border border-white/30"
            style={{ minHeight: "auto", alignItems: "center" }}
          >
            {/* Columna izquierda: textos */}
            <View style={{ flex: 2, paddingRight: 10 }}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="white"
                placeholderStyle={{ fontWeight: "bold" }}
                style={{ color: "white", fontSize: 16, marginBottom: 10 }}
              />

              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="white"
                placeholderStyle={{ fontWeight: "bold" }}
                secureTextEntry
                style={{ color: "white", fontSize: 16 }}
              />
            </View>
            {/* Separador vertical */}
            <View
              style={{
                width: 1,
                backgroundColor: "rgba(255,255,255,0.3)",
                height: "80%",
                marginHorizontal: 8,
              }}
            />
            {/* Columna derecha: botones */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 4,
              }}
            >
              <Pressable
                onPress={() => {
                  if (email == ADMIN_EMAIL && password == ADMIN_PASSWORD) {
                    console.log("Logging in with:", email, password);
                  } else {
                    console.log("Invalid credentials");
                  }

                  router.replace("/orders");
                }}
                style={{
                  width: "100%",
                  height: 40,
                  marginVertical: 6,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: 6,
                  borderRadius: 6,
                }}
              >
                <CheckIcon color="#fff" size={20} />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};
