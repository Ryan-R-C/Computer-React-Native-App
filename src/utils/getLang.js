import { Platform, NativeModules} from 'react-native';


const getLang = () => {
    let userPlatform = Platform.OS
    let rawLang;
    
    switch (userPlatform) {
      case 'web':
        rawLang = navigator.language ||
                     navigator.userLanguage;
        break;
      case 'ios':
        rawLang = NativeModules.SettingsManager.settings.AppleLocale ||
                    NativeModules.SettingsManager.settings.AppleLanguages[0]
        break;
      case 'android':
        rawLang = NativeModules.I18nManager.localeIdentifier
        break;
    }
    if(rawLang){
      // News catcher api uses just the 2 first lower case language identifiers
      let formatedLang = rawLang.substring(0, 2); 
      return formatedLang.toLowerCase();
    }
    else{
      // In the case that something went wrong it will return just english!
      return 'en'
    }
  }

export default getLang 