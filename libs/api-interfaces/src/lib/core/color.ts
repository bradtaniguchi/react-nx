export type Color = string & { readonly brand: unique symbol };

export const Color = (color: string): Color => color as Color;
