'use client';

import clsx from 'clsx';
import { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { ListItem, PathFilterItem } from '.';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getActive = () => pathname === '/search/' + item.slug;

  const [active, setActive] = useState(getActive);

  useEffect(() => {
    setActive(getActive);
  }, [pathname, item.slug]);

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={item.name}>
      <Link
        href={createUrl('/search/' + item.slug, searchParams)}
        className={clsx('w-full hover:text-gray-800 dark:hover:text-gray-100', {
          'text-gray-600 dark:text-gray-400': !active,
          'activeeee font-semibold text-black dark:text-white': active
        })}
      >
        {item.name}
      </Link>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(searchParams.get('sort') === item.slug);

  useEffect(() => {
    setActive(searchParams.get('sort') === item.slug);
  }, [searchParams, item.slug]);

  const href =
    item.slug && item.slug.length
      ? createUrl(pathname, new URLSearchParams({ sort: item.slug }))
      : pathname;

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={item.name}>
      <Link
        prefetch={false}
        href={href}
        className={clsx('w-full hover:text-gray-800 dark:hover:text-gray-100', {
          'text-gray-600 dark:text-gray-400': !active,
          'font-semibold text-black dark:text-white': active
        })}
      >
        {item.name}
      </Link>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'sortKey' in item ? <SortFilterItem item={item} /> : <PathFilterItem item={item} />;
}
