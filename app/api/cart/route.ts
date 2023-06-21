import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { addToCart, removeFromCart, updateCart } from 'lib/swell';
import { isShopifyError } from 'lib/type-guards';

function formatErrorMessage(err: Error): string {
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
}

export async function POST(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('sessionToken')?.value;
  const { variantId, productId, quantity } = await req.json();

  console.log(cartId);

  if (!cartId?.length || !variantId?.length) {
    return NextResponse.json({ error: 'Missing session or variantId' }, { status: 400 });
  }
  try {
    await addToCart(cartId, {
      variantId,
      productId,
      quantity
    });
    return NextResponse.json({ status: 204 });
  } catch (e) {
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ status: 500 });
  }
}

export async function PUT(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('sessionToken')?.value;
  const { quantity, itemId } = await req.json();

  if (!cartId || !quantity || !itemId) {
    return NextResponse.json({ error: 'Missing cartId, itemId, or quantity' }, { status: 400 });
  }
  try {
    await updateCart(cartId, {
      itemId,
      quantity
    });
    return NextResponse.json({ status: 204 });
  } catch (e) {
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('cartId')?.value;
  const { itemId } = await req.json();

  if (!cartId || !itemId) {
    return NextResponse.json({ error: 'Missing cartId or itemId' }, { status: 400 });
  }
  try {
    await removeFromCart(cartId, itemId);
    return NextResponse.json({ status: 204 });
  } catch (e) {
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ status: 500 });
  }
}
