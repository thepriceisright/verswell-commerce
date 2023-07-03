import { TAGS } from 'lib/constants';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// We always need to respond with a 200 status code to Swell,
// otherwise it will continue to retry the request.
export async function POST(req: NextRequest): Promise<Response> {
  const collectionWebhooks = ['category.created', 'category.deleted', 'category.updated'];
  const productWebhooks = ['product.created', 'product.deleted', 'product.updated'];
  const { type } = await req.json();
  const secret = req.nextUrl.searchParams.get('secret');
  const isCollectionUpdate = collectionWebhooks.includes(type);
  const isProductUpdate = productWebhooks.includes(type);

  if (!secret || secret !== process.env.SWELL_REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.');
    return NextResponse.json({ status: 200 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
