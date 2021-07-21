// Libraries
import I18n from "ex-react-native-i18n";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Trasnlations

import en from "./en.json";
import az from "./az.json";
import ru from "./ru.json";

// Bind Translations

I18n.translations = {
  en,
  az,
  ru,
};

// PhoneLocalization

export const getLang = async () => {
  I18n.fallbacks = true;
  try {
    if (await AsyncStorage.getItem("@language")) {
      AsyncStorage.getItem("@language").then(async (lang) => {
        I18n.locale = lang;
        Localization.locale = lang;
        I18n.localShort = await AsyncStorage.getItem("@language");
      });
    } else {
      setLang("az");
    }
    I18n.initAsync();
  } catch (error) {
    console.warn(error.message);
  }
};

export const setLang = async (lang) => {
  try {
    await AsyncStorage.setItem("@language", lang);
    I18n.locale = await AsyncStorage.getItem("@language");
    I18n.localShort = await AsyncStorage.getItem("@language");
    Localization.locale = await AsyncStorage.getItem("@language");
    I18n.initAsync();
  } catch (error) {
    console.warn("Dil Seçilmədi.");
  }
};

// Function

export function t(key) {
  return I18n.t(key);
}
