// This is the same as above, but with an extra parameter.
// Note: to make this work though, we had to use an any. This
// can be worked out by using a generic interface.

interface CacheHostGeneric<ContentType> {
    save: (a: ContentType) => void;
}

// Now when the CacheHostGeneric is used, you need to tell
// it what ContentType is.

function addTypedObjectToCache<Type, Cache extends CacheHostGeneric<Type>>(
    obj: Type,
    cache: Cache,
): Cache {
    cache.save(obj);
    return cache;
}

class SuperCache<T> implements CacheHostGeneric<T> {
    private readonly store: T[] = [];

    save(a: T) {
        this.store.push(a);
    }

    getSome() {
        return this.store.pop();
    }
}

const cache = new SuperCache<number>();

addTypedObjectToCache(123, cache);

type PickedCacheHost = Required<
    Pick<
        CacheHostGeneric<string>,
        'save'
    >
>;
