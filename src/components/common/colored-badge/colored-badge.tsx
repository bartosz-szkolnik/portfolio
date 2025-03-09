'use client';

import dynamic from 'next/dynamic';

export const ColoredBadge = dynamic(() => import('./colored-badge.client'), { ssr: false });
