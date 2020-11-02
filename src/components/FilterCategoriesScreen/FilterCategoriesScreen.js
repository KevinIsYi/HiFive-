import React from 'react';

import { BannerImage } from '../BannerImage/BannerImage';
import { DepartmentsFilter } from '../DepartmentsFilter/DepartmentsFilter';

export const FilterCategoriesScreen = () => {

    return (
        <>
            <BannerImage
                image="categories-banner"
                imageText="New Pets Items"
                botonText="Shop"
            />
            <DepartmentsFilter />
        </>
    )
}
