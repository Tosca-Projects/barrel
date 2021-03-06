module Utils {
    export interface Map<T> { [id: string]: T; }
    export interface Set { [id: string]: boolean; }

    export function cloneMap<T>(x: Map<T>) {
        var r : Map<T> = {};
        for (var k in x)
            r[k] = x[k];
        return r;
    }

    export function makeSet(x: string[]) {
        var r : Set = {};
        for (var i = 0; i < x.length; i++)
            r[x[i]] = true;
        return r;
    }

    export function isEmptySet(x: Set) {
        for (var a in x)
            return false;

        return true;
    }

    export function setCount(x: Set) {
        var r = 0;
        for (var a in x)
            r++;

        return r;
    }

    export function setContains(a: Set, b: Set) {
        for (var x in b)
            if (!(x in a))
                return false;

        return true;
    }

    export function setEquals(a: Set, b: Set) {
        return setContains(a, b) && setContains(b, a);
    }

    export function setUnion(a: Set, b: Set) {
        var r : Set = {};

        for (var x in a)
            r[x] = true;

        for (var x in b)
            r[x] = true;

        return r;
    }

    export function setIntersection(a: Set, b: Set) {
        var r : Set = {};

        for (var x in a)
            if (x in b)
                r[x] = true;

        return r;
    }

    export function setDiff(a: Set, b: Set) {
        var r : Set = {};

        for (var x in a)
            if (!(x in b))
                r[x] = true;

        return r;
    }
}