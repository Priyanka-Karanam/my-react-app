import React, { lazy, Suspense } from 'react';
const Button = lazy(() => import('./Button'));
const LazyButton = () => {
return (
<Suspense fallback={<div>Loading...</div>}>
<Button />
</Suspense>
);
};
export default LazyButton;