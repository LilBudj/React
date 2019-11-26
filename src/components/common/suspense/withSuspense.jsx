import React from 'react'
import Preloader from "../preloader/Preloader";

export const withSuspense = (Component) => {
    return <React.Suspense fallback={<Preloader/>}>
        <Component/>
    </React.Suspense>
};