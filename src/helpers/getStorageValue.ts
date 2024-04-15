const getStorageValue = <T>(key: string, defaultValue: T): T => {
    const saved = localStorage.getItem(key)
    const initial = saved ? JSON.parse(saved) : defaultValue
  
    return initial
  }
  export default getStorageValue