import * as Localization from 'expo-localization';
import i18n from "i18n-js";
import vi from "./vi.json"
import en from "./en.json"

i18n.translations = {
  en,vi
  // Thêm các ngôn ngữ khác nếu cần
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;
export default i18n;
