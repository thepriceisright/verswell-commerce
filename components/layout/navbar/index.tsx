import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getCategories, getMenu } from 'lib/swell';
import { CategoryFragment } from 'lib/swell/__generated__/graphql';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menuAlias = process.env.NEXT_PUBLIC_HEADER_MENU_ALIAS;

  if (menuAlias) {
    const menu = await getMenu(menuAlias);

    return (
      <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
        <div className="block w-1/3 md:hidden">{menu && <MobileMenu menu={menu.items} />}</div>
        <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
          <div className="md:mr-4">
            <Link href="/" aria-label="Go back home">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
            </Link>
          </div>
          {menu?.items.length ? (
            <ul className="hidden md:flex">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/search/${item.slug}`}
                    className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden w-1/3 md:block">
          <Search />
        </div>

        <div className="flex w-1/3 justify-end">
          <Suspense fallback={<CartIcon className="h-6" />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    );
  } else {
    // This is a fallback in case a nav menu hasn't been defined.
    // You can remove this and the parent if/else block if you are using getMenu().
    const menu = await getCategories();

    return (
      <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
        <div className="block w-1/3 md:hidden">{menu && <MobileMenu menu={menu} />}</div>
        <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
          <div className="md:mr-4">
            <Link href="/" aria-label="Go back home">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
            </Link>
          </div>
          {menu?.length ? (
            <ul className="hidden md:flex">
              {menu.slice(0, 3).map((item: CategoryFragment) => (
                <li key={item.name}>
                  <Link
                    href={`/search/${item.slug}`}
                    className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden w-1/3 md:block">
          <Search />
        </div>

        <div className="flex w-1/3 justify-end">
          <Suspense fallback={<CartIcon className="h-6" />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    );
  }
}
