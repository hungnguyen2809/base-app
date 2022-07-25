import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEY {
  ACCESS_TOKEN = 'AccessToken',
}

export const setDataStorage = async (key: string, data: any) => {
  try {
    const value = JSON.stringify(data);
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return null;
  }
};

export const getDataStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    return null;
  }
};

export const removeDataStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return null;
  }
};

export const getAllKeyStorage = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    return null;
  }
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return null;
  }
};
