'use server';

import { addToCart, removeFromCart, updateCart } from 'lib/swell';
import { cookies } from 'next/headers';

export const addItem = async (productId: string | undefined): Promise<Error | undefined> => {
  const cartId = cookies().get('sessionToken')?.value;

  if (!cartId || !productId) {
    return new Error('Missing cartId or variantId');
  }

  try {
    const data = await addToCart(cartId, { quantity: 1, productId });
    cookies().set('sessionToken', data.headers.get('X-Session'));
  } catch (e) {
    return new Error('Error adding item', { cause: e });
  }
};

export const removeItem = async (itemId: string): Promise<Error | undefined> => {
  const cartId = cookies().get('sessionToken')?.value;

  if (!cartId) {
    return new Error('Missing cartId');
  }
  try {
    await removeFromCart(cartId, itemId);
  } catch (e) {
    return new Error('Error removing item', { cause: e });
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<Error | undefined> => {
  const cartId = cookies().get('sessionToken')?.value;

  if (!cartId) {
    return new Error('Missing cartId');
  }
  try {
    await updateCart(cartId, {
      id: lineId,
      variantId,
      quantity
    });
  } catch (e) {
    return new Error('Error updating item quantity', { cause: e });
  }
};
