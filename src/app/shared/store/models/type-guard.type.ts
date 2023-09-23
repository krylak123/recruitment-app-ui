export type TypeGuard<A, B extends A> = (a: A) => a is B;
