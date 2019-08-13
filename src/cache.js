import * as alfy from "alfy";

export const with_cache = async (key, get_value, fun) => {
    if (!alfy.cache.has(key)) {
        const value = await get_value();
        alfy.cache.set(key, value);
    }

    const value = alfy.cache.get(key);
    fun(value);
}